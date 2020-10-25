import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'components/Container';

import * as s from './styles';

const Footer: React.FC = () => {
  return (
    <s.FooterContainer>
      <Container>
        <s.Logo />
        <s.Content>
          <s.Column>
            <s.TitleColumn>TESTE</s.TitleColumn>
            <a href="mailto:sac@becksbank">sac@becksbank</a>
          </s.Column>

          <s.Column>
            <s.TitleColumn>Follow Us</s.TitleColumn>
            <nav aria-labelledby="social media">
              <a
                href="http://github.com/becksbank"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              <a
                href="https://www.linkedin.com/company/becksbank"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
              <a
                href="https://twitter.com/becksbank"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </a>
            </nav>
          </s.Column>

          <s.Column>
            <s.TitleColumn>Links</s.TitleColumn>
            <nav aria-labelledby="footer resources">
              <Link to="/dashboard">
                <a>início</a>
              </Link>
              <Link to="/transfers">
                <a>transferências</a>
              </Link>
              <Link to="/payments">
                <a>pagamentos</a>
              </Link>
              <Link to="/payments">
                <a>extrato</a>
              </Link>
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
