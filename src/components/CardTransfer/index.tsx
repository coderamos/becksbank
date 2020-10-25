import React from 'react';

import Card from '../Card';
import * as Font from '../Fonts';
import ListItemAction from '../ListItemAction';
import Button from '../Button';

import Account from 'repository/Account';

import * as s from './styles';

type ContactProps = {
  contacts: Account[];
}

const CardTransfer: React.FC<ContactProps> = ({contacts}) => {

  return (
    <Card>
      <Font.Description>Contatos</Font.Description>
      {contacts.map((contact) => (
        <ListItemAction
          key={contact.id}
          title={contact.user.name}
          description={contact.user.email}
        >
          <s.ButtonWrapper>
          <Button>Transferir</Button>
          </s.ButtonWrapper>

        </ListItemAction>
      ))}
    </Card>
  )
}

export default CardTransfer;
