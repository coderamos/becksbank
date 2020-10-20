import React from 'react';

import { Container } from 'components/Container';

import * as s from './styles';

const Content: React.FC = ({ children }) => {
  return (
    <s.ContentContainer>
      <Container>{children}</Container>
    </s.ContentContainer>
  );
};

export default Content;
