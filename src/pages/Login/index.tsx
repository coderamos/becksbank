import React, { useCallback, useState } from 'react';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import APIService from 'services/api';

import Button from 'components/Button';
import { Form, FormItem } from 'components/Form';
import { InputText, InputPassword } from 'components/Input';

import * as s from './styles';

const Login: React.FC = () => {
  const [isFetching, setFetching] = useState(false);

  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async ({ email, password }) => {
      try {
        setFetching(true);
        const token = await APIService.login(email, password);
        signIn(token);
        history.push('/dashboard');
      } catch (err) {
        console.error('error on login', err);
        message.error('Erro ao realizar o login. Verifique seu usário e senha');
      } finally {
        setFetching(false);
      }
    },
    [signIn, history]
  );

  const onFinishFailed = useCallback(errorInfo => {
    console.log('FAILED:', errorInfo);
  }, []);

  return (
    <s.LoginContainer>
      <s.SideImageContainer>
        <s.Overlay>
          <s.OverlayTextWrapper>
            <s.OverlayTextTitle>Title</s.OverlayTextTitle>
            <s.OverlayTextDescription>Descricao</s.OverlayTextDescription>
          </s.OverlayTextWrapper>
        </s.Overlay>
        <s.SideImage />
      </s.SideImageContainer>
      <s.LoginContent>
        <s.Content>
          <s.Logo />
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
          >
            <FormItem
              label="E-mail"
              name="email"
              rules={[
                { required: true, message: 'input name cannot be empty!!' }
              ]}
            >
              <InputText />
            </FormItem>

            <FormItem
              label="Senha"
              name="password"
              rules={[
                { required: true, message: 'input password cannot be empty!' }
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
