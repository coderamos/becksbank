import React from 'react';

import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { Form, FormItem } from 'components/Form';
import { InputText, InputPassword } from 'components/Input';
import { Input } from 'antd';

import * as s from './styles';

export default function Login() {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
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
              label="Username"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' }
              ]}
            >
              <InputText />
            </FormItem>

            <FormItem
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' }
              ]}
            >
              <Input.Password />
            </FormItem>

            <FormItem>
              <Button type="primary" htmlType="submit">
                Submit
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
