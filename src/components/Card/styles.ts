import styled, { css } from 'styled-components';
import { Card } from 'antd';

export const CardContainer = styled(Card)`
  ${({ theme }) => css`
    flex: 1;
    border-radius: ${theme.border.radius};
    margin: ${theme.spacings.xxsmall};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 18, 13, 0.19),
        0 6px 6px rgba(0, 18, 13, 0.23);
    }
  `}
`;
