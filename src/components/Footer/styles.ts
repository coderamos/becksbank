import styled, { css } from 'styled-components';
import { Layout } from 'antd';

export const FooterContainer = styled(Layout.Footer)`
  ${({ theme }) => css`
    background-color: ${theme.colors.greenLight};
    color: ${theme.colors.white};
  `}
`;
