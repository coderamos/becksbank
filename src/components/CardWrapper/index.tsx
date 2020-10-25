import React from 'react';

import * as s from './styles';

const CardWrapperColumn: React.FC = ({ children }) => {
  return (
    <s.CardWrapperColumnContainer>{children}</s.CardWrapperColumnContainer>
  );
};

const CardWrapperRow: React.FC = ({ children }) => {
  return <s.CardWrapperRowContainer>{children}</s.CardWrapperRowContainer>;
};

export { CardWrapperColumn, CardWrapperRow };
