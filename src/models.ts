export type TSearchBar = {
  gsmNumber: string;
};

export interface TSingleCustomerDetails {
  Name: string;
  Surname: string;
  BirthDate: string;
  GSMNumber: string;
}
export interface TSingleCustomerResponse extends TSingleCustomerDetails {
  id: number;
  CustomerID: string;
  CardNumber: string;
}

export type TCardClose = {
  cardCloseReason: string;
};

export type TCustomerTransactions = {
  id: number;
  TransactionID: string;
  CustomerID: string;
  TransactionDate: string;
  TransactionAmount: string;
};
