import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'components/Container';
import { userHeaderLinks, adminHeaderLinks } from 'components/Header/constants';
import { useAuth } from 'hooks/auth';

import * as s from './styles';

const Footer: React.FC = () => {
  const { getSession } = useAuth();
  const isAdmin = getSession()?.auth === 'ADMIN';

  const menuLinks = isAdmin ? adminHeaderLinks : userHeaderLinks;

  return (
    <s.FooterContainer>
      <Container>
        <s.Logo />
        <s.Content>
          <s.Column>
            <s.TitleColumn>TESTE</s.TitleColumn>
            <a href="mailto:sac@becksbank">sac@becksbank.com</a>
          </s.Column>

          <s.Column>
            <s.TitleColumn>Follow Us</s.TitleColumn>
            <nav aria-labelledby="social media">
              <span>github</span>
              <span>linkedin</span>
              <span>twitter</span>
            </nav>
          </s.Column>

          <s.Column>
            <s.TitleColumn>Links</s.TitleColumn>
            <nav aria-labelledby="footer resources">
              {menuLinks.map(menuItem => (
                <Link key={menuItem.link} to={menuItem.link}>
                  {menuItem.title}
                </Link>
              ))}
            </nav>
          </s.Column>

          <s.Column aria-labelledby="footer contact">
            <s.TitleColumn>Location</s.TitleColumn>
            <span>Rua das Brejas,</span>
            <span>101 - 12345-678</span>
            <span>São Paulo, Brasil.</span>
          </s.Column>
        </s.Content>

        <s.CopyrightWrapper>
          BECK'S BANK 2020 &copy; Todos os direitos reservados.
        </s.CopyrightWrapper>
      </Container>
    </s.FooterContainer>
  );
};

export default Footer;
