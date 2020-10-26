import React from 'react';
import 'jest-styled-components';
import PaymentList from '.';
import { renderWithTheme } from '../../utils/tests/helpers';
import PaymentSlip from '../../repository/PaymentSlip';
import allPayments from '../../../__mocks__/payments';

jest.mock('assets/images/barbecue.svg', () => 'barbecue.svg');

describe('PaymentCard Component Tests', () => {
  const payments = (allPayments as unknown) as PaymentSlip[];

  test('renders the component', () => {
    const component = renderWithTheme(
      <PaymentList payments={payments} onClick={jest.fn} />
    );

    expect(component.mount()).toMatchSnapshot();
  });

  test('test if button click was called', () => {
    const mockClickPayFn = jest.fn();

    const component = renderWithTheme(
      <PaymentList payments={payments} onClick={mockClickPayFn} />
    );

    component.find('button').map(button => button.simulate('click'));

    expect(mockClickPayFn).toHaveBeenCalledTimes(2);
  });
});
