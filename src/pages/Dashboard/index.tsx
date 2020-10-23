import React, { useEffect, useState } from 'react';

import Layout from 'components/Layout';
import Transfer from 'components/Transfer';

import APIService from 'services/api';
import { useAuth } from 'hooks/auth';

import * as s from './styles';
import { Table } from 'antd';

type FeatureTypes = 'transfer' | 'extract';

const Dashboard: React.FC = () => {
  const [statements, setStatements] = useState([]);
  const [isLoadingStatements, setIsLoadingStatements] = useState(false);

  const { getSession } = useAuth();

  useEffect(() => {
    setIsLoadingStatements(true);

    const user = getSession();

    const getUserStatements = async () => {
      try {
        const account = await APIService.getAccountByUser(user.id);
        if (!account.length) {
          throw Error('Usuário ainda não possui conta.');
        }
        const { accountStatements } = await APIService.getStatements(
          account[0].code
        );
        setStatements(accountStatements);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoadingStatements(false);
      }
    };

    getUserStatements();
  }, [getSession]);

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
              <Transfer />
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
