import React, { useEffect, useState } from 'react';

import Layout from 'components/Layout';

import APIService from 'services/api';

import * as s from './styles';

type FeatureTypes = 'transfer' | 'extract';

export default function Dashboard() {
  useEffect(() => {
    APIService.getAllAccounts().then(res => console.log('respondeu', res));
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
              <strong>EXTRACT</strong> Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Mollitia, eius.
            </s.ExtractContentWrapper>
          )}
        </s.DynamicContentWrapper>
      </Layout>
    </s.DashboardContainer>
  );
}
