import React from 'react';

import { Container } from 'components/Container';
import Heading from 'components/Heading';

import * as s from './styles';

export default function Dashboard() {
  return (
    <s.Container>
      <Container>
        <Heading color="primary">DASHBOARD</Heading>
      </Container>
    </s.Container>
  );
}
