import React from 'react';
import { FormProps, FormItemProps } from 'antd/es/form';
// import useForm from 'antd/es/form/hooks/useForm';

import * as s from './styles';

const useForm = s.FormContainer.useForm;

const Form = ({
  children,
  name,
  initialValues,
  onFinish,
  onFinishFailed,
  form
}: FormProps) => {
  return (
    <s.FormContainer
      form={form}
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
      // required={true}
    >
      {children}
    </s.FormItem>
  );
};

export { Form, FormItem, useForm };
