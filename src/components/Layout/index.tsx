import React from 'react';

import { Layout } from 'antd';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Content from 'components/MainContent';
import Menu from 'components/Menu';

import * as s from './styles';

const LayoutTeste: React.FC = () => {
  return (
    <s.LayoutContainer>
      <Layout>
        <Menu>Sider</Menu>
        <Layout>
          <Header />
          <Content>Content</Content>
          <Footer />
        </Layout>
      </Layout>
    </s.LayoutContainer>
  );
};

export default LayoutTeste;
