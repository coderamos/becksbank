import React, { useEffect } from 'react';

import { LogoutOutlined } from '@ant-design/icons';

import { Container } from 'components/Container';

import { getToken, decodeToken } from 'services/auth';

import * as s from './styles';

type HeaderProps = {
  userName: string;
  balance: number;
  // logout: () => void;
};

const Header: React.FC<HeaderProps> = ({ userName, balance }) => {
  useEffect(() => {
    const token = getToken();
    const decodeUser = decodeToken(token);
    console.log('decodedUser', decodeUser);
  }, []);

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
            <s.SmallTitle>Olá,</s.SmallTitle>
              <span>{userName}</span>
          </s.UserContent>
          <s.UserContent>
            {/* <button onClick={}>Sair <LogoutOutlined /></button> */}
          </s.UserContent>
        </s.UserContainer>
      </Container>
    </s.HeaderContainer>
  );
};

export default Header;
