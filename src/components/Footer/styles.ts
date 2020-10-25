import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { UpperTitle } from 'components/Fonts';

import logo from 'assets/images/logo.png';

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    padding-top: calc(${theme.spacings.xxlarge});

    ${media.greaterThan('medium')`
      clip-path: polygon(0 25%, 100% 0%, 100% 100%, 0 100%);
      padding-top: calc(${theme.spacings.xxlarge} * 2);
    `};
  `};
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.grid.gutter};
    grid-template-columns: 1fr 1fr;

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
    `}
  `}
`;

export const Logo = styled.img.attrs({
  src: logo
})`
  ${({ theme }) => css`
    height: 3rem;
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      height: 4rem;
    `}
  `}
`;

export const TitleColumn = styled(UpperTitle)`
  ${({ theme }) => css`
    color: ${theme.colors.greenHigh};
    font-weight: 700;
  `}
`;

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.greenHigh};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`;

export const CopyrightWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.greenHigh};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
    margin: 0;
  `}
`;
