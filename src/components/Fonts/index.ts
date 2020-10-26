import styled, { css } from 'styled-components';
import media from 'styled-media-query';

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

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;

export const Description = styled(Text)`
  ${({ theme }) => css`
    opacity: 0.6;
    font-size: ${theme.font.sizes.large};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
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
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 1;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxxlarge};
    `}
  `}
`;

export const UpperTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.medium};
    margin: 0;
  `}
`;
