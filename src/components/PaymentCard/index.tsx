import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'components/Card';
import * as Font from 'components/Fonts';
import Button from 'components/Button';
import * as s from './styles';

type PaymentProps = {
  title: string;
  code: string;
  value: string;
  onClickPay(code: string): void;
};

const Payment: React.FC<PaymentProps> = ({
  title,
  code,
  value,
  onClickPay
}) => {
  function onPay() {
    onClickPay(code);
  }

  return (
    <Card>
      <Font.Description>Última cobrança</Font.Description>
      <s.PaymentContent>
        <Font.Title>{title}</Font.Title>
        <Font.Description>{code}</Font.Description>
        <Font.Text>{value}</Font.Text>
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
    </Card>
  );
};

export default Payment;

// {
//     "id": 86,
//     "code": "32303230313032342D3030323530302D4F542D3030312F31313131312D3030312F3030383434",
//     "dueDate": "2020-10-24",
//     "value": 25,
//     "user": {
//       "id": 81,
//       "documentNumber": "3",
//       "email": "3",
//       "role": "ADMIN",
//       "password": "3",
//       "name": "3"
//     },
//     "originAccountCode": "11111",
//     "destinationAccountCode": "00844",
//     "destinationBankCode": "001",
//     "category": "OTHERS"
//   }
