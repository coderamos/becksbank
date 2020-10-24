import styled, { css } from 'styled-components';
import { Button as ButtonAntd } from 'antd';

import { ButtonTypes } from '.';

export const Button = styled(ButtonAntd)<ButtonTypes>`
  ${({ theme, outlined }) => css`
    align-items: center;
    background-color: ${outlined ? theme.colors.white : theme.colors.black};
    border-radius: ${theme.border.radius};
    border: ${outlined
      ? `2px solid ${theme.colors.primary}`
      : '2px solid transparent'};
    color: ${outlined ? theme.colors.primary : theme.colors.white};
    display: flex;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    height: ${theme.spacings.xxlarge};
    justify-content: center;
    width: 100%;

    &:hover {
      background-color: ${outlined
        ? 'rgba(0, 0, 0, 0.1)'
        : theme.colors.greenHigh};
      border: none;
      color: ${outlined ? theme.colors.greenHigh : theme.colors.white};
    }
  `}
`;
