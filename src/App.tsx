import React from 'react';

import { ThemeProvider } from 'styled-components';
import AppProvider from './hooks';

import AppRoutes from './routes';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
