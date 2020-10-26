import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const CardWrapperColumnContainer = styled.section`
  ${({ theme }) => css`
    display: grid;
    gap: calc(${theme.grid.gutter} / 2);
  `}
`;

export const CardWrapperRowContainer = styled.section`
  ${({ theme }) => css`
    display: grid;
    gap: calc(${theme.grid.gutter} / 2);

    ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
    `}
  `}
`;
