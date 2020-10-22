import styled, { css, keyframes } from 'styled-components';

const shineLinesAnimation = keyframes`
  0% { background-position: -100px }
  40%, 100% { background-position: 140px }
`;

export const BalanceContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 3rem;
    width: 100%;
  `}
`;

export const BalanceContentVisible = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    display: flex;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    letter-spacing: 0.2rem;
    margin-right: ${theme.spacings.xxsmall};
    width: 100%;
  `}
`;

export const BalanceContentInvisible = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-radius: ${theme.border.radius};
    margin-right: ${theme.spacings.xxsmall};
    background-image: linear-gradient(
      90deg,
      ${theme.colors.greenHigh} 0px,
      ${theme.colors.primary} 40px,
      ${theme.colors.greenHigh} 80px
    );
    background-size: 600px;
    animation: ${shineLinesAnimation} 2s infinite linear;
  `}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;
