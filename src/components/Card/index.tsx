import React from 'react';

import * as s from './styles';

type CardProps = {
  children: React.ReactNode;
};

const Card: React.FC = ({ children }: CardProps) => {
  return <s.CardContainer>{children}</s.CardContainer>;
};

export default Card;
