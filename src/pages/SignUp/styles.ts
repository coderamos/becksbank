import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Link } from 'react-router-dom';
import { UserOutlined as UserOutlinedIcon } from '@ant-design/icons';

import logo from 'assets/images/logo.png';

export const SignUpContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100vh;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${theme.colors.white};
  `}
`;

export const SignupContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${media.greaterThan('large')`
    width: 50%;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    padding: 0 ${theme.spacings.small};
    width: 100%;

    ${media.greaterThan('large')`
      padding: 0 calc(${theme.spacings.xxlarge} * 2);
    `}
  `}
`;

export const Logo = styled.img.attrs({
  src: logo
})`
  ${({ theme }) => css`
    height: 8rem;
    margin-bottom: ${theme.spacings.xxlarge};
    ${media.greaterThan('medium')`
      padding: 0 calc(${theme.spacings.xxlarge} * 4);
    `}
  `}
`;

export const InputGroupWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} 0;
  `}
`;

export const UserIcon = styled(UserOutlinedIcon)`
  ${({ theme }) => css`
    color: ${theme.colors.greenHigh};
  `}
`;

export const CreateAccountMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    padding-top: ${theme.spacings.xxsmall};
  `}
`;

export const CreateAccountMessageLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.greenHigh};
    font-weight: ${theme.font.bold};
    text-decoration: none;

    &:hover {
      color: ${theme.colors.greenLight};
    }
  `}
`;
