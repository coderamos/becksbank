import React, { useState, useEffect } from 'react';
import { LogoutOutlined } from '@ant-design/icons';

import { Container } from 'components/Container';
import { userHeaderLinks } from './constants';
import { UpperTitle } from 'components/Fonts';

import { useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/auth';

import * as s from './styles';

type HeaderProps = {
  userName: string;
  logout: () => void;
  onClick?: () => void;
};

const Header: React.FC<HeaderProps> = ({ userName, logout }) => {
  const [activeLink, setActiveLink] = useState<string>('');

  const location = useLocation();
  const { getSession } = useAuth();
  const isAdmin = getSession()?.auth === 'ADMIN';

  const handleActiveLink = link => {
    setActiveLink(link);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [activeLink, location.pathname]);

  return (
    <Container>
      <s.HeaderContainer>
        <s.Logo />
        {!isAdmin && (
          <s.LinksList>
            {userHeaderLinks.map(menuItem => (
              <s.ListItem
                key={menuItem.title}
                className={menuItem.link === activeLink ? 'active' : ''}
                onClick={() => handleActiveLink(menuItem.link)}
              >
                <s.MenuLink to={menuItem.link}>
                  <UpperTitle>{menuItem.title}</UpperTitle>
                </s.MenuLink>
              </s.ListItem>
            ))}
          </s.LinksList>
        )}
        <s.UserInfoWrapper>
          <s.UserName>{`Olá, ${userName}`}</s.UserName>
          <s.Divisor />
          <s.LogoutButton onClick={logout}>
            <LogoutOutlined title="Sair" />
          </s.LogoutButton>
        </s.UserInfoWrapper>
      </s.HeaderContainer>
    </Container>
  );
};

export default Header;
