import React from 'react';

import { AuthProvider } from './auth';
import { AccountProvider } from './account';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <AccountProvider>{children}</AccountProvider>
  </AuthProvider>
);

export default AppProvider;
