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
};

const AccountContext = createContext<AccountContextData>(
  {} as AccountContextData
);

export const AccountProvider: React.FC = ({ children }) => {
  const [userAccountData, setUserAccount] = useState<Account>({} as Account);

  const { getSession } = useAuth();

  useEffect(() => {
    const user = getSession();
    const getAccountByUser = async () => {
      if (!user) {
        return;
      }

      const [account] = await APIService.getAccountByUser(user.id);
      setUserAccount(account);
    };

    getAccountByUser();
  }, [getSession]);

  const refreshAccount = async () => {
    const user = getSession();
    if (!user) {
      return;
    }

    const [account] = await APIService.getAccountByUser(user.id);
    setUserAccount(account);
  };

  return (
    <AccountContext.Provider value={{ userAccountData, refreshAccount }}>
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
