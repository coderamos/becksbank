import React, { useEffect, useState } from 'react';

import Layout from 'components/Layout';
import ExtractList from 'components/ExtractList';
import { CardWrapperRow } from 'components/CardWrapper';

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
      <ExtractList loading={loading} extracts={statement} />
    </Layout>
  );
};

export default Extract;
