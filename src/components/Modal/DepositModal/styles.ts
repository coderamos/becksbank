import { Modal as ModalAntd } from 'antd';
import { UserOutlined as UserOutlinedIcon } from '@ant-design/icons';
import styled, { css } from 'styled-components';

import Button from 'components/Button';

export const Modal = styled(ModalAntd)``;

export const UserIcon = styled(UserOutlinedIcon)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin-right: ${theme.spacings.xxsmall};
  `}
`;

export const UserContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
  `}
`;
export const SectionForm = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    margin-top: ${theme.spacings.medium};
  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
`;

export const ConfirmButton = styled(Button)`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall};
  `}
`;

export const CancelButton = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.greenLight};
    margin: ${theme.spacings.xxsmall};
  `}
`;
