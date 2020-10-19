import styled, { css } from 'styled-components';
import { Form } from 'antd';

export const FormContainer = styled(Form)`
  ${({ theme }) => css`
    width: 100%;

    .ant-form-item-has-error .ant-input,
    .ant-form-item-has-error .ant-input-affix-wrapper,
    .ant-form-item-has-error .ant-input:hover,
    .ant-form-item-has-error .ant-input-affix-wrapper:hover {
      border-color: ${theme.colors.error};
    }

    div[role='alert'] {
      color: ${theme.colors.error};
    }
  `}
`;

export const FormItem = styled(Form.Item)`
  ${({ theme }) => css`
    label {
      color: ${theme.colors.greenHigh};
      font-weight: ${theme.font.bold};
    }
    .ant-form-item-label
      > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
      display: none;
    }
  `}
`;
