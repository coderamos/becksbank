export default class PaymentSlip {
  constructor(
    public id: number,
    public code: string,
    public dueDate: string,
    public value: number,
    public originUser: OriginUser,
    public destinationUser: DestinationUser,
    public category: string
  ) {}
}

type OriginUser = {
  userName: string;
  bankName: string;
  accountCode: string;
};

type DestinationUser = {
  userName: string;
  bankName: string;
  accountCode: string;
};
