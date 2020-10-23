import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import IAPIHandler from 'interfaces/IAPIHandler';
import {getToken } from 'hooks/auth';

import Account from 'repository/Account';
import User from 'repository/User';
import Statement, { Transaction } from 'repository/Statement';

const BASE_URL = 'https://beertech-bank.herokuapp.com';

type loginResponse = { data: { token: string } };
type balanceResponse = { data: { balance: number } };
type statementsResponse = {
  data: { accountStatements: Transaction[]; balance: number };
};
export type accountsResponse = {
  data: Account[];
};
type createUserResponse = {
  data: User;
};

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
      .post<null, loginResponse>('/login/authentication', {
        email,
        password
      })
      .then(res => res.data.token);
  }

  getAllAccounts(): Promise<Account[]> {
    return this.api
      .get<null, accountsResponse>('/accounts')
      .then(res => res.data);
  }

  createUser(user: User): Promise<User> {
    return this.api
      .post<null, createUserResponse>('/users', user)
      .then(res => res.data);
  }

  createAccount(account: Account) {
    return this.api.post<null, string>('/accounts', account);
  }

  getStatements(accountCode: string): Promise<Statement> {
    return this.api
      .get<null, statementsResponse>(`/transactions/${accountCode}/statements`)
      .then(res => res.data);
  }

  getAccountBalance(accountCode: string): Promise<number> {
    return this.api
      .get<null, balanceResponse>(`/accounts/${accountCode}/balance`)
      .then(res => res.data.balance);
  }

  getAccountByUser(userId: number): Promise<Account[]> {
    return this.api
      .get<null, accountsResponse>(`/accounts/user/${userId}`)
      .then(res => res.data);
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
