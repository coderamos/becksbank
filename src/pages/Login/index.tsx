import React, { useRef } from 'react';
import { Input, message } from 'antd';

import { Button } from 'components/Button';
import { Container } from 'components/Container';
import Heading from 'components/Heading';
import InputText from 'components/InputText';

import * as s from './styles';

export default function Login() {
  const nameInputRef = useRef<Input>(null);
  const passwordInputRef = useRef<Input>(null);

  function handleSubmit() {
    if (!nameInputRef || !passwordInputRef) {
      return;
    }

    const nameValue = nameInputRef.current?.input?.value || '';
    const passwordValue = passwordInputRef.current?.input?.value || '';

    if (!nameValue || !passwordValue) {
      return message.warning('Preencha os campos corretamente');
    }

    console.log('Chama api passando', {
      name: nameValue,
      password: passwordValue
    });
  }

  return (
    <s.DashboardContainer>
      <Container>
        <s.Content>
          <Heading>LOGIN</Heading>
          <s.Logo />
          <s.InputGroupWrapper>
            <InputText
              ref={nameInputRef}
              placeholder="name"
              prefix={<s.UserIcon />}
            />
            <InputText
              ref={passwordInputRef}
              placeholder="password"
              prefix={<s.PasswordIcon />}
            />
          </s.InputGroupWrapper>
          <Button onClick={handleSubmit}>teste</Button>
        </s.Content>
      </Container>
    </s.DashboardContainer>
  );
}
