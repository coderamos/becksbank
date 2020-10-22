import React, { createContext, useCallback, useContext } from 'react';
import APIService from '../services/api';

type AccountContextData = {
  // accountData: AccountData[];
  getAccountByUser: (userId: number) => void;
}

const AccountContext = createContext<AccountContextData>({} as AccountContextData);

export const AccountProvider: React.FC = ({children}) => {

  // const [userAccount, setUserAccount] = useState<AccountContextData[]>([]);

const getAccountByUser = useCallback(async(userId: number) => {
  const response = await APIService.getAccountByUser(userId);
  // setUserAccount(response);
  console.log('Account', response);
  return response || 0;

},[]);

  return (
    <AccountContext.Provider value={{getAccountByUser}}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount(): AccountContextData {
  const context = useContext(AccountContext);

  if (!context) {
    throw new Error('useAccount must be used within an AccountProvider');
  }

  return context;
}
