export interface IAccount {
  id: string;
  name: string;
  balance: number;
  created_at: string;
}

export interface ITransaction {
  id: string;
  account_id: string;
  amount: number;
  created_at: string;
}
