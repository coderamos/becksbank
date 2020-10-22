import React, { useEffect, useState } from 'react';

import Layout from 'components/Layout';
import Transfer from 'components/Transfer';

import APIService from 'services/api';

import * as s from './styles';

type FeatureTypes = 'transfer' | 'extract';

export default function Dashboard() {
  useEffect(() => {
    APIService.getAllAccounts().then(allAccounts =>
      console.log('get accounts', allAccounts)
    );

    APIService.getStatements('conta2').then(statements =>
      console.log('account statements', statements)
    );

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
              <Transfer />
            </s.TransferContentWrapper>
          )}
          {activeFeature === 'extract' && (
            <s.ExtractContentWrapper>
              <strong>EXTRACT</strong>
            </s.ExtractContentWrapper>
          )}
        </s.DynamicContentWrapper>
      </Layout>
    </s.DashboardContainer>
  );
}
