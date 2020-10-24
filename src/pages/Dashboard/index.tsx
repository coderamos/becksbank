import React, { useEffect, useState } from 'react';

import Layout from 'components/Layout';
import Transfer from 'components/Transfer';

import APIService from 'services/api';
import { useAuth } from 'hooks/auth';
import { useAccount } from 'hooks/account';
import TransferDTO from 'repository/Tranfer';
import Account from 'repository/Account';

import * as s from './styles';
import { Table, message } from 'antd';

type FeatureTypes = 'transfer' | 'extract';

const Dashboard: React.FC = () => {
  const [statements, setStatements] = useState([]);
  const [isLoadingStatements, setIsLoadingStatements] = useState(false);

  const { userAccountData, refreshAccount } = useAccount();

  const { getSession } = useAuth();

  async function confirmTransfer(values: TransferDTO) {
    try {
      const { accountCode, value } = values;
      await APIService.transferBalance(
        userAccountData.code,
        accountCode,
        value
      );
      message.success('Transferência realizada com sucesso');
      refreshAccount();
      return Promise.resolve('ok');
    } catch (err) {
      message.error('Não foi possível fazer a transferência');
      return Promise.reject('error');
    }
  }

  useEffect(() => {
    if (!userAccountData.code) {
      return;
    }

    setIsLoadingStatements(true);
    const getUserStatements = async () => {
      try {
        const { accountStatements } = await APIService.getStatements(
          userAccountData.code
        );

        setStatements(accountStatements);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoadingStatements(false);
      }
    };

    getUserStatements();
  }, [getSession, userAccountData.code]);

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
