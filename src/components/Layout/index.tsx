import React from 'react';

import { Layout } from 'antd';

import {useAuth} from '../../hooks/auth';

import Header from 'components/Header';
import Content from 'components/Content';

import * as s from './styles';

const LayoutContainer: React.FC = ({ children }) => {

  const {userData, signOut} = useAuth();

  return (
    <s.LayoutContainer>
      <Layout>
        <Layout>
          <Header balance={300} userName={userData.name} logout={signOut}/>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </s.LayoutContainer>
  );
};

export default LayoutContainer;
