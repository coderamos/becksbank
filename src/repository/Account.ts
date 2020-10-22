import User from './User';

export default class Account {
  constructor(
    public code: string,
    public userId: number,
    public user: User,
    public balance?: number,
    public id?: number
  ) {}
}
