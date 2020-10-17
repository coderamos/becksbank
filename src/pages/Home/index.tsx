import React from 'react';
import Heading from 'components/Heading';
import { Container } from 'components/Container';

import * as s from './styles';

export default function Home() {
  return (
    <s.Container>
      <Container>
        <Heading color="primary">Beck's Bank</Heading>
      </Container>
    </s.Container>
  );
}
