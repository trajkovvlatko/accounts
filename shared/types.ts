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

export interface IUser {
  id: string;
  name: string;
}

export type TAction = 'add' | 'remove' | 'transfer';

export enum Page {
  SELECT_USER,
  ACCOUNT,
  UPDATE,
  EDIT_ACCOUNT,
}

export enum ENV {
  dev,
  prod,
}

export enum AccountType {
  BALANCE,
  SAVINGS,
}
