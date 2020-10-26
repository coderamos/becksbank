import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'components/Card';
import * as Font from 'components/Fonts';
import Button from 'components/Button';
import * as s from './styles';

import PaymentSlip from 'repository/PaymentSlip';
import Utils from 'utils/Utils';

type PaymentProps = {
  payment: PaymentSlip;
  onClickPay(code: string): void;
};

const Payment: React.FC<PaymentProps> = ({ payment, onClickPay }) => {
  function onPay() {
    onClickPay(payment.code);
  }
  let title = 'Boleto Banco ';
  if (payment.destinationUser && payment.destinationUser.bankName) {
    title += payment.destinationUser.bankName;
  }

  return (
    <Card>
      <Font.Description>Última cobrança</Font.Description>
      {payment.id ? (
        <>
          <s.PaymentContent>
            <Font.Title>{title}</Font.Title>
            <Font.Description>{payment.code}</Font.Description>
            <Font.Text>{Utils.formatMoney(payment.value)}</Font.Text>
          </s.PaymentContent>
          <s.ButtonGroup>
            <s.ButtonWrapper>
              <Button onClick={onPay}>PAGAR</Button>
            </s.ButtonWrapper>
            <s.ButtonWrapper>
              <Link to="/payments">
                <Button outlined>LISTAR TUDO</Button>
              </Link>
            </s.ButtonWrapper>
          </s.ButtonGroup>
        </>
      ) : (
        <s.NotPayments>
          <s.Image />
          <s.Message>
            Você não possui pagamentos pendentes. Aproveite e faça um churrasco!
          </s.Message>
        </s.NotPayments>
      )}
    </Card>
  );
};

export default Payment;
