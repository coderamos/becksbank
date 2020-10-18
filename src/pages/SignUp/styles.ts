import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { UserOutlined as UserOutlinedIcon } from '@ant-design/icons';

import logo from 'assets/images/logo.svg';

export const SignUpContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const Logo = styled.img.attrs({
  src: logo
})`
  ${({ theme }) => css`
    height: 80px;
    margin-bottom: ${theme.spacings.xxlarge};
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
