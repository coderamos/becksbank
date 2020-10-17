import React from 'react';

import * as s from './styles';

type InputProps = {
  placeholder?: string;
  prefix?: React.ReactNode;
};

export default function InputText({ placeholder, prefix }: InputProps) {
  return <s.InputWrapper placeholder={placeholder} prefix={prefix} />;
}
