import React, { useState } from 'react';

import APIService from 'services/api';
import AxiosAdapter from 'services/api/adapters/axios';
import { login as localStorageLogin } from 'services/auth';

import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { Form, FormItem } from 'components/Form';
import { InputText, InputPassword } from 'components/Input';

import * as s from './styles';

const apiService: APIService = new APIService(new AxiosAdapter());

export default function Login() {
  const [isFetching, setFetching] = useState(false);

  const onFinish = async ({ username, password }) => {
    console.log('SUCCESS:', username + ' - ' + password);
    try {
      setFetching(true);
      const token = await apiService.login(username, password);
      localStorageLogin(token);
    } catch (err) {
      console.error('error on login', err);
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
              label="name"
              name="username"
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
