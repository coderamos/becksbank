import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount, ReactWrapper } from 'enzyme';

import theme from '../../styles/theme';

export const renderWithTheme = (children: React.ReactNode): ReactWrapper =>
  mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
