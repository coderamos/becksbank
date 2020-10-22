import React from 'react';
import * as s from './styles';

type CardProps = {
  children: React.ReactNode;
  image?: React.ReactNode;
};

const Card: React.FC = ({ children, image }: CardProps) => {
  return <s.CardContainer>{children}</s.CardContainer>;
};

export default Card;
