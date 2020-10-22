import React from 'react';

import * as s from './styles';

const Select: React.FC = () => {
  function onChange(value) {
    console.log(`selected ${value}`);
  }

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
      <s.Option value="diego">Diego</s.Option>
      <s.Option value="josimar">Josimar</s.Option>
      <s.Option value="guilherme">Guilherme</s.Option>
      <s.Option value="alyne">Alyne</s.Option>
    </s.SelectContainer>
  );
};

export default Select;
