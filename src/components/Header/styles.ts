import styled, { css, keyframes } from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'react-router-dom';

import logoWhite from 'assets/images/logo-white.png';
import { Layout } from 'antd';

const hoverAnimation = keyframes`
  0% { width: 0; };
  100% { width: 100%; };
`;

const menuActivetemStyle = css`
  ${({ theme }) => css`
    &::after {
      content: '';
      position: absolute;
      bottom: 1rem;
      display: block;
      height: 0.4rem;
      background-color: ${theme.colors.germanYellow};
      animation: ${hoverAnimation} 0.6s forwards;
    }
  `}
`;

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

export const LinksList = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 0;

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
    position: relative;
    &.active,
    &:hover {
      ${menuActivetemStyle};
    }
  `}
`;

export const MenuLink = styled(Link)``;

export const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: 20%;
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
