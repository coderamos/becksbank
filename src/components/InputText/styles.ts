import styled, { css } from 'styled-components';
import { Input } from 'antd';

export const InputWrapper = styled(Input)`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    border: 2px solid ${theme.colors.greenHigh};
    height: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.small};
  `}
`;
