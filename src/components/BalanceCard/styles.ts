import styled, { css } from 'styled-components';

import balanceImage from 'assets/images/wallet.svg';

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

export const BalanceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BalanceImage = styled.img.attrs({
  src: balanceImage
})`
  height: 8rem;
`;

