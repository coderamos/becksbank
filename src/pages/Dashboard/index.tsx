import React from 'react';

import { Container } from 'components/Container';
import Layout from 'components/Layout';

import * as s from './styles';

export default function Dashboard() {
  return (
    <s.DashboardContainer>
      <Layout />
    </s.DashboardContainer>
  );
}
