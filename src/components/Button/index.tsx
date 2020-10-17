import styled, { css } from 'styled-components';
import { Button as ButtonAntd } from 'antd';

export const Button = styled(ButtonAntd)`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.primary};
    border-radius: 4rem;
    border: none;
    color: ${theme.colors.white};
    display: flex;
    font-size: ${theme.font.sizes.large};
    height: ${theme.spacings.xlarge};
    justify-content: center;
    width: 40rem;

    &:hover {
      background-color: ${theme.colors.greenHigh};
      color: ${theme.colors.white};
      border: none;
    }
  `}
`;
