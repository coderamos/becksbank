import React from 'react';
import styled, { css } from 'styled-components';

import { Input } from 'antd';
import MaskedInput from 'antd-mask-input';
import NumericInput from 'react-enhanced-numeric-input';
import 'react-enhanced-numeric-input/dist/react-enhanced-numeric-input.css';

import { IdcardOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';

export const inputStyle = css`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    border: 2px solid ${theme.colors.black};
    height: ${theme.spacings.xxlarge};

    .ant-input {
      color: ${theme.colors.greenLight};
      font-weight: ${theme.font.bold};

      &::placeholder {
        color: ${theme.colors.greenLight};
        font-weight: ${theme.font.normal};
        opacity: 0.5;
      }
    }

    .ant-input-number-input-wrap {
      height: 100%;
      display: flex;
      align-items: center;
    }

    .ant-input-number-handler-wrap {
      display: none !important;
    }

    &:hover {
      border: 2px solid ${theme.colors.greenLight};
    }

    svg {
      color: ${theme.colors.greenHigh};
      height: 1.6rem;
      width: 1.6rem;

      &:active {
        color: ${theme.colors.greenLight};
      }
    }

    span {
      margin: 0;
    }
  `}
`;

export const InputText = styled(Input).attrs({
  suffix: <UserOutlined />
})`
  ${inputStyle};
`;

export const InputEmail = styled(Input).attrs({
  suffix: <MailOutlined />
})`
  ${inputStyle};
`;

export const InputCpf = styled(MaskedInput).attrs({
  suffix: <IdcardOutlined />,
  mask: '111.111.111-11'
})`
  ${inputStyle};
`;

export const InputPassword = styled(Input.Password)`
  ${inputStyle};
`;

export const InputCurrency = styled(NumericInput).attrs({
  autoFocus: true,
  money: true,
  decimalPrecision: 2,
  thousandSeparator: '.',
  decimalSeparator: ',',
  moneyMask: 'R$'
})`
  ${inputStyle};
  padding: 0 1rem;
  width: 100%;
`;
