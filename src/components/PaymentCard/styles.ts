import styled, { css } from 'styled-components';

import { Text } from 'components/Fonts';
import barbecueImage from 'assets/images/barbecue.svg';

export const NotPayments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const Image = styled.img.attrs({
  src: barbecueImage
})`
  height: 15rem;
`;

export const Message = styled(Text)`
  margin-top: 24px;
  opacity: 0.6;
  text-align: center;
`;

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
  ${({ theme }) => css`
    width: 100%;
    & + div {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`;
