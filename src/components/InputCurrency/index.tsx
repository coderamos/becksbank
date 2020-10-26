import React from 'react';

import * as s from './styles';

const locale = 'en-us';

const currencyFormatter = () => value => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

const currencyParser = val => {
  try {
    // for when the input gets clears
    if (typeof val === 'string' && !val.length) {
      val = '0.0';
    }

    // detecting and parsing between comma and dot
    const group = new Intl.NumberFormat(locale).format(1111).replace(/1/g, '');
    const decimal = new Intl.NumberFormat(locale).format(1.1).replace(/1/g, '');
    let reversedVal = val.replace(new RegExp('\\' + group, 'g'), '');
    reversedVal = reversedVal.replace(new RegExp('\\' + decimal, 'g'), '.');
    //  => 1232.21 €

    // removing everything except the digits and dot
    reversedVal = reversedVal.replace(/[^0-9.]/g, '');
    //  => 1232.21

    // appending digits properly
    const digitsAfterDecimalCount = (reversedVal.split('.')[1] || []).length;
    const needsDigitsAppended = digitsAfterDecimalCount > 2;

    if (needsDigitsAppended) {
      reversedVal = reversedVal * Math.pow(10, digitsAfterDecimalCount - 2);
    }

    return Number.isNaN(reversedVal) ? 0 : reversedVal;
  } catch (error) {
    console.error(error);
  }
};

const InputCurrency = () => {
  return (
    <s.InputCurrency
      defaultValue={0}
      style={{
        width: 400,
        marginRight: '1rem'
      }}
      formatter={currencyFormatter()}
      parser={currencyParser}
    />
  );
};

export default InputCurrency;
