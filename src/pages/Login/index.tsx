import React, { useCallback, useState } from 'react';
import { message } from 'antd';

import { useAuth } from '../../hooks/auth';

import Button from 'components/Button';
import { Form, FormItem } from 'components/Form';
import { InputEmail, InputPassword } from 'components/Input';

import SideContent from 'components/SideContent';

import * as s from './styles';

const Login: React.FC = () => {
  const [isFetching, setFetching] = useState(false);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async ({ email, password }) => {
      try {
        setFetching(true);
        await signIn(email, password);
      } catch (err) {
        console.error('error on login', err);
        message.error('Erro ao realizar o login. Verifique seu usário e senha');
        setFetching(false);
      }
    },
    [signIn]
  );

  // const onFinishFailed = useCallback(errorInfo => {
  //   console.log('FAILED:', errorInfo);
  // }, []);

  return (
    <s.LoginContainer>
      <SideContent />
      <s.LoginContent>
        <s.Content>
          <s.Logo />
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
          >
            <s.FormTitle>
              <span>Entrar</span>
            </s.FormTitle>
            <FormItem
              label="E-mail"
              name="email"
              validateTrigger="onBlur"
              rules={[
                {
                  required: true,
                  message: 'O campo E-mail deve ser informado!'
                },
                { type: 'email', message: 'O E-mail informado não é válido!' }
              ]}
            >
              <InputEmail />
            </FormItem>

            <FormItem
              label="Senha"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'O campo Senha deve ser informado!'
                }
              ]}
            >
              <InputPassword />
            </FormItem>

            <FormItem>
              <Button type="primary" htmlType="submit" loading={isFetching}>
                Entrar
              </Button>
            </FormItem>
          </Form>

          <s.CreateAccountMessage>
            ou&ensp;
            <s.CreateAccountMessageLink to="/signup">
              crie sua conta
            </s.CreateAccountMessageLink>
          </s.CreateAccountMessage>
        </s.Content>
      </s.LoginContent>
    </s.LoginContainer>
  );
};

export default Login;
