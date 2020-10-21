export default class User {
  constructor(
    public name: string,
    public email: string,
    public role: string,
    public document: string,
    public id?: number
  ) {}
}
