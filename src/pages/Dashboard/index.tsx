import React, { useEffect, useState } from 'react';

import Layout from 'components/Layout';
import PaymentCard from 'components/PaymentCard';
import BalanceCard from 'components/BalanceCard';
import PaymentModal from 'components/Modal/PaymentModal';
import PublicityCard from 'components/PublicityCard';
import ExtractList from 'components/ExtractList';
import { CardWrapperColumn, CardWrapperRow } from 'components/CardWrapper';

import APIService from 'services/api';
import { useAuth } from 'hooks/auth';
import { useAccount } from 'hooks/account';

import { Transaction } from 'repository/Statement';
import PaymentSlip from 'repository/PaymentSlip';

const Dashboard: React.FC = () => {
  const [timerKey, setTimerKey] = useState(0);
  const [statements, setStatements] = useState<Transaction[]>([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastPayment, setLastPayment] = useState<PaymentSlip>(
    {} as PaymentSlip
  );

  const { userAccountData, refreshAccount } = useAccount();

  const { getSession } = useAuth();
  const user = getSession();

  const getAllPayments = async (userId: number) => {
    const allPayments = await APIService.getPaymentsByUser(userId);
    const paymentsFiltered = allPayments.filter(payment => !payment.paid);

    const payment = paymentsFiltered.length
      ? paymentsFiltered[0]
      : ({} as PaymentSlip);

    setLastPayment(payment);
  };

  const getUserStatements = async (accountCode: string) => {
    try {
      setLoading(true);
      const { accountStatements } = await APIService.getStatements(accountCode);

      accountStatements.reverse();
      setStatements(accountStatements.slice(0, 3));
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllPayments(user.id);
    getUserStatements(userAccountData.code);
  }, [user.id, userAccountData.code]);

  function confirmPayment(code: string) {
    setShowPaymentModal(false);
    getUserStatements(userAccountData.code);
    getAllPayments(user.id);
    refreshAccount();
  }

  function hidePaymentModal() {
    setShowPaymentModal(false);
  }

  function viewPaymentModal() {
    setShowPaymentModal(true);
    setTimerKey((prevKey) => prevKey + 1);
  }

  return (
    <Layout>
      <CardWrapperRow>
        <CardWrapperColumn>
          <BalanceCard />
          <PaymentCard payment={lastPayment} onClickPay={viewPaymentModal} loading={loading}/>
        </CardWrapperColumn>
        <CardWrapperColumn>
          <ExtractList extracts={statements} loading={loading} />
          <PublicityCard />
        </CardWrapperColumn>
      </CardWrapperRow>
      <PaymentModal
          visible={showPaymentModal}
          paymentSlip={lastPayment}
          onConfirm={confirmPayment}
          onCancel={hidePaymentModal}
          timerKey={timerKey}
        />
    </Layout>
  );
};

export default Dashboard;
