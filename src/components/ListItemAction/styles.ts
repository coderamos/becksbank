import styled from 'styled-components';
import {
  Title as TitleComponent,
  Description as DescriptionComponent
} from 'components/Fonts';

export const ListItemContainer = styled.div`
  display: flex;
  padding: 14px 0;
  justify-content: space-between;
`;

export const ListItemData = styled.div`
  width: 100%;
`;

export const Title = styled(TitleComponent)`
  text-transform: capitalize;
`;

export const Description = styled(DescriptionComponent)`
  text-transform: lowercase;
`;
