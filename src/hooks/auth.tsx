import React, { createContext, useCallback, useContext, useState } from 'react';
import jwt from 'jsonwebtoken';

import APIService from '../services/api';

export type DecodeUser = {
  id: number;
  sub: string;
  auth: string;
  name: string;
}

type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  getSession(): DecodeUser;
  getToken(): string;
}

const TOKEN_KEY = '@yTjy57Lj8E/UC9vpLBIv5cMXxWY1xj27ub/D6GavBOw=';

export const getToken = (): string => localStorage.getItem(TOKEN_KEY);

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [userToken, setUserToken] = useState<string>(() => {
    const storageToken = localStorage.getItem(TOKEN_KEY);
    if(storageToken) {
      return storageToken;
    }
    return '';
  });

  const getSession = useCallback(() => {
    const userDecoded = JSON.stringify(jwt.decode(userToken));
    return JSON.parse(userDecoded) || {}
  },[userToken])

  const signIn = useCallback(async ({email, password}) => {
    const token = await APIService.login( email, password );
    localStorage.setItem(TOKEN_KEY, token);
    setUserToken(token);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setUserToken('');
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, getSession, getToken }}>
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
