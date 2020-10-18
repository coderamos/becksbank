import styled, { css } from 'styled-components';

import logo from 'assets/images/logo.svg';
import { UserOutlined as UserOutlinedIcon } from '@ant-design/icons';
import { LockFilled as LockFilledIcon } from '@ant-design/icons';

export const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
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

export const PasswordIcon = styled(LockFilledIcon)`
  ${({ theme }) => css`
    color: ${theme.colors.greenHigh};
  `}
`;
