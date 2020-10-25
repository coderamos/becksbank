import { Modal as ModalAntd } from 'antd';
import styled, { css } from 'styled-components';

import * as Font from 'components/Fonts';
import { InputCurrency } from 'components/Input';

export const Modal = styled(ModalAntd)``;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 65px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled(Font.BigTitle)``;

export const ButtonWrapper = styled.div`
  ${() => css`
    width: 170px;
    margin: 5px;
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
