import React from 'react';

import { Form, FormItem } from 'components/Form';
import Select from 'components/Select';
import { InputCurrency } from 'components/Input';
import Button from 'components/Button';

import * as s from './styles';

const Transfer: React.FC = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <s.TransferContainer>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <FormItem
          label="select a contact"
          name="tranferContact"
          rules={[{ required: true, message: 'select one contact!' }]}
        >
          <Select />
        </FormItem>
        <FormItem
          label="input value"
          name="transferValue"
          rules={[
            { required: true, message: 'input password cannot be empty!' }
          ]}
        >
          <InputCurrency />
        </FormItem>

        <FormItem>
          <s.ButtonsContainer>
            <s.ButtonWrapper>
              <Button outlined>clear</Button>
            </s.ButtonWrapper>
            <s.ButtonWrapper>
              <Button htmlType="submit">transfer</Button>
            </s.ButtonWrapper>
          </s.ButtonsContainer>
        </FormItem>
      </Form>
    </s.TransferContainer>
  );
};

export default Transfer;
