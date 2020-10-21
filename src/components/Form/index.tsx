import React from 'react';
import { FormProps, FormItemProps } from 'antd/es/form';

import * as s from './styles';

const Form = ({
  children,
  name,
  initialValues,
  onFinish,
  onFinishFailed
}: FormProps) => {
  return (
    <s.FormContainer
      name={name}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      {children}
    </s.FormContainer>
  );
};

const FormItem = ({
  children,
  label,
  name,
  rules,
  validateTrigger
}: FormItemProps) => {
  return (
    <s.FormItem
      label={label}
      name={name}
      rules={rules}
      validateTrigger={validateTrigger}
    >
      {children}
    </s.FormItem>
  );
};

export { Form, FormItem };
