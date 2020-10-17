import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${() => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
  `}
`;
