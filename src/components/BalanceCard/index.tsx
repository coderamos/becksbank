import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'components/Card';
import * as Font from 'components/Fonts';
import Button from 'components/Button';

import { useAccount } from 'hooks/account';
import Utils from 'utils/Utils';

import * as s from './styles';

const BalanceCard: React.FC= () => {
  const { userAccountData } = useAccount();

  return (
    <Card>
      <s.CardContent>
        <Font.Description>Saldo disponível</Font.Description>
        <Font.BigTitle>{Utils.formatMoney(userAccountData.balance)}</Font.BigTitle>
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
