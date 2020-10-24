import styled, { css } from 'styled-components';
import { Card } from 'antd';

export const CardContainer = styled(Card)`
  ${({ theme }) => css`
    border-radius: 1.2rem;
  `}
`;
