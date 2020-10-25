import styled, { css } from 'styled-components';
import { Button as ButtonAntd } from 'antd';

import { ButtonTypes } from '.';

export const Button = styled(ButtonAntd)<ButtonTypes>`
  ${({ theme, outlined }) => css`
    align-items: center;
    background-color: ${outlined ? theme.colors.white : theme.colors.black};
    border-radius: ${theme.border.radius};
    border: ${outlined
      ? `2px solid ${theme.colors.black}`
      : '2px solid transparent'};
    color: ${outlined ? theme.colors.black : theme.colors.white};
    display: flex;
    height: ${theme.spacings.xxlarge};
    justify-content: center;
    width: 100%;
    text-transform: uppercase;

    &:hover {
      background-color: ${outlined ? 'rgba(0, 0, 0, 0.8)' : theme.colors.black};
      border: ${outlined
        ? `2px solid ${theme.colors.black}`
        : '2px solid transparent'};
      color: ${theme.colors.white};
    }
  `}
`;
