import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import logoWhite from 'assets/images/logo-white.svg';
import { Layout } from 'antd';

export const HeaderContainer = styled(Layout.Header)`
  ${({ theme }) => css`
    height: 20vh;
    /* background: linear-gradient(
      345deg,
      rgba(23, 101, 45, 1) 0%,
      rgba(11, 66, 36, 1) 30%,
      rgba(21, 45, 47, 1) 65%,
      ${theme.colors.greenHigh} 100%
    ); */
    background-color: ${theme.colors.greenHigh};
    color: ${props => props.theme.colors.white};
    line-height: 20px;
    align-items: center;
    display: flex;
    justify-content: space-between;

    /* ${media.greaterThan('huge')`
      height: 8rem;
    `} */

    & > div {
      align-items: center;
      display: flex;
      padding: 20px 0;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      flex-direction: row;

      /* ${media.greaterThan('medium')``}; */
    }
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

export const UserContainer = styled.div`
  min-width: 12rem;
`;

export const UserContent = styled.div`
  display: flex;
`;

export const UserName = styled.span`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    width: 30rem;
    display: flex;
    align-items: center;

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`;

export const BalanceValue = styled.span`
  font-size: ${props => props.theme.font.sizes.small};
  text-transform: capitalize;
`;

export const Divisor = styled.div`
  ${media.greaterThan('medium')`
    height: 6vh;
    border: 1px solid;
    margin: 0 20px;
    opacity: 0.4;
  `}
`;

export const LogoutButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;
