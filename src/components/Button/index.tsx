import React from 'react';

import { ButtonProps } from 'antd/es/button';
import { ButtonHTMLType } from 'antd/lib/button/button';

import * as s from './styles';

export type ButtonTypes = {
  outlined?: boolean | string;
  htmlType?: ButtonHTMLType;
  onClick?: () => void;
} & ButtonProps;

const Button: React.FC<ButtonTypes> = ({
  children,
  outlined,
  htmlType,
  onClick,
  loading
}) => {
  return (
    <s.Button
      outlined={outlined ? 'true' : 'false'}
      htmlType={htmlType}
      onClick={onClick}
      loading={loading}
    >
      {children}
    </s.Button>
  );
};

export default Button;
