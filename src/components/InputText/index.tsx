import styled, { css } from 'styled-components';
import { Input } from 'antd';

const InputText = styled(Input)`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    border: 2px solid ${theme.colors.greenHigh};
    height: ${theme.spacings.xxlarge};
    margin-bottom: ${theme.spacings.small};

    .ant-input {
      color: ${theme.colors.greenLight};

      &::placeholder {
        color: ${theme.colors.greenLight};
        opacity: 0.5;
      }
    }

    svg {
      margin-right: ${theme.spacings.xxsmall};
    }

    &:hover {
      border: 2px solid ${theme.colors.greenLight};
    }
  `}
`;

export default InputText;
