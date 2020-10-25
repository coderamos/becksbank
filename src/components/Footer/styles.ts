import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { UpperTitle } from 'components/Fonts';

import logo from 'assets/images/logo.png';

export const FooterContainer = styled.footer`
  border: 4px solid blue;
  ${({ theme }) => css`
    height: 25vh;
    height: auto;
    background-color: ${theme.colors.white};
    clip-path: polygon(0 25%, 100% 0%, 100% 100%, 0 100%);

    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 25%, 100% 0%, 100% 100%, 0 100%);
    `};
  `};
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.grid.gutter};
    grid-template-columns: 1fr 1fr;
    margin-top: ${theme.spacings.medium};
    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
    `}
  `}
`;

export const Logo = styled.img.attrs({
  src: logo
})`
  height: 3rem;

  ${media.greaterThan('medium')`
    height: 4rem;
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
  `}
`;
