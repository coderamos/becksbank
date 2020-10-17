import styled, { css } from 'styled-components';

import logo from 'assets/images/logo.svg';
import { UserOutlined as UserOutlinedIcon } from '@ant-design/icons';
import { LockFilled as LockFilledIcon } from '@ant-design/icons';

export const DashboardContainer = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    max-width: 400px;
  `}
`;

export const Logo = styled.img.attrs({
  src: logo
})`
  ${({ theme }) => css`
    height: 120px;
    margin-bottom: 10rem;
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

export const PasswordIcon = styled(LockFilledIcon)`
  ${({ theme }) => css`
    color: ${theme.colors.greenHigh};
  `}
`;
