import React from 'react';

import * as s from './styles';

type SelectProps = {
  onChange(value: string): void;
};

const Select: React.FC<SelectProps> = ({ onChange }) => {
  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }
  return (
    <s.SelectContainer
      showSearch
      placeholder="Select a contact"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <s.Option value="conta2">Marcilio</s.Option>
      <s.Option value="minhacontinha">Josimar</s.Option>
      <s.Option value="diegaofera">Diego Ramos</s.Option>
      <s.Option value="testecontinha">Alyne</s.Option>
    </s.SelectContainer>
  );
};

export default Select;
