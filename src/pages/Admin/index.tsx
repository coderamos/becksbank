import React, { useEffect, useState } from 'react';
import { message } from 'antd';

import * as s from './style';

import APIService from 'services/api';
import Account from 'repository/Account';

import DepositModal from 'components/Modal/DepositModal';
import Layout from 'components/Layout';

const Admin: React.FC = () => {
  const [allAccounts, setAccounts] = useState<Account[]>([]);
  const [isFetching, setFetching] = useState(false);
  const [isFetchingDeposit, setFetchingDeposit] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [accountSelected, setAccountSelected] = useState<Account>(null);

  function handleDepositAccount(account: Account) {
    setAccountSelected(account);
    setShowDepositModal(true);
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: Account) => {
        return record.user.name;
      }
    },
    {
      title: 'Account Code',
      dataIndex: 'code',
      key: 'code'
    },
    {
      title: 'Balance',
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
            Deposit
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

  async function confirmDeposit(accountCode: string, value: number) {
    try {
      setFetchingDeposit(true);
      await APIService.depositBalance(accountCode, value);
      setShowDepositModal(false);
      // Não precisa fazer outra request, o ideal seria alterar apenas com a resposta de sucesso
      getAllAccounts();
    } catch (err) {
      message.error('Não foi possível realizar o depósito');
    } finally {
      setFetchingDeposit(false);
    }
  }

  function cancelDeposit() {
    setShowDepositModal(false);
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
        <DepositModal
          visible={showDepositModal}
          onConfirm={confirmDeposit}
          onCancel={cancelDeposit}
          account={accountSelected}
          loading={isFetchingDeposit}
        />
      </s.AdminContainer>
    </Layout>
  );
}

export default Admin;
