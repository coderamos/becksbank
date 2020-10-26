import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import Card from 'components/Card';
import Button from 'components/Button';

import { useAccount } from 'hooks/account';
import Utils from 'utils/Utils';

import * as Font from 'components/Fonts';
import * as s from './styles';

const BalanceCard: React.FC = () => {
  const { userAccountData } = useAccount();

  return (
    <Card>
      <s.CardContent>
        <s.ContentWrapper>
          <s.BalanceWrapper>
            <Font.Description>Saldo disponível</Font.Description>
            <s.BalanceImage />
            <Font.BigTitle>
              {Utils.formatMoney(userAccountData.balance)}
            </Font.BigTitle>
          </s.BalanceWrapper>
          <s.WrapperButton>
            <Link to="/extract">
              <Button outlined>EXTRATO DETALHADO</Button>
            </Link>
          </s.WrapperButton>
        </s.ContentWrapper>
      </s.CardContent>
    </Card>
  );
};

export default memo(BalanceCard);
