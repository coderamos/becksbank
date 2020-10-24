import styled, { css } from 'styled-components';

export const PaymentContent = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0px;
  `}
`;

export const ButtonGroup = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `}
`;

export const ButtonWrapper = styled.div`
  ${() => css`
    width: 190px;
    margin-left: 10px;
  `}
`;
