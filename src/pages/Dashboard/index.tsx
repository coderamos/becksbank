import React, { useEffect, useState } from 'react';

import Layout from 'components/Layout';
import PaymentCard from 'components/PaymentCard';
import BalanceCard from 'components/BalanceCard';
import PaymentModal from 'components/Modal/PaymentModal';
import DepositModal from 'components/Modal/DepositModal';

import APIService from 'services/api';
import { useAuth } from 'hooks/auth';
import { useAccount } from 'hooks/account';
import TransferDTO from 'repository/Tranfer';

import * as s from './styles';
import { Table, message } from 'antd';

const mockPayment = {
  id: 89,
  code:
    '32303230313032342D3030323530302D4F542D3030312F31313131312D3030322F3030383434',
  dueDate: '2020-10-24',
  value: 1254.89,
  category: 'Alimentação',
  originUser: {
    userName: '3',
    bankName: 'Becks',
    accountCode: '11111'
  },
  destinationUser: {
    userName: null,
    bankName: 'External',
    accountCode: '11111'
  }
};

type FeatureTypes = 'transfer' | 'extract';

const Dashboard: React.FC = () => {
  const [statements, setStatements] = useState([]);
  const [isLoadingStatements, setIsLoadingStatements] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

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

  function confirmPayment(code: string) {
    console.log('confomre', code);
    setShowPaymentModal(false);
    return Promise.resolve();
  }

  function hidePaymentModal() {
    setShowPaymentModal(false);
  }

  return (
    <Layout>
      <div style={{ width: '50%' }}>
        <BalanceCard value="23.456,99" />
      </div>
      <div style={{ width: '50%' }}>
        <PaymentCard
          title="Boleto Banco do Brasil"
          code="3743453745687618381231872y178y1w1278178182"
          value="R$ 1.678,90"
          onClickPay={code => setShowPaymentModal(true)}
        />
      </div>
      <DepositModal
        title="Transferência"
        account={{
          code: 'etyre',
          userId: 1,
          user: {
            name: 'Josimar Gomes',
            email: 'josimargomesdev@gmail.com',
            document: '112312323',
            role: 'USER'
          },
          balance: 39
        }}
        loading={false}
        visible={showPaymentModal}
        onCancel={hidePaymentModal}
        onConfirm={confirmPayment}
      />
      {/* <PaymentModal
        visible={showPaymentModal}
        paymentSlip={mockPayment}
        onConfirm={confirmPayment}
        onCancel={hidePaymentModal}
      /> */}
    </Layout>

    // <s.DashboardContainer>
    //   <Layout>
    //     <s.CardsWrapper>
    //       <s.FeatureCardWrapper onClick={() => handleActiveFeature('transfer')}>
    //         <s.FeatureCard>TRANSFERIR</s.FeatureCard>
    //       </s.FeatureCardWrapper>
    //       <s.FeatureCardWrapper onClick={() => handleActiveFeature('extract')}>
    //         <s.FeatureCard>EXTRATO</s.FeatureCard>
    //       </s.FeatureCardWrapper>
    //     </s.CardsWrapper>
    //     <s.DynamicContentWrapper>
    //       {activeFeature === 'transfer' && (
    //         <s.TransferContentWrapper>
    //           <Transfer onConfirm={confirmTransfer} />
    //         </s.TransferContentWrapper>
    //       )}
    //       {activeFeature === 'extract' && (
    //         <s.ExtractContentWrapper>
    //           <Table
    //             rowKey="id"
    //             loading={isLoadingStatements}
    //             columns={[
    //               {
    //                 title: 'Tipo de operação',
    //                 dataIndex: 'typeOperation'
    //               },
    //               {
    //                 title: 'Valor',
    //                 dataIndex: 'valueTransaction'
    //               },
    //               {
    //                 title: 'Data de movimentação',
    //                 dataIndex: 'dateTime'
    //               }
    //             ]}
    //             dataSource={statements}
    //           />
    //         </s.ExtractContentWrapper>
    //       )}
    //     </s.DynamicContentWrapper>
    //   </Layout>
    // </s.DashboardContainer>
  );
};

export default Dashboard;
