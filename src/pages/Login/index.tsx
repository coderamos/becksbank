import React, { useState } from 'react';
import { message } from 'antd';

import APIService from 'services/api';
import AxiosAdapter from 'services/api/adapters/axios';
import { login } from 'services/auth';

import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { Form, FormItem } from 'components/Form';
import { InputText, InputPassword } from 'components/Input';

import * as s from './styles';

const apiService: APIService = new APIService(new AxiosAdapter());

export default function Login({ history }) {
  const [isFetching, setFetching] = useState(false);

  const onFinish = async ({ email, password }) => {
    try {
      setFetching(true);
      const token = await apiService.login(email, password);
      login(token);
      history.push('/dashboard');
    } catch (err) {
      console.error('error on login', err);
      message.error('Erro ao realizar o login. Verifique seu usário e senha');
    } finally {
      setFetching(false);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('FAILED:', errorInfo);
  };

  return (
    <Container>
      <s.LoginContainer>
        <s.Content>
          <s.Logo />
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <FormItem
              label="email"
              name="email"
              rules={[
                { required: true, message: 'input name cannot be empty!!' }
              ]}
            >
              <InputText />
            </FormItem>

            <FormItem
              label="password"
              name="password"
              rules={[
                { required: true, message: 'input password cannot be empty!' }
              ]}
            >
              <InputPassword />
            </FormItem>

            <FormItem>
              <Button type="primary" htmlType="submit" loading={isFetching}>
                login
              </Button>
            </FormItem>
          </Form>

          <s.CreateAccountMessage>
            or&ensp;
            <s.CreateAccountMessageLink to="/signup">
              create my account
            </s.CreateAccountMessageLink>
          </s.CreateAccountMessage>
        </s.Content>
      </s.LoginContainer>
    </Container>
  );
}
