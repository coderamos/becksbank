import { Modal as ModalAntd } from 'antd';
import styled, { css } from 'styled-components';

import * as Font from 'components/Fonts';

export const Modal = styled(ModalAntd)``;

export const InfoGroup = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 65px 0px;
  `}
`;

export const Title = styled(Font.BigTitle)``;

export const FeaturedTitle = styled(Font.BigTitle)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;

export const Description = styled(Font.Description)``;

export const Text = styled(Font.Text)`
  ${({ theme }) => css`
    opacity: 0.6;
  `}
`;

export const ButtonWrapper = styled.div`
  ${() => css`
    width: 170px;
    margin: 5px;
  `}
`;

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: ${theme.spacings.xxlarge};
  `}
`;
