import React from 'react';

import { Button } from 'components/Button';
import { Container } from 'components/Container';
import Heading from 'components/Heading';
import InputText from 'components/InputText';

import * as s from './styles';

export default function Login() {
  return (
    <s.DashboardContainer>
      <Container>
        <s.Content>
          <Heading>LOGIN</Heading>
          <s.Logo />
          <s.InputGroupWrapper>
            <InputText placeholder="name" prefix={<s.UserIcon />} />
            <InputText placeholder="password" prefix={<s.PasswordIcon />} />
          </s.InputGroupWrapper>
          <Button>teste</Button>
        </s.Content>
      </Container>
    </s.DashboardContainer>
  );
}
