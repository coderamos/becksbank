import React, { useEffect, useState } from 'react';
import { message } from 'antd';

import APIService from 'services/api';
import Account from 'repository/Account';

import TransactionModal from 'components/Modal/TransactiontModal';
import Layout from 'components/Layout';

import * as s from './style';

const Admin: React.FC = () => {
  const [allAccounts, setAccounts] = useState<Account[]>([]);
  const [isFetching, setFetching] = useState(false);
  const [isFetchingDeposit, setFetchingDeposit] = useState(false);
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [accountSelected, setAccountSelected] = useState<Account>(null);

  function handleDepositAccount(account: Account) {
    setAccountSelected(account);
    setShowTransactionModal(true);
  }

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: Account) => {
        return record.user.name;
      }
    },
    {
      title: 'Código conta',
      dataIndex: 'code',
      key: 'code'
    },
    {
      title: 'Saldo',
      dataIndex: 'balance',
      key: 'balance'
    },
    {
      title: '',
      dataIndex: 'actions',
      key: 'actions',
      // eslint-disable-next-line react/display-name
      render: (_text: string, record: Account) => {
        return (
          <s.DepositButton onClick={() => handleDepositAccount(record)}>
            Depositar
          </s.DepositButton>
        );
      }
    }
  ];

  async function getAllAccounts() {
    try {
      setFetching(true);
      const accounts = await APIService.getAllAccounts();
      setAccounts(accounts);
    } catch (err) {
      console.error(err);
      message.error('Não foi possível obter os dados');
    } finally {
      setFetching(false);
    }
  }

  useEffect(() => {
    getAllAccounts();
  }, []);

  async function confirmDeposit(accountCode: string, value: string) {
    try {
      setFetchingDeposit(true);
      await APIService.depositBalance(accountCode, value);
      setShowTransactionModal(false);

      getAllAccounts();

      return Promise.resolve();
    } catch (err) {
      message.error('Não foi possível realizar o depósito');
      return Promise.reject();
    } finally {
      setFetchingDeposit(false);
    }
  }

  function cancelDeposit() {
    setShowTransactionModal(false);
  }

  return (
    <Layout>
      <s.AdminContainer>
        <s.Table
          pagination={false}
          loading={isFetching}
          rowKey="id"
          dataSource={allAccounts}
          columns={columns}
        />
        <TransactionModal
          title="Depósito"
          visible={showTransactionModal}
          onConfirm={confirmDeposit}
          onCancel={cancelDeposit}
          account={accountSelected}
          loading={isFetchingDeposit}
        />
      </s.AdminContainer>
    </Layout>
  );
};

export default Admin;
