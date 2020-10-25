import React, { useEffect, useState } from 'react';
import { message } from 'antd';

import Layout from 'components/Layout';
import CardTransfer from 'components/CardTransfer';
import BalanceCard from 'components/BalanceCard';
import DepositModal from 'components/Modal/DepositModal';

import { useAccount } from 'hooks/account';
import Account from 'repository/Account';
import APIService from 'services/api';
import Utils from 'utils/Utils';

import * as s from './styles';

const Transfers: React.FC = () => {
  const [contactsAccounts, setContactsAccounts] = useState<Account[]>([]);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [accountSelected, setAcccountSelected] = useState<Account>(
    {} as Account
  );

  const { getAllAccounts, userAccountData, refreshAccount } = useAccount();

  useEffect(() => {
    const getContacts = async () => {
      const accounts = await getAllAccounts();
      setContactsAccounts(accounts);
    };

    getContacts();
  }, [getAllAccounts]);

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
      <s.Container>
        {contactsAccounts && (
          <CardTransfer
            onClick={showModalTransfer}
            contacts={contactsAccounts}
          />
        )}
        <BalanceCard value={Utils.formatMoney(userAccountData.balance)} />
      </s.Container>
      <DepositModal
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
