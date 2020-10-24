import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';

import { Container } from 'components/Container';

import * as s from './styles';

type HeaderProps = {
  userName: string;
  balance: string;
  logout: () => void;
};

const Header: React.FC<HeaderProps> = ({ userName, logout }) => {
  return (
    <Container>
      <s.HeaderContainer>
        <s.Logo />
        <s.UserInfoWrapper>
          <s.UserName>Olá, {userName}</s.UserName>
          <s.Divisor />
          <s.LogoutButton onClick={logout}>
            <LogoutOutlined />
          </s.LogoutButton>
        </s.UserInfoWrapper>
      </s.HeaderContainer>
    </Container>
  );
};

export default Header;
