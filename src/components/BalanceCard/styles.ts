import styled, { css } from 'styled-components';

import balanceImage from 'assets/images/wallet.svg';

export const CardContent = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const WrapperButton = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`;

export const BalanceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: right;
`;

export const BalanceImage = styled.img.attrs({
  src: balanceImage
})`
  height: 12rem;
  position: absolute;
  left: 0;
  top: 25%;
`;
