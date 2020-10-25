import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback
} from 'react';
import APIService from '../services/api';
import Account from 'repository/Account';

import { useAuth } from 'hooks/auth';

type AccountContextData = {
  userAccountData: Account;
  refreshAccount(): void;
  getAllAccounts(): Promise<Account[]>;
};

const AccountContext = createContext<AccountContextData>(
  {} as AccountContextData
);

export const AccountProvider: React.FC = ({ children }) => {
  const [userAccountData, setUserAccount] = useState<Account>({} as Account);

  const { getSession } = useAuth();
  const user = getSession();

  const getAccountByUser = useCallback(async () => {
    if (!user) {
      return;
    }
    const [account] = await APIService.getAccountByUser(user.id);
    setUserAccount(account);
  }, [user]);

  const getAllAccounts = useCallback(async (): Promise<Account[]> => {
    const accounts = await APIService.getAllAccounts();
    return accounts;
  }, []);

  useEffect(() => {
    getAccountByUser();
  }, [getAccountByUser]);

  const refreshAccount = () => {
    getAccountByUser();
  };

  return (
    <AccountContext.Provider value={{ userAccountData, refreshAccount, getAllAccounts }}>
      {children}
    </AccountContext.Provider>
  );
};

export function useAccount(): AccountContextData {
  const context = useContext(AccountContext);

  if (!context) {
    throw new Error('useAccount must be used within an AccountProvider');
  }

  return context;
}
