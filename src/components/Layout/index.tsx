import React from 'react';

import { Layout } from 'antd';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Content from 'components/Content';
import Menu from 'components/Menu';

import * as s from './styles';

const LayoutTeste: React.FC = ({ children }) => {
  return (
    <s.LayoutContainer>
      <Layout>
        <Layout>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </Layout>
      </Layout>
    </s.LayoutContainer>
  );
};

export default LayoutTeste;
