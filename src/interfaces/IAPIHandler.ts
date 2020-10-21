// import IUsers from './IUsers';
import User from 'repository/User';
import Account from 'repository/Account';
import Statement from 'repository/Statement';

export default interface IAPIHandler {
  //   getUsers(): Promise<IUsers>;
  login(email: string, password: string): Promise<string>;

  createUser(user: User): Promise<User>;

  getAllAccounts(): Promise<Account[]>;

  createAccount(account: Account): Promise<string>;

  getStatements(accountCode: string): Promise<Statement>;

  getAccountBalance(accountCode: string): Promise<number>;

  getAccountByUser(userId: number): Promise<Account[]>;

  transferBalance(
    accountCode: string,
    destinationAccountCode: string,
    value: number
  ): Promise<Account>;

  depositBalance(accountCode: string, value: number): Promise<Account>;
}
