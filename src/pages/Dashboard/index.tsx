import React from 'react';

import Layout from 'components/Layout';
import Card from 'components/Card';

import * as s from './styles';

export default function Dashboard() {
  return (
    <s.DashboardContainer>
      <Layout>
        <s.CardsWrapper>
          <Card>TRANSFERIR</Card>
          <Card>EXTRATO</Card>
        </s.CardsWrapper>
        <s.DynamicContentWrapper>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          voluptatum magnam debitis amet distinctio aut excepturi error
          voluptatem earum ad illo velit ratione quidem libero esse est in
          necessitatibus, eveniet quasi! Nihil optio iste minus architecto sint
          autem sed harum similique aliquam! Doloremque, porro. Laudantium
          recusandae consectetur vitae totam reprehenderit!
        </s.DynamicContentWrapper>
      </Layout>
    </s.DashboardContainer>
  );
}
