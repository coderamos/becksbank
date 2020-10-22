import styled, { css } from 'styled-components';
import { Button as ButtonAntd } from 'antd';

import { ButtonTypes } from '.';

export const Button = styled(ButtonAntd)<ButtonTypes>`
  ${({ theme, outlined }) => css`
    align-items: center;
    background-color: ${outlined ? 'transparent' : theme.colors.primary};
    border-radius: ${theme.border.radius};
    border: ${outlined ? `2px solid ${theme.colors.primary}` : 'none'};
    color: ${outlined ? theme.colors.primary : theme.colors.white};
    display: flex;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    height: ${theme.spacings.xxlarge};
    justify-content: center;
    width: 100%;

    &:hover {
      background-color: ${theme.colors.greenHigh};
      border: none;
      color: ${theme.colors.white};
    }
  `}
`;
