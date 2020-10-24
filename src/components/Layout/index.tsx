import React, { useEffect, useState } from 'react';

import { Layout } from 'antd';

import { useAuth, DecodeUser } from 'hooks/auth';
import { useAccount } from 'hooks/account';
import APIService from 'services/api';

import Utils from 'utils/Utils';

import Header from 'components/Header';
import Content from 'components/Content';

import * as s from './styles';

const LayoutContainer: React.FC = ({ children }) => {
  const [userLogged, setUserLogged] = useState<DecodeUser>({} as DecodeUser);
  const { getSession, signOut } = useAuth();
  const { userAccountData } = useAccount();

  useEffect(() => {
    const user = getSession();
    setUserLogged(user);
  }, [getSession]);

  return (
    <s.LayoutContainer>
      <Layout>
        <Layout>
          <Header
            balance={Utils.formatMoney(userAccountData.balance)}
            userName={userLogged.name}
            logout={signOut}
          />
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </s.LayoutContainer>
  );
};

export default LayoutContainer;
