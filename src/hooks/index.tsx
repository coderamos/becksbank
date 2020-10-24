import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import { AuthProvider } from './auth';
import { AccountProvider } from './account';

const AppProvider: React.FC = ({ children }) => (
  <BrowserRouter>
    <AuthProvider>
      <AccountProvider>{children}</AccountProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default AppProvider;
