import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'components/Card';
import * as Font from 'components/Fonts';
import Button from 'components/Button';
import * as s from './styles';

type BalanceCardProps = {
  value: string;
};

const BalanceCard: React.FC<BalanceCardProps> = ({ value }) => {
  return (
    <Card>
      <s.CardContent>
        <Font.Description>Saldo disponível</Font.Description>
        <Font.BigTitle>{value}</Font.BigTitle>
        <s.WrapperButton>
          <Link to="/extract">
            <Button outlined>SALDO DETALHADO</Button>
          </Link>
        </s.WrapperButton>
      </s.CardContent>
    </Card>
  );
};

export default BalanceCard;
