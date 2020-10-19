import IAPIHandler from 'interfaces/IAPIHandler';
// import IUsers from "../Interfaces/IUsers";

export default class APIService implements IAPIHandler {
  constructor(private apiAdapter: IAPIHandler) {}

  login(name: string, password: string): Promise<string> {
    return this.apiAdapter.login(name, password);
  }

  // getUsers(): Promise<any> {
  // return this.apiAccess.getUsers();
  // }
}
