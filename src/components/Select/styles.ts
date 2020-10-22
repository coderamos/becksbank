import styled, { css } from 'styled-components';
import { Select as SelectAntd } from 'antd';

export const SelectContainer = styled(SelectAntd)`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
    margin: 0;

    .ant-select-selector {
      border: 2px solid ${theme.colors.greenHigh} !important;
      height: ${theme.spacings.xxlarge} !important;
      display: flex;
      align-items: center;

      input {
        height: ${theme.spacings.xxlarge} !important;
      }
    }
  `}
`;

export const Option = styled(SelectAntd.Option)``;
