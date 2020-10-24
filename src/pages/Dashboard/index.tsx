import React, { useEffect, useState } from 'react';

import Layout from 'components/Layout';
import Transfer from 'components/Transfer';

import APIService from 'services/api';
import { useAuth } from 'hooks/auth';
import TransferDTO from 'repository/Tranfer';
import Account from 'repository/Account';

import * as s from './styles';
import { Table, message } from 'antd';

type FeatureTypes = 'transfer' | 'extract';

const Dashboard: React.FC = () => {
  const [statements, setStatements] = useState([]);
  const [isLoadingStatements, setIsLoadingStatements] = useState(false);
  const [userAccount, setUserAccount] = useState<Account>(null);

  const { getSession } = useAuth();

  async function confirmTransfer(values: TransferDTO) {
    console.log('values', values);
    try {
      const { accountCode, value } = values;
      await APIService.transferBalance(userAccount.code, accountCode, value);
      return Promise.resolve('ok');
    } catch (err) {
      message.error('Não foi possível fazer a transferência');
      return Promise.reject('error');
    }
  }

  useEffect(() => {
    const user = getSession();
    const getUserAccount = async () => {
      const account = await APIService.getAccountByUser(user.id);
      if (!account.length) {
        throw Error('Usuário ainda não possui conta.');
      }

      setUserAccount(account[0]);
    };

    getUserAccount();
  }, [getSession]);

  useEffect(() => {
    setIsLoadingStatements(true);
    const getUserStatements = async () => {
      try {
        const { accountStatements } = await APIService.getStatements(
          userAccount.code
        );

        setStatements(accountStatements);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoadingStatements(false);
      }
    };

    getUserStatements();
  }, [getSession, userAccount]);

  const [activeFeature, setActiveFeature] = useState<FeatureTypes>('transfer');
  const handleActiveFeature = feature => setActiveFeature(feature);
  return (
    <s.DashboardContainer>
      <Layout>
        <s.CardsWrapper>
          <s.FeatureCardWrapper onClick={() => handleActiveFeature('transfer')}>
            <s.FeatureCard>TRANSFERIR</s.FeatureCard>
          </s.FeatureCardWrapper>
          <s.FeatureCardWrapper onClick={() => handleActiveFeature('extract')}>
            <s.FeatureCard>EXTRATO</s.FeatureCard>
          </s.FeatureCardWrapper>
        </s.CardsWrapper>
        <s.DynamicContentWrapper>
          {activeFeature === 'transfer' && (
            <s.TransferContentWrapper>
              <Transfer onConfirm={confirmTransfer} />
            </s.TransferContentWrapper>
          )}
          {activeFeature === 'extract' && (
            <s.ExtractContentWrapper>
              <Table
                rowKey="id"
                loading={isLoadingStatements}
                columns={[
                  {
                    title: 'Tipo de operação',
                    dataIndex: 'typeOperation'
                  },
                  {
                    title: 'Valor',
                    dataIndex: 'valueTransaction'
                  },
                  {
                    title: 'Data de movimentação',
                    dataIndex: 'dateTime'
                  }
                ]}
                dataSource={statements}
              />
            </s.ExtractContentWrapper>
          )}
        </s.DynamicContentWrapper>
      </Layout>
    </s.DashboardContainer>
  );
};

export default Dashboard;
