import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import IAPIHandler from 'interfaces/IAPIHandler';
import { getToken } from 'services/auth';

import Account from 'repository/Account';
import User from 'repository/User';
import Statement from 'repository/Statement';

// import IUsers from '../Interfaces/IUsers';

const BASE_URL = 'https://beertech-bank.herokuapp.com';

export default class AxiosAdapter implements IAPIHandler {
  private api: AxiosInstance;

  private setInterceptor(): void {
    this.api.interceptors.request.use((config: AxiosRequestConfig) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL
    });

    this.setInterceptor();
  }

  login(email: string, password: string): Promise<string> {
    return this.api
      .post<null, { token: string }>('/login/authentication', {
        email,
        password
      })
      .then(res => res.token);
  }

  getAllAccounts(): Promise<Account[]> {
    return this.api.get('/accounts').then(res => res.data);
  }

  createUser(user: User) {
    return this.api.post<null, string>('/users', user);
  }

  createAccount(account: Account) {
    return this.api.post<null, string>('/accounts', account);
  }

  getStatements(accountCode: string): Promise<Statement> {
    return this.api.get(`/transactions/${accountCode}/statements`);
  }

  getAccountBalance(accountCode: string): Promise<number> {
    return this.api.get(`/accounts/${accountCode}/balance`);
  }

  transferBalance(
    accountCode: string,
    destinationAccountCode: string,
    value: number
  ): Promise<Account> {
    return this.api.post<null, Account>(
      `/transactions/${accountCode}/transfer`,
      {
        destinationAccountCode,
        value
      }
    );
  }

  depositBalance(accountCode: string, value: number): Promise<Account> {
    return this.api.post(`/transactions/${accountCode}/deposit`, { value });
  }
}
