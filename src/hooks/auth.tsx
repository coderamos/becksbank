import React, { createContext, useCallback, useContext, useState } from 'react';

import APIService from '../services/api';
import { login, decodeToken, logout } from '../services/auth';

type DecodeUser = {
  sub: string;
  auth: string;
  name: string;
}

type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  userData: DecodeUser;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<DecodeUser>({} as DecodeUser);

  const signIn = useCallback(async ({email, password}) => {
    const token = await APIService.login( email, password );
    login(token);
    console.log('Response', token)

    const decodedUser = decodeToken(token);

    setData(decodedUser);

  }, []);

  const signOut = useCallback(() => {
    logout();

    setData({} as DecodeUser);
  }, []);

  return (
    <AuthContext.Provider value={{ userData: data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
