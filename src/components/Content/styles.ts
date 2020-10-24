import styled, { css } from 'styled-components';

export const ContentContainer = styled.section`
  ${({ theme }) => css`
    height: 65vh;
    background-color: ${theme.colors.greenHigh};
    color: ${theme.colors.white};
  `}
`;
