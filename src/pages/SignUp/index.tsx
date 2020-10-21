import React, { useState } from 'react';
import { message } from 'antd';

import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { Form, FormItem } from 'components/Form';
import {
  InputText,
  InputPassword,
  InputEmail,
  InputCpf
} from 'components/Input';

import User from 'repository/User';
import APIService from 'services/api';

import * as s from './styles';

export default function SignUp({ history }) {
  const [isFetching, setFetching] = useState(false);

  const onFinish = async values => {
    console.log('SUCCESS:', values);
    const { name, email, password, document } = values;
    const user = new User(name, email, 'ADMIN', document, password);

    try {
      setFetching(true);
      await APIService.createUser(user);
      message.success('Conta criada com sucesso!');
      history.push('/');
    } catch (error) {
      console.error(error);
      message.error('Não foi possível criar a conta');
    } finally {
      setFetching(false);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('FAILED:', errorInfo);
  };

  return (
    <Container>
      <s.SignUpContainer>
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
              name="name"
              rules={[
                { required: true, message: 'input name cannot be empty!' }
              ]}
            >
              <InputText />
            </FormItem>

            <FormItem
              label="cpf"
              name="document"
              rules={[
                { required: true, message: 'input name cannot be empty!' }
              ]}
            >
              <InputCpf />
            </FormItem>

            <FormItem
              label="email"
              name="email"
              rules={[
                { required: true, message: 'input name cannot be empty!' }
              ]}
            >
              <InputEmail />
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
                create account
              </Button>
            </FormItem>
          </Form>

          <s.CreateAccountMessage>
            already have an account?&ensp;
            <s.CreateAccountMessageLink to="/">
              log in
            </s.CreateAccountMessageLink>
          </s.CreateAccountMessage>
        </s.Content>
      </s.SignUpContainer>
    </Container>
  );
}
