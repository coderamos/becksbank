import styled, { css } from 'styled-components';

import { Modal as ModalAntd } from 'antd';

import * as Font from 'components/Fonts';
import { InputCurrency } from 'components/Input';

export const Modal = styled(ModalAntd)`
  ${({ theme }) => css`
    padding: 0 calc(${theme.grid.gutter} / 2);
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} ${theme.spacings.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled(Font.BigTitle)``;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;

    & + div {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`;

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacings.xxlarge};
  `}
`;

export const InputValue = styled(InputCurrency)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
  `}
`;
