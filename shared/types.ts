export interface IAccount {
  id: string;
  balance: number;
  savings: number;
}

export interface ITransaction {
  id: string;
  account_id: string;
  amount: number;
  created_at: string;
}

export type TAction = 'expense' | 'savings';
