// import IUsers from './IUsers';

export default interface IAPIHandler {
  //   getUsers(): Promise<IUsers>;
  login(name: string, password: string): Promise<string>;
}
