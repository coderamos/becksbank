import React, { useEffect, useState } from 'react';
import { message } from 'antd';

import Layout from 'components/Layout';
import { CardWrapperRow, CardWrapperColumn } from 'components/CardWrapper';
import CardTransfer from 'components/CardTransfer';
import BalanceCard from 'components/BalanceCard';
import TransactionModal from 'components/Modal/TransactiontModal';

import { useAccount } from 'hooks/account';
import { useAuth } from 'hooks/auth';
import Account from 'repository/Account';
import APIService from 'services/api';

const Transfers: React.FC = () => {
  const [contactsAccounts, setContactsAccounts] = useState<Account[]>([]);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [accountSelected, setAcccountSelected] = useState<Account>(
    {} as Account
  );

  const { getAllAccounts, userAccountData, refreshAccount } = useAccount();
  const { getSession } = useAuth();

  useEffect(() => {
    const getContacts = async () => {
      const accounts = await getAllAccounts();
      const sessionUserId = getSession()?.id;

      const filteredAccounts = accounts.filter(account => account.userId !== sessionUserId);
      setContactsAccounts(filteredAccounts);
    };

    getContacts();
  }, [getAllAccounts, getSession]);

  function hideTransferModal() {
    setShowTransferModal(false);
  }

  async function confirmTransfer(accountCode: string, value: string) {
    try {
      await APIService.transferBalance(
        userAccountData.code,
        accountCode,
        value
      );
      message.success('Transferência realizada com sucesso');
      refreshAccount();
      hideTransferModal();
      return Promise.resolve();
    } catch (err) {
      message.error('Não foi possível fazer a transferência');
      return Promise.reject();
    }
  }

  function showModalTransfer(account: Account) {
    setAcccountSelected(account);
    setShowTransferModal(true);
  }

  return (
    <Layout>
      <CardWrapperRow>
        {contactsAccounts && (
          <CardTransfer
            onClick={showModalTransfer}
            contacts={contactsAccounts}
          />
        )}
        <CardWrapperColumn>
          <BalanceCard />
        </CardWrapperColumn>
      </CardWrapperRow>
      <TransactionModal
        title="Transferência"
        account={accountSelected}
        loading={false}
        visible={showTransferModal}
        onCancel={hideTransferModal}
        onConfirm={confirmTransfer}
      />
    </Layout>
  );
};

export default Transfers;
