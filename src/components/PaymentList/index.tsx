import React from 'react';
import { Tag } from 'antd';
import {format, parseISO} from 'date-fns';

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
      <div>
      {payments.map(payment => {
        const title = `Boleto | Banco ${payment.destinationUser.bankName}`;
        const description = `Vencimento: ${
          format(parseISO(payment.dueDate), 'dd/MM/yyyy')
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
      </div>
      {payments.length <=0 && (
        <s.NotPayments>
          <s.Image />
          <s.Message>Você não possui pagamentos pendentes. Aproveite e faça um churrasco!</s.Message>
        </s.NotPayments>

      )}
    </Card>
  );
};

export default CardTransfer;
