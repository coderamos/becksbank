import React from 'react';

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
        <s.Title>{title}</s.Title>
        <s.Description>{description}</s.Description>
      </s.ListItemData>
      {children}
    </s.ListItemContainer>
  );
};

export default ListItemAction;
