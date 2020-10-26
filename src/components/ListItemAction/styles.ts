import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import {
  Title as TitleComponent,
  Description as DescriptionComponent
} from 'components/Fonts';

export const ListItemContainer = styled.div`
  display: flex;
  padding: 14px 0;
  justify-content: space-between;
  max-width: 100%;
`;

export const ListItemData = styled.div`
  width: 100%;
`;

export const Title = styled(TitleComponent)`
  text-transform: capitalize;
`;

export const Description = styled(DescriptionComponent)`
  ${({ theme }) => css`
    text-transform: lowercase;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    ${media.lessThan('medium')`
      max-width: 20rem;
    `}
  `}
`;
