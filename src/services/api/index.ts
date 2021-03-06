import IAPIHandler from 'interfaces/IAPIHandler';
import Account from 'repository/Account';
import User from 'repository/User';
import Statement from 'repository/Statement';
import PaymentSlip from 'repository/PaymentSlip';

import AxiosAdapter from './adapters/axios';

class APIService implements IAPIHandler {
  constructor(private apiAdapter: IAPIHandler) {}

  login(email: string, password: string): Promise<string> {
    return this.apiAdapter.login(email, password);
  }

  getAllAccounts(): Promise<Account[]> {
    return this.apiAdapter.getAllAccounts();
  }

  createUser(user: User): Promise<User> {
    return this.apiAdapter.createUser(user);
  }

  createAccount(account: Account): Promise<string> {
    return this.apiAdapter.createAccount(account);
  }

  getStatements(accountCode: string): Promise<Statement> {
    return this.apiAdapter.getStatements(accountCode);
  }

  getAccountBalance(accountCode: string): Promise<number> {
    return this.apiAdapter.getAccountBalance(accountCode);
  }

  getAccountByUser(userId: number): Promise<Account[]> {
    return this.apiAdapter.getAccountByUser(userId);
  }

  transferBalance(
    accountCode: string,
    destinationAccountCode: string,
    value: string
  ): Promise<Account> {
    return this.apiAdapter.transferBalance(
      accountCode,
      destinationAccountCode,
      value
    );
  }

  depositBalance(accountCode: string, value: string): Promise<Account> {
    return this.apiAdapter.depositBalance(accountCode, value);
  }

  makePayment(paymentSlipCode: string): Promise<any> {
    return this.apiAdapter.makePayment(paymentSlipCode);
  }

  getPaymentsByUser(userId: number): Promise<PaymentSlip[]> {
    return this.apiAdapter.getPaymentsByUser(userId);
  }
}

export default new APIService(new AxiosAdapter());
