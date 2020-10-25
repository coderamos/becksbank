import React from 'react';
import { Title, Description } from '../Fonts';

import * as s from './styles';

type ListProps = {
  title: string | React.ReactElement;
  description: string;
};

const ListItemAction: React.FC<ListProps> = ({
  title,
  description,
  children
}) => {
  return (
    <s.ListItemContainer>
      <s.ListItemData>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </s.ListItemData>
      {children}
    </s.ListItemContainer>
  );
};

export default ListItemAction;
