import React, { useRef } from 'react';
import { Input, message } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { InputText, InputPassword } from 'components/Input';

import * as s from './styles';

export default function SignUp() {
  const nameInputRef = useRef<Input>(null);
  const passwordInputRef = useRef<Input>(null);

  function handleSubmit() {
    if (!nameInputRef || !passwordInputRef) {
      return console.error('name ref or password ref not found');
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
    <s.SignUpContainer>
      <Container>
        <s.Content>
          <s.Logo />
          <s.InputGroupWrapper>
            <InputText placeholder="name" suffix={<s.UserIcon />} />
            <InputPassword
              placeholder="password"
              iconRender={visible =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
            />
          </s.InputGroupWrapper>
          <Button onClick={handleSubmit}>create account</Button>
          <s.CreateAccountMessage>
            already have an account?&ensp;
            <s.CreateAccountMessageLink to="/">
              log in
            </s.CreateAccountMessageLink>
          </s.CreateAccountMessage>
        </s.Content>
      </Container>
    </s.SignUpContainer>
  );
}
