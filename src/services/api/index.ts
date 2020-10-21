import IAPIHandler from 'interfaces/IAPIHandler';
import Account from 'repository/Account';
import User from 'repository/User';
import Statement from 'repository/Statement';
// import IUsers from "../Interfaces/IUsers";

export default class APIService implements IAPIHandler {
  constructor(private apiAdapter: IAPIHandler) {}

  login(email: string, password: string): Promise<string> {
    return this.apiAdapter.login(email, password);
  }

  getAllAccounts(): Promise<Account[]> {
    return this.apiAdapter.getAllAccounts();
  }

  createUser(user: User): Promise<string> {
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

  transferBalance(
    accountCode: string,
    destinationAccountCode: string,
    value: number
  ): Promise<Account> {
    return this.apiAdapter.transferBalance(
      accountCode,
      destinationAccountCode,
      value
    );
  }

  depositBalance(accountCode: string, value: number): Promise<Account> {
    return this.apiAdapter.depositBalance(accountCode, value);
  }
}
