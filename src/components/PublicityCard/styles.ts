import styled from 'styled-components';

import {Text} from 'components/Fonts';

import logoPix from 'assets/images/pix-bc-logo.png';

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Logo = styled.img.attrs({
  src: logoPix
})`
  height: 7rem;
`;

export const PublicityTitle = styled(Text)`
  margin-top: 16px;
  opacity: 0.6;
`;
