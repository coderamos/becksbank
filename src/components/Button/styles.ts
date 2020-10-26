import styled, { css } from 'styled-components';
import { Button as ButtonAntd } from 'antd';

import { ButtonTypes } from '.';

const primaryStyle = css`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    border: 2px solid transparent;
    color: ${theme.colors.white};

    &:hover,
    &:focus,
    &:active {
      background-color: rgba(0, 0, 0, 0.85);
      border: 2px solid transparent;
      color: ${theme.colors.white};
    }
  `}
`;

const outlinedStyle = css`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 2px solid ${theme.colors.black};
    color: ${theme.colors.black};

    &:hover,
    &:focus,
    &:active {
      background-color: rgba(0, 0, 0, 0.85);
      border: 2px solid ${theme.colors.black};
      color: ${theme.colors.white};
    }
  `}
`;

export const Button = styled(ButtonAntd)<ButtonTypes>`
  ${({ theme, outlined }) => css`
    align-items: center;
    border-radius: ${theme.border.radius};
    display: flex;
    height: ${theme.spacings.xxlarge};
    justify-content: center;
    text-transform: uppercase;
    width: 100%;

    ${outlined === 'true' ? outlinedStyle : primaryStyle};
  `}
`;
