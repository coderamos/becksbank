import React from 'react';

import errorImage from 'assets/images/error.png';

import * as s from './styles';

const UnauthorizedPage: React.FC = () => (
  <s.UnauthorizedContainer>
    <s.UnauthorizedImageWrapper>
      <s.UnauthorizedImage src={errorImage} />
    </s.UnauthorizedImageWrapper>
  </s.UnauthorizedContainer>
);

export default UnauthorizedPage;
