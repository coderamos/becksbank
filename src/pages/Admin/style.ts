import styled, { css } from 'styled-components';
import { Table as TableAntd } from 'antd';

import { Button } from 'components/Button';

export const AdminContainer = styled.main`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: ${theme.spacings.xxlarge};
  `}
`;

export const Table = styled(TableAntd)`
  width: 100%;
`;

export const DepositButton = styled(Button)`
  width: 100px;
`;
