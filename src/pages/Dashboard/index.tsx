import React, { useEffect, useState } from 'react';

import Layout from 'components/Layout';

import APIService from 'services/api';

import * as s from './styles';
import { Table } from 'antd';

type FeatureTypes = 'transfer' | 'extract';

export default function Dashboard() {
  const [statements, setStatements] = useState([]);
  const [isLoadingStatements, setIsLoadingStatements] = useState(false);
  useEffect(() => {
    setIsLoadingStatements(true);
    APIService.getAllAccounts().then(allAccounts =>
      console.log('get accounts', allAccounts)
    );

    APIService.getStatements('conta2')
      .then(response => {
        console.log('account statements', response);
        setStatements(response.accountStatements);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => setIsLoadingStatements(false));

    APIService.getAccountByUser(1).then(accounts =>
      console.log('get accounts by user', accounts)
    );
  }, []);

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
              <strong>TRANSFER</strong> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolores, natus.
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
}
