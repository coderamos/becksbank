import React, { useEffect, useState } from 'react';

import Layout from 'components/Layout';
import CardTransfer from 'components/CardTransfer';
import BalanceCard from 'components/BalanceCard';

import { useAccount } from 'hooks/account';
import Account from 'repository/Account';

import * as s from './styles';

const Transfers: React.FC = () => {
  const [contactsAccounts, setContactsAccounts] = useState<Account[]>([]);

  const {getAllAccounts} = useAccount();

  useEffect(() => {

    const getContacts = async () => {
      const teste = await getAllAccounts();
      setContactsAccounts(teste);
      console.log("Accounts", teste);
    };

    getContacts();

  }, [getAllAccounts]);

  return (
    <Layout>
      <s.Container>
        {contactsAccounts &&  <CardTransfer contacts={contactsAccounts} />}
        <BalanceCard value="23.456,99"/>
      </s.Container>

    </Layout>

  );
};

export default Transfers;
