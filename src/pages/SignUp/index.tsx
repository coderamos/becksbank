import React, { useState } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const onFinish = async values => {
    const { name, email, password, document } = values;
    const user = new User(name, email, 'USER', document, password);

    try {
      setFetching(true);
      await APIService.createUser(user);
      message.success('Conta criada com sucesso!');
      navigate('/login');
    } catch (error) {
      console.error(error);
      message.error('Não foi possível criar a conta');
    } finally {
      setFetching(false);
    }
  };

  // const onFinishFailed = errorInfo => {
  //   console.log('FAILED:', errorInfo);
  // };

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
          >
            <FormItem
              required
              label="Nome"
              name="name"
              validateTrigger="onBlur"
              rules={[
                { required: true, message: 'O campo Nome deve ser informado!' }
              ]}
            >
              <InputText />
            </FormItem>

            <FormItem
              label="CPF"
              name="document"
              validateTrigger="onBlur"
              rules={[
                { required: true, message: 'O campo CPF deve ser informado!' },
                () => ({
                  validator(rule, value) {
                    if (!value || Utils.validarCPF(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject('Por favor, informe um CPF válido!');
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
                {
                  required: true,
                  message: 'O campo E-mail deve ser informado!'
                },
                {
                  type: 'email',
                  message: 'Por favor, informe um E-mail válido!'
                }
              ]}
            >
              <InputEmail />
            </FormItem>

            <FormItem
              label="Senha"
              name="password"
              validateTrigger="onBlur"
              rules={[
                { required: true, message: 'O campo Senha deve ser informado!' }
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
            <s.CreateAccountMessageLink to="/login">
              entrar
            </s.CreateAccountMessageLink>
          </s.CreateAccountMessage>
        </s.Content>
      </s.SignupContent>
    </s.SignUpContainer>
  );
};

export default SignUp;
