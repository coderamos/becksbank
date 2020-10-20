import styled, { css } from 'styled-components';
import { Layout } from 'antd';

export const MenuContainer = styled(Layout.Sider)`
  ${({ theme }) => css`
    background-color: ${theme.colors.greenHigh};
    color: ${theme.colors.white};
    height: 100vh;
  `}
`;
