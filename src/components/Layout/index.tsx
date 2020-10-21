import React from 'react';

import { Layout } from 'antd';

import Header from 'components/Header';
import Content from 'components/Content';

import * as s from './styles';

const LayoutTeste: React.FC = ({ children }) => {
  return (
    <s.LayoutContainer>
      <Layout>
        <Layout>
          <Header />
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </s.LayoutContainer>
  );
};

export default LayoutTeste;
