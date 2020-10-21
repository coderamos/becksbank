import React from 'react';

import {LogoutOutlined} from '@ant-design/icons';

import { Container } from 'components/Container';

import * as s from './styles';

type HeaderProps = {
  userName: string;
  balance: number;
}

const Header: React.FC<HeaderProps> = ({userName, balance}) => {
  return (
    <s.HeaderContainer>
      <Container>
      <s.Logo />
      <s.UserContainer>
        <s.UserContent>
          <s.SmallTitle>Saldo disponível</s.SmallTitle>
          <span>R$ {balance}</span>
        </s.UserContent>
        <s.Divisor />
        <s.UserContent>
          <LogoutOutlined />
        </s.UserContent>
      </s.UserContainer>
      </Container>
    </s.HeaderContainer>
  );
};

export default Header;
