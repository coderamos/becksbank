import React from 'react';
import { Tag } from 'antd';

import Card from '../Card';
import * as Font from '../Fonts';
import ListItemAction from '../ListItemAction';
import Button from '../Button';

import PaymentSlip from 'repository/PaymentSlip';
import Utils from 'utils/Utils';

import * as s from './styles';

type ContactProps = {
  payments: PaymentSlip[];
  onClick(contact: PaymentSlip): void;
};

const CardTransfer: React.FC<ContactProps> = ({ payments, onClick }) => {
  return (
    <Card>
      <Font.Description>Pagamentos</Font.Description>
      {payments.map(payment => {
        const title = `Boleto | Banco ${payment.destinationUser.bankName}`;
        const description = `Vencimento: ${
          payment.dueDate
        } | ${Utils.formatMoney(payment.value)}`;
        return (
          <ListItemAction
            key={payment.id}
            title={title}
            description={description}
          >
            <s.ButtonWrapper>
              {payment.paid ? (
                <Tag color="green">PAGO</Tag>
              ) : (
                <Button onClick={() => onClick(payment)}>Pagar</Button>
              )}
            </s.ButtonWrapper>
          </ListItemAction>
        );
      })}
    </Card>
  );
};

export default CardTransfer;
