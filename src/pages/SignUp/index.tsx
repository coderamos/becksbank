import React, { useState } from 'react';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';

import Button from 'components/Button';
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
import Utils from '../../utils/Utils';
import SideContent from 'components/SideContent';

const SignUp: React.FC = () => {
  const [isFetching, setFetching] = useState(false);
  const history = useHistory();

  const onFinish = async values => {
    console.log('SUCCESS:', values);
    const { name, email, password, document } = values;
    const user = new User(name, email, 'USER', document, password);

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
    <s.SignUpContainer>
      <SideContent />
      <s.SignupContent>
        <s.Content>
          <s.Logo />

          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <FormItem
              label="Nome"
              name="name"
              validateTrigger="onBlur"
              rules={[
                { required: true, message: 'input name cannot be empty!' }
              ]}
            >
              <InputText />
            </FormItem>

            <FormItem
              label="CPF"
              name="document"
              validateTrigger="onBlur"
              rules={[
                { required: true, message: 'cpf cannot be empty!' },
                () => ({
                  validator(rule, value) {
                    if (!value || Utils.validarCPF(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject('Please type a valid CPF!');
                  }
                })
              ]}
            >
              <InputCpf maxLength={11} />
            </FormItem>

            <FormItem
              label="E-mail"
              name="email"
              validateTrigger="onBlur"
              rules={[
                { required: true, message: 'email cannot be empty!' },
                { type: 'email', message: 'Please type a valid email' }
              ]}
            >
              <InputEmail />
            </FormItem>

            <FormItem
              label="Senha"
              name="password"
              validateTrigger="onBlur"
              rules={[
                { required: true, message: 'input password cannot be empty!' }
              ]}
            >
              <InputPassword />
            </FormItem>

            <FormItem>
              <Button type="primary" htmlType="submit" loading={isFetching}>
                Criar conta
              </Button>
            </FormItem>
          </Form>

          <s.CreateAccountMessage>
            já possui uma conta?&ensp;
            <s.CreateAccountMessageLink to="/">
              entrar
            </s.CreateAccountMessageLink>
          </s.CreateAccountMessage>
        </s.Content>
      </s.SignupContent>
    </s.SignUpContainer>
  );
};

export default SignUp;
