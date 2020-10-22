import React from 'react';

import { Container } from 'components/Container';
import Balance from 'components/Balance';

import * as s from './styles';

type HeaderProps = {
  userName: string;
  balance: number;
  logout: () => void;
};

const Header: React.FC<HeaderProps> = ({ userName, balance }) => {
  return (
    <s.HeaderContainer>
      <Container>
        <s.Logo />
        <s.UserContainer>
          <s.UserContent>
            <s.UserName>Olá, {userName}</s.UserName>
            <Balance>{balance}</Balance>
          </s.UserContent>
        </s.UserContainer>
      </Container>
    </s.HeaderContainer>
  );
};

export default Header;
