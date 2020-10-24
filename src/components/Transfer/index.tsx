import React, { useState } from 'react';

import { Form, FormItem, useForm } from 'components/Form';
import Select from 'components/Select';
import { InputCurrency } from 'components/Input';
import Button from 'components/Button';

import TransferDTO from 'repository/Tranfer';

import * as s from './styles';

type TransferProps = {
  onConfirm(values: TransferDTO): Promise<string>;
};

const Transfer: React.FC<TransferProps> = ({ onConfirm }) => {
  const [formInstance] = useForm();
  const [isFetching, setIsFetching] = useState(false);

  const onFinish = values => {
    setIsFetching(true);
    onConfirm(values)
      .then(() => {
        formInstance.resetFields();
      })
      .finally(() => setIsFetching(false));
  };

  const onCancel = () => {
    formInstance.resetFields();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const handleSelectUser = value => {
    console.log('handle user');
  };

  return (
    <s.TransferContainer>
      <Form
        form={formInstance}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <FormItem
          label="Selecione um contato"
          name="accountCode"
          rules={[{ required: true, message: 'select one contact!' }]}
        >
          <Select onChange={handleSelectUser} />
        </FormItem>
        <FormItem
          label="Valor a ser transferido"
          name="value"
          rules={[
            { required: true, message: 'input password cannot be empty!' }
          ]}
        >
          <InputCurrency />
        </FormItem>

        <FormItem>
          <s.ButtonsContainer>
            <s.ButtonWrapper>
              <Button outlined onClick={onCancel}>
                Limpar
              </Button>
            </s.ButtonWrapper>
            <s.ButtonWrapper>
              <Button loading={isFetching} htmlType="submit">
                Transferir
              </Button>
            </s.ButtonWrapper>
          </s.ButtonsContainer>
        </FormItem>
      </Form>
    </s.TransferContainer>
  );
};

export default Transfer;
