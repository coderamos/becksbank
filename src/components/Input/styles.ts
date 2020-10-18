import styled, { css } from 'styled-components';
import { Input } from 'antd';

const inputStyle = css`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    border: 2px solid ${theme.colors.greenHigh};
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

    &:hover {
      border: 2px solid ${theme.colors.greenLight};
    }

    svg {
      color: ${theme.colors.greenLight};
      height: 1.6rem;
      width: 1.6rem;

      &:active {
        color: ${theme.colors.greenLight};
      }
    }
  `}
`;

export const InputTextWrapper = styled(Input)`
  ${inputStyle};
`;

export const InputPasswordWrapper = styled(Input.Password)`
  ${inputStyle};
`;
