import styled, { css } from 'styled-components';
import { Table as TableAntd } from 'antd';

import Button from 'components/Button';

export const AdminContainer = styled.main`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
  `}
`;

export const Table = styled(TableAntd)`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const DepositButton = styled(Button)``;
