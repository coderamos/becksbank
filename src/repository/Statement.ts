export default class Statement {
  constructor(
    public accountStatements: Transaction[],
    public balance: number
  ) {}
}

export class Transaction {
  constructor(
    public accountId: number,
    public dateTime: string,
    public id: number,
    public typeOperation: string,
    public valueTransaction: string
  ) {}
}
