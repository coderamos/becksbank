import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import logoWhite from 'assets/images/logo-white.svg';
import { Layout } from 'antd';

export const HeaderContainer = styled(Layout.Header)`
  ${({ theme }) => css`
    height: 10vh;
    padding: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.greenHigh};
    color: ${props => props.theme.colors.white};
  `}
`;

export const Logo = styled.img.attrs({
  src: logoWhite
})`
  height: 3rem;

  ${media.greaterThan('medium')`
    height: 4rem;
  `}
`;

export const UserInfoWrapper = styled.div`
  display: flex;
`;

export const UserName = styled.span`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
  `}
`;

export const Divisor = styled.div`
  ${({ theme }) => css`
    border-left: 1px solid ${theme.colors.white};
    margin: 0 ${theme.spacings.small};
    opacity: 0.1;
  `}
`;

export const LogoutButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;
