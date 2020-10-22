import styled, { css } from 'styled-components';

export const TransferContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
    display: flex;
  `}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;

    & + div {
      margin-left: ${theme.spacings.small};
    }
  `}
`;
