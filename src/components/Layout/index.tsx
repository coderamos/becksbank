import React, { useEffect, useState } from 'react';

import { Layout } from 'antd';

import {useAuth, DecodeUser} from '../../hooks/auth';
import APIService from 'services/api';

import Utils from 'utils/Utils';

import Header from 'components/Header';
import Content from 'components/Content';

import * as s from './styles';

const LayoutContainer: React.FC = ({ children }) => {
  const [userLogged, setUserLogged] = useState<DecodeUser>({} as DecodeUser);
  const [balance, setBalance] = useState('');
  const {getSession, signOut} = useAuth();

  useEffect(() => {
    const userLogged = getSession();
    setUserLogged(userLogged);

    const handleUserAccount = async () => {
      const accounts = await APIService.getAccountByUser(userLogged.id);
      setBalance(Utils.formatMoney(accounts[0].balance))
    };

    handleUserAccount();

  },[getSession]);

  return (
    <s.LayoutContainer>
      <Layout>
        <Layout>
          <Header balance={balance} userName={userLogged.name} logout={signOut}/>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </s.LayoutContainer>
  );
};

export default LayoutContainer;
