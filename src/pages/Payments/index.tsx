import React, { useState, useEffect } from 'react';

import Layout from 'components/Layout';
import PaymentList from 'components/PaymentList';
import PaymentModal from 'components/Modal/PaymentModal';

import PaymentSlip from 'repository/PaymentSlip';
import APIService from 'services/api';

import * as s from './styles';

const Payments: React.FC = () => {
  const [payments, setPayments] = useState<PaymentSlip[]>([]);
  const [showModalPayment, setShowPaymentModal] = useState(false);
  const [paymentSelected, setPaymentSelected] = useState<PaymentSlip>(
    {} as PaymentSlip
  );

  const getPayments = async () => {
    const allPayments = await APIService.getPaymentsByUser(78);
    setPayments(allPayments);
  };

  useEffect(() => {
    getPayments();
  }, []);

  function showPaymentModal(payment: PaymentSlip) {
    setPaymentSelected(payment);
    setShowPaymentModal(true);
  }

  function hidePaymentModal() {
    setShowPaymentModal(false);
  }

  function confirmPayment() {
    console.log('confirmou PAGAMENTOS');
    getPayments();
  }

  return (
    <Layout>
      <PaymentList
        payments={payments}
        onClick={payment => showPaymentModal(payment)}
      />
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
