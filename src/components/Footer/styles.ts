import styled, { css } from 'styled-components';
import { Layout } from 'antd';

export const FooterContainer = styled(Layout.Footer)`
  ${({ theme }) => css`
    background-color: ${theme.colors.greenHigh};
    color: ${theme.colors.white};
    height: 10vh;
    padding: ${theme.spacings.small} 0;
  `}
`;
