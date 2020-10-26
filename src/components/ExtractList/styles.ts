import styled, { css } from 'styled-components';

import * as Font from 'components/Fonts';

export const CardContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
    font-size: ${theme.font.sizes.medium};
  `}
`;
