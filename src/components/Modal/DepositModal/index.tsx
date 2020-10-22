import React from 'react';

import * as s from './styles';

import { InputText } from 'components/Input';
import { Form, FormItem } from 'components/Form';
import Account from 'repository/Account';

type DepositModalProps = {
  onCancel(): void;
  onConfirm: (accountCode: string, value: number) => void;
  visible: boolean;
  account: Account;
  loading: boolean;
};

const DepositModal: React.FC<DepositModalProps> = ({
  onCancel,
  onConfirm,
  visible,
  account,
  loading
}) => {
  async function deposit({ value }) {
    onConfirm(account.code, value);
  }

  return (
    <s.Modal footer={null} visible={visible} onCancel={onCancel}>
      <span>Depositar para: </span>
      <s.UserContent>
        <s.UserIcon />
        {account ? account.user.name : ''}
      </s.UserContent>
      <s.SectionForm>
        <Form onFinish={deposit}>
          <FormItem
            label="Digite o valor"
            name="value"
            validateTrigger="onBlur"
            rules={[
              { required: true, message: 'input value cannot be empty!' }
            ]}
          >
            <InputText />
          </FormItem>
          <s.ButtonGroup>
            <s.CancelButton onClick={onCancel}>Cancelar</s.CancelButton>
            <s.ConfirmButton loading={loading} htmlType="submit">
              Confirmar
            </s.ConfirmButton>
          </s.ButtonGroup>
        </Form>
      </s.SectionForm>
    </s.Modal>
  );
};

export default DepositModal;
