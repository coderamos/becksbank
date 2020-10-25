import styled, { css } from 'styled-components';

export const ContentContainer = styled.section`
  ${({ theme }) => css`
    min-height: 65vh;
    padding-top: ${theme.spacings.medium};
    background-color: ${theme.colors.greenHigh};
    color: ${theme.colors.white};
  `}
`;
