import React, { useState } from 'react';

import * as s from './styles';
import * as Font from 'components/Fonts';
import Button from 'components/Button';

import Account from 'repository/Account';

type DepositModalProps = {
  onCancel(): void;
  onConfirm: (accountCode: string, value: string) => Promise<void>;
  visible: boolean;
  account: Account;
  loading: boolean;
  title: string;
};

const DepositModal: React.FC<DepositModalProps> = ({
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
      <Font.Description>{title}</Font.Description>
      <s.Content>
        <s.Title>{userName}</s.Title>
        <s.InputValue
          value={value}
          onChange={handleChangeValue}
          placeholder="Digite o valor"
        />
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

export default DepositModal;
