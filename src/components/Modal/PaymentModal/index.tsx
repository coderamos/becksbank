import React, { useState } from 'react';

import Button from 'components/Button';
import PaymentSlip from 'repository/PaymentSlip';
import Utils from 'utils/Utils';
import APIService from 'services/api';

import * as s from './styles';
import { message } from 'antd';

type PaymentModalProps = {
  paymentSlip: PaymentSlip;
  onConfirm?: (code: string) => void;
  onCancel(): void;
  visible: boolean;
};

const PaymentModal: React.FC<PaymentModalProps> = ({
  paymentSlip,
  onConfirm,
  onCancel,
  visible
}) => {
  const [loading, setLoading] = useState(false);

  const title =
    paymentSlip?.destinationUser?.userName || 'Empresa Fictícia Ltda';

  const bankName = paymentSlip?.destinationUser?.bankName || '';
  const accountCode = paymentSlip?.destinationUser?.accountCode || '';

  const description = `Banco ${bankName}
  | Conta: ${accountCode}`;
  const value = Utils.formatMoney(paymentSlip.value);

  async function handleConfirm() {
    try {
      setLoading(true);
      await APIService.makePayment(paymentSlip.code);
      message.success('Pagamento realizado com sucesso');

      if (onConfirm) {
        onConfirm(paymentSlip.code);
      }
    } catch (err) {
      message.error('Não foi possível realizar o pagamento');
    } finally {
      setLoading(false);
    }
  }

  return (
    <s.Modal visible={visible} footer={null} onCancel={onCancel}>
      <s.Description>Pagamento</s.Description>
      <s.Content>
        <s.InfoGroup>
          <s.Title>{title}</s.Title>
          <s.Text>{description}</s.Text>
          <s.FeaturedTitle>{value}</s.FeaturedTitle>
        </s.InfoGroup>
        <s.ButtonGroup>
          <s.ButtonWrapper>
            <Button loading={loading} onClick={handleConfirm}>
              CONFIRMAR
            </Button>
          </s.ButtonWrapper>
          <s.ButtonWrapper>
            <Button outlined onClick={onCancel}>
              CANCELAR
            </Button>
          </s.ButtonWrapper>
        </s.ButtonGroup>
      </s.Content>
    </s.Modal>
  );
};

export default PaymentModal;
