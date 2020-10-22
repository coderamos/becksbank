import styled, { css } from 'styled-components';
import { Card } from 'antd';

export const CardContainer = styled(Card)`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.greenWhite};
    border-radius: ${theme.border.radius};
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    color: ${theme.colors.greenHigh};
    display: flex;
    flex: 1;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    height: 14rem;
    justify-content: center;
    margin: ${theme.spacings.xxsmall};
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 18, 13, 0.19),
        0 6px 6px rgba(0, 18, 13, 0.23);
    }
  `}
`;
