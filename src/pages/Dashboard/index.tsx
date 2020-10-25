import React, { useEffect, useState } from 'react';
import { message } from 'antd';

import Layout from 'components/Layout';
import PaymentCard from 'components/PaymentCard';
import BalanceCard from 'components/BalanceCard';
import PaymentModal from 'components/Modal/PaymentModal';
import ExtractList from 'components/ExtractList';
import { CardWrapperColumn, CardWrapperRow } from 'components/CardWrapper';

import APIService from 'services/api';
import { useAuth } from 'hooks/auth';
import { useAccount } from 'hooks/account';
import TransferDTO from 'repository/Tranfer';

import { Transaction } from 'repository/Statement';
import PaymentSlip from 'repository/PaymentSlip';

const Dashboard: React.FC = () => {
  const [statements, setStatements] = useState<Transaction[]>([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [lastPayment, setLastPayment] = useState<PaymentSlip>(
    {} as PaymentSlip
  );

  const { userAccountData, refreshAccount } = useAccount();

  const { getSession } = useAuth();
  const user = getSession();

  async function confirmTransfer(values: TransferDTO) {
    try {
      const { accountCode, value } = values;
      await APIService.transferBalance(
        userAccountData.code,
        accountCode,
        value
      );
      message.success('Transferência realizada com sucesso');
      refreshAccount();
      return Promise.resolve('ok');
    } catch (err) {
      message.error('Não foi possível fazer a transferência');
      return Promise.reject('error');
    }
  }

  useEffect(() => {
    if (!userAccountData.code) {
      return;
    }

    const getUserStatements = async () => {
      try {
        const { accountStatements } = await APIService.getStatements(
          userAccountData.code
        );

        setStatements(accountStatements.slice(0, 3));
      } catch (err) {
        console.error(err);
      }
    };

    getUserStatements();
  }, [getSession, userAccountData.code]);

  useEffect(() => {
    const getAllPayments = async () => {
      const allPayments = await APIService.getPaymentsByUser(user.id);
      const paymentsFiltered = allPayments.filter(payment => !payment.paid);

      if (paymentsFiltered.length) {
        setLastPayment(paymentsFiltered[0]);
      }
    };
    getAllPayments();
  }, [user.id]);

  function confirmPayment(code: string) {
    setShowPaymentModal(false);
    return Promise.resolve();
  }

  function hidePaymentModal() {
    setShowPaymentModal(false);
  }

  return (
    <Layout>
      <CardWrapperRow>
        <CardWrapperColumn>
          <BalanceCard />
          <PaymentCard
            payment={lastPayment}
            onClickPay={code => setShowPaymentModal(true)}
          />
        </CardWrapperColumn>
        <CardWrapperColumn>
          <BalanceCard />
          <ExtractList extracts={statements} />
          <PaymentModal
            visible={showPaymentModal}
            paymentSlip={lastPayment}
            onConfirm={confirmPayment}
            onCancel={hidePaymentModal}
          />
        </CardWrapperColumn>
      </CardWrapperRow>
    </Layout>
  );
};

export default Dashboard;
