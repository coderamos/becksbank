import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import barbecueImage from 'assets/images/barbecue.svg';

import * as Font from 'components/Fonts';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
`;

export const NotPayments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img.attrs({
  src: barbecueImage
})`
  height: 15rem;
`;

export const Message = styled(Font.Text)`
  text-align: justify;
`;

export const PaymentContent = styled.div`
  ${({ theme }) => css``}
`;

export const ButtonGroup = styled.div`
  ${() => css`
    display: flex;
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

export const Title = styled(Font.Title)``;

export const DescriptionWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xlarge} 0;
  `}
`;

export const Description = styled(Font.Description)`
  ${media.lessThan('large')`
    max-width: 30rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

export const Text = styled(Font.Text)``;
