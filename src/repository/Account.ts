export default class Account {
  constructor(
    public code: string,
    public userId: number,
    public balance?: number,
    public id?: number
  ) {}
}
