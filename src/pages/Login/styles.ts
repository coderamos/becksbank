import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  UserOutlined as UserOutlinedIcon,
  LockOutlined
} from '@ant-design/icons';

import logo from 'assets/images/logo.png';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const LoginContent = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 5;
`;

export const FormTitle = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    border-left: 10px solid ${theme.colors.germanYellow};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bolder};
    margin: ${theme.spacings.small} 0;
    padding: ${theme.spacings.xsmall};
    height: 28px;
  `}
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 40rem;
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

export const PasswordIcon = styled(LockOutlined)`
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
