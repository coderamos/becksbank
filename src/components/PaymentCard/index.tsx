import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'components/Card';
import Button from 'components/Button';
import Loading from 'components/Loading';
import * as s from './styles';

import PaymentSlip from 'repository/PaymentSlip';
import Utils from 'utils/Utils';

type PaymentProps = {
  payment: PaymentSlip;
  onClickPay(code: string): void;
  loading?: boolean;
};

const Payment: React.FC<PaymentProps> = ({ payment, onClickPay, loading }) => {
  function onPay() {
    onClickPay(payment.code);
  }
  let title = 'Boleto Banco ';
  if (payment.destinationUser && payment.destinationUser.bankName) {
    title += payment.destinationUser.bankName;
  }

  return (
    <Card>
      <s.Description>Última cobrança</s.Description>
      {loading ? (<Loading />) : (
        <div>
          {payment.id ? (
        <s.ContentWrapper>
          <s.PaymentContent>
            <s.Title>{title}</s.Title>
            <s.DescriptionWrapper>
              <s.Description>{payment.code}</s.Description>
            </s.DescriptionWrapper>
            <s.Text>{Utils.formatMoney(payment.value)}</s.Text>
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
        </s.ContentWrapper>
      ) : (
        <s.NotPayments>
          <s.Image />
          <s.Message>
            Você não possui pagamentos pendentes. Aproveite e faça um churrasco!
          </s.Message>
        </s.NotPayments>
      )}
        </div>
      )}
    </Card>
  );
};

export default Payment;
