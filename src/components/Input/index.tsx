import React from 'react';
import { InputProps } from 'antd/es/input';
import { PasswordProps } from 'antd/es/input/Password';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

import * as s from './styles';

const InputText: React.FC<InputProps> = () => {
  return <s.InputTextWrapper />;
};

const InputPassword: React.FC<PasswordProps> = ({ placeholder }) => {
  return (
    <s.InputPasswordWrapper
      placeholder={placeholder}
      iconRender={visible =>
        visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
      }
    />
  );
};

export { InputText, InputPassword };
