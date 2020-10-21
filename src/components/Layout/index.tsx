import React from 'react';

import { Layout } from 'antd';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Content from 'components/Content';

import * as s from './styles';

const LayoutTeste: React.FC = ({ children }) => {
  return (
    <s.LayoutContainer>
      <Layout>
        <Layout>
          <Header balance={300} userName={'Fulano'}/>
          <Content>{children}</Content>
          <Footer />
        </Layout>
      </Layout>
    </s.LayoutContainer>
  );
};

export default LayoutTeste;
