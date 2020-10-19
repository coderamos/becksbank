import React from 'react';
import { Button } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('Button Component Tests', () => {
  test('renders the component', () => {
    const component = renderWithTheme(<Button>Login</Button>);
    expect(component).toMatchSnapshot();
  });

  test('button clicks', () => {
    const fakeFunction = jest.fn();
    const component = renderWithTheme(
      <Button onClick={fakeFunction}>Login</Button>
    );
    component.find('button').simulate('click');
    expect(fakeFunction).toHaveBeenCalled();
  });
});
