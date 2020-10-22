import React from 'react';

import { ButtonProps } from 'antd/es/button';
import { ButtonHTMLType } from 'antd/lib/button/button';

import * as s from './styles';

export type ButtonTypes = {
  outlined?: boolean;
  htmlType?: ButtonHTMLType;
} & ButtonProps;

const Button: React.FC<ButtonTypes> = ({
  children,
  outlined = false,
  htmlType
}) => {
  return (
    <s.Button outlined={outlined} htmlType={htmlType}>
      {children}
    </s.Button>
  );
};

export default Button;
