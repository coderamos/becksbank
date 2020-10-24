import styled, { css } from 'styled-components';

import media from 'styled-media-query';

export const FooterContainer = styled.section`
  ${({ theme }) => css`
    height: 25vh;
    background-color: ${theme.colors.white};
    clip-path: polygon(0 25%, 100% 0%, 100% 100%, 0 100%);
    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 25%, 100% 0%, 100% 100%, 0 100%);

    `}
  `}
`;
