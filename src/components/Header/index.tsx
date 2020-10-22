import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';

import { Container } from 'components/Container';
import Balance from 'components/Balance';

import * as s from './styles';

type HeaderProps = {
  userName: string;
  balance: string;
  logout: () => void;
};

const Header: React.FC<HeaderProps> = ({ userName, balance, logout }) => {
  return (
    <s.HeaderContainer>
      <Container>
        <s.Logo />
        <s.UserContainer>
          <s.UserContent>
            <s.UserName>Olá, {userName}</s.UserName>
            <Balance>{balance}</Balance>
            <button onClick={logout}>Sair <LogoutOutlined /></button>
          </s.UserContent>
          <s.Divisor />
        </s.UserContainer>
      </Container>
    </s.HeaderContainer>
  );
};

export default Header;
