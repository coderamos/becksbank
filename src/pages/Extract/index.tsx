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
  const [loading, setLoading] = useState(false);

  const { userAccountData } = useAccount();

  useEffect(() => {
    const getExtracts = async () => {
      setLoading(true);
      const allExtracts = await APIService.getStatements(userAccountData.code);
      allExtracts.accountStatements.reverse();
      setAccountStatements(allExtracts.accountStatements);
      setLoading(false);
    };

    getExtracts();
  }, [userAccountData.code]);

  return (
    <Layout>
      <CardWrapperRow>
        <CardWrapperColumn>
          <ExtractList loading={loading} extracts={statement} />
        </CardWrapperColumn>
        <CardWrapperColumn>
          <PublicityCard />
        </CardWrapperColumn>
      </CardWrapperRow>
    </Layout>
  );
};

export default Extract;
