import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'components/Card';
import * as Font from 'components/Fonts';
import Button from 'components/Button';
import * as s from './styles';

const BalanceCard: React.FC = () => {
  return (
    <Card>
      <s.CardContent>
        <Font.Description>Saldo disponível</Font.Description>
        <Font.BigTitle>23.400,89</Font.BigTitle>
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
