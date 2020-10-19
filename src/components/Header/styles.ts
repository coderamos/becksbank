import styled, { css } from 'styled-components';
import { Layout } from 'antd';

export const HeaderContainer = styled(Layout.Header)`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `}
`;
