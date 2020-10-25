import styled from 'styled-components';

import {Text} from 'components/Fonts';
import barbecueImage from 'assets/images/barbecue.svg';

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ButtonWrapper = styled.div`
  width: 118px;
`;

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
