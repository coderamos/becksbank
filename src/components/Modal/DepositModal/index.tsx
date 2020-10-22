import React from 'react';

import * as s from './styles';

import { InputText } from 'components/Input';
import { Form, FormItem } from 'components/Form';

type DepositModalProps = {
  onCancel(): void;
  onConfirm(): void;
  visible: boolean;
};

const DepositModal: React.FC<DepositModalProps> = ({
  onCancel,
  onConfirm,
  visible
}) => {
  return (
    <s.Modal footer={null} visible={visible}>
      <span>Depositar para: </span>
      <s.UserContent>
        <s.UserIcon />
        Josimar Gomes
      </s.UserContent>
      <s.SectionForm>
        <Form>
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
        </Form>
        <s.ButtonGroup>
          <s.CancelButton onClick={onCancel}>Cancelar</s.CancelButton>
          <s.ConfirmButton onClick={onConfirm}>Confirmar</s.ConfirmButton>
        </s.ButtonGroup>
      </s.SectionForm>
    </s.Modal>
  );
};

export default DepositModal;
