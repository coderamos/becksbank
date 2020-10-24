import styled, { css } from 'styled-components';

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const WrapperButton = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`;

// export const CardTitle = styled.div`
//   ${({ theme }) => css`
//     margin: ${theme.spacings.medium} 0px;
//   `}
// `;
