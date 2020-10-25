import styled, { css } from 'styled-components';

import * as Font from 'components/Fonts';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleValue = styled(Font.Title)`
  margin-right: 30px;
`;

export const TitleDangerValue = styled(TitleValue)`
  ${({ theme }) => css`
    color: ${theme.colors.error};
  `}
`;

export const TitleDate = styled(Font.Title)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;
