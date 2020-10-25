import React, { useState } from 'react';

import Account from 'repository/Account';
import Button from 'components/Button';

import * as Font from 'components/Fonts';
import * as s from './styles';
import InputCurrency from 'components/InputCurrency';

type TransactionModalProps = {
  onCancel(): void;
  onConfirm: (accountCode: string, value: string) => Promise<void>;
  visible: boolean;
  account: Account;
  loading: boolean;
  title: string;
};

const TransactionModal: React.FC<TransactionModalProps> = ({
  onCancel,
  onConfirm,
  visible,
  account,
  title
}) => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const userName = account?.user ? account.user.name : '';

  async function deposit() {
    setLoading(true);
    onConfirm(account.code, value)
      .then(() => {
        setValue('');
      })
      .finally(() => setLoading(false));
  }

  function handleChangeValue(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <s.Modal footer={null} visible={visible} onCancel={onCancel}>
      <Font.Description>{title} tetet</Font.Description>
      <s.Content>
        <s.Title>{userName}</s.Title>
        <s.InputValue
          value={value}
          onChange={handleChangeValue}
          placeholder="Digite o valor"
        />
        <InputCurrency />
        <s.ButtonGroup>
          <s.ButtonWrapper>
            <Button loading={loading} onClick={deposit}>
              CONFIRMAR
            </Button>
          </s.ButtonWrapper>
          <s.ButtonWrapper>
            <Button outlined onClick={onCancel}>
              CANCELAR
            </Button>
          </s.ButtonWrapper>
        </s.ButtonGroup>
      </s.Content>
    </s.Modal>
  );
};

export default TransactionModal;
