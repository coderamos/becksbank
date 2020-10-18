import styled, { css } from 'styled-components';

import { UserOutlined as UserOutlinedIcon } from '@ant-design/icons';

import logo from 'assets/images/logo.svg';

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
