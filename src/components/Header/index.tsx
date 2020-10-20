import React from 'react';

import { Container } from 'components/Container';

import * as s from './styles';

const Header: React.FC = () => {
  return (
    <s.HeaderContainer>
      <Container>
        <s.Logo />
      </Container>
    </s.HeaderContainer>
  );
};

export default Header;
