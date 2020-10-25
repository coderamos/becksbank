import React from 'react';

import Card from 'components/Card';
import * as Font from 'components/Fonts';

import * as s from './styles';

const PublicityCard: React.FC = () => {
 return (
  <Card>
    <Font.Description>Publicidade</Font.Description>
    <s.CardContent>
      <s.Logo />
      <s.PublicityTitle>
        A sua nova forma de transferir
      </s.PublicityTitle>
    </s.CardContent>
  </Card>
 )
}

export default PublicityCard;
