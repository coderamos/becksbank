import styled, { css } from 'styled-components';

const fontBase = css`
  ${({ theme }) => css`
    color: ${theme.colors.greenHigh};
    font-weight: ${theme.font.bold};
    margin: 0;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    ${fontBase};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const Description = styled(Text)`
  opacity: 0.6;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    ${fontBase};
    font-size: ${theme.font.sizes.large};
  `}
`;

export const BigTitle = styled.h1`
  ${({ theme }) => css`
    ${fontBase};
    font-size: ${theme.font.sizes.xxxlarge};
  `}
`;

export const UpperTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.medium};
  `}
`;
