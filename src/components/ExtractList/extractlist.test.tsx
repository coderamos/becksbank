import React from 'react';
import 'jest-styled-components';
import ExtractList from '.';
import { renderWithTheme } from '../../utils/tests/helpers';
import extracts from '../../../__mocks__/extracts';
import { Transaction } from '../../repository/Statement';

describe('BalancedCard Component Tests', () => {
  test('renders the component', () => {
    const transactions = (extracts as unknown) as Transaction[];
    const component = renderWithTheme(<ExtractList extracts={transactions} />);

    expect(component.mount()).toMatchSnapshot();
  });

  test('renders the component with loading', () => {
    const component = renderWithTheme(
      <ExtractList extracts={[]} loading={true} />
    );

    expect(component).toMatchSnapshot();
  });
});
