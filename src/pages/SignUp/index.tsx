import React from 'react';

import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { Form, FormItem } from 'components/Form';
import {
  InputText,
  InputPassword,
  InputEmail,
  InputCpf
} from 'components/Input';

import * as s from './styles';

export default function SignUp() {
  const onFinish = values => {
    console.log('SUCCESS:', values);
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
              name="username"
              rules={[
                { required: true, message: 'input name cannot be empty!' }
              ]}
            >
              <InputText />
            </FormItem>

            <FormItem
              label="cpf"
              name="cpf"
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
              <Button type="primary" htmlType="submit">
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
