import React, { useState, useEffect } from 'react';

import Layout from 'components/Layout';
import {CardWrapperRow, CardWrapperColumn} from 'components/CardWrapper';
import BalanceCard from 'components/BalanceCard';
import PublicityCard from 'components/PublicityCard';
import PaymentList from 'components/PaymentList';
import PaymentModal from 'components/Modal/PaymentModal';

import PaymentSlip from 'repository/PaymentSlip';
import APIService from 'services/api';
import { useAccount } from 'hooks/account';

const Payments: React.FC = () => {
  const [payments, setPayments] = useState<PaymentSlip[]>([]);
  const [showModalPayment, setShowPaymentModal] = useState(false);
  const [paymentSelected, setPaymentSelected] = useState<PaymentSlip>(
    {} as PaymentSlip
  );
  const { userAccountData } = useAccount();

  const getPayments = async (userId: number) => {
    const allPayments = await APIService.getPaymentsByUser(userId);
    setPayments(allPayments);
  };

  useEffect(() => {
    getPayments(userAccountData.userId);
  }, []);

  function showPaymentModal(payment: PaymentSlip) {
    setPaymentSelected(payment);
    setShowPaymentModal(true);
  }

  function hidePaymentModal() {
    setShowPaymentModal(false);
  }

  function confirmPayment() {
    getPayments(userAccountData.userId);
  }

  return (
    <Layout>
      <CardWrapperRow>
        <PaymentList
          payments={payments}
          onClick={payment => showPaymentModal(payment)}
        />
        <CardWrapperColumn>
          <BalanceCard />
          <PublicityCard />
        </CardWrapperColumn>
      </CardWrapperRow>

      <PaymentModal
        onCancel={hidePaymentModal}
        onConfirm={confirmPayment}
        visible={showModalPayment}
        paymentSlip={paymentSelected}
      />
    </Layout>
  );
};

export default Payments;
