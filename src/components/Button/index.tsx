import styled, { css } from 'styled-components';
import { Button as ButtonAntd } from 'antd';

export const Button = styled(ButtonAntd)`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    border: none;
    color: ${theme.colors.white};
    display: flex;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
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
