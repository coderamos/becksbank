import React, { useEffect, useState } from 'react';

import Layout from 'components/Layout';
import PublicityCard from 'components/PublicityCard';
import ExtractList from 'components/ExtractList';
import { CardWrapperColumn, CardWrapperRow } from 'components/CardWrapper';

import { Transaction } from 'repository/Statement';
import { useAccount } from 'hooks/account';
import APIService from 'services/api';

const Extract: React.FC = () => {
  const [statement, setAccountStatements] = useState<Transaction[]>([]);

  const { userAccountData } = useAccount();

  useEffect(() => {
    const getExtracts = async () => {
      const allExtracts = await APIService.getStatements(userAccountData.code);
      setAccountStatements(allExtracts.accountStatements);
    };

    getExtracts();
  }, [userAccountData.code]);

  return (
    <Layout>
      <CardWrapperRow>
        <CardWrapperColumn>
          <ExtractList extracts={statement} />
        </CardWrapperColumn>
        <CardWrapperColumn>
          <PublicityCard />
        </CardWrapperColumn>
      </CardWrapperRow>
    </Layout>
  );
};

export default Extract;
