import React, { useEffect, useState } from 'react';

import { Layout } from 'antd';

import {useAuth, DecodeUser} from '../../hooks/auth';
import APIService from 'services/api';

import Header from 'components/Header';
import Content from 'components/Content';

import * as s from './styles';

const LayoutContainer: React.FC = ({ children }) => {
  const [userLogged, setUserLogged] = useState<DecodeUser>({} as DecodeUser);
  const [account, setAccount] = useState([]);
  const {getSession, signOut} = useAuth();

  useEffect(() => {
    const userLogged = getSession();
    console.log('User Logged', userLogged);

    setUserLogged(userLogged);

    const handleUserAccount = async () => {
      const account = await APIService.getAccountByUser(userLogged.id);
      console.log('oieee', account);
      setAccount(account);
    };

    handleUserAccount();

  },[getSession]);

  return (
    <s.LayoutContainer>
      <Layout>
        <Layout>
          <Header balance={300} userName={userLogged.name} logout={signOut}/>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </s.LayoutContainer>
  );
};

export default LayoutContainer;
