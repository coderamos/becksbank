import React from 'react';

import { ButtonProps } from 'antd/es/button';

import * as s from './styles';

export type ButtonTypes = {
  outlined?: boolean;
} & ButtonProps;

const Button: React.FC<ButtonTypes> = ({ children, outlined = false }) => {
  return <s.Button outlined={outlined}>{children}</s.Button>;
};

export default Button;
