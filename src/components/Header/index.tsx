import React, { useEffect } from 'react';

import { LogoutOutlined } from '@ant-design/icons';

import { Container } from 'components/Container';
import Balance from 'components/Balance';

import * as s from './styles';

type HeaderProps = {
  userName: string;
  balance: number;
  logout: () => void;
};

const Header: React.FC<HeaderProps> = ({ userName, balance, logout }) => {
  return (
    <s.HeaderContainer>
      <Container>
        <s.Logo />
        <s.UserContainer>
          <s.UserContent>
            {/* <s.Saluation>olá,&ensp;</s.Saluation> */}
            {/* <s.UserName>{userName}</s.UserName> */}
            <Balance>{balance}</Balance>
          </s.UserContent>
          {/* <s.Divisor /> */}
          {/* <s.UserContent>
            <s.SmallTitle>Olá,</s.SmallTitle>
            <span>{userName}</span>
          </s.UserContent> */}
          {/* <s.UserContent>
            <button onClick={logout}>
              Sair <LogoutOutlined />
            </button>
          </s.UserContent> */}
        </s.UserContainer>
      </Container>
    </s.HeaderContainer>
  );
};

export default Header;
