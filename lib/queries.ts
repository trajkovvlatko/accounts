import {IAccount} from '../shared/types';
import supabaseClient from './supabaseClient';

export const getSavingsAccount = async () => {
  if (!supabaseClient) {
    console.log('No supabaseClient');
    return null;
  }

  const {data} = await supabaseClient
    .from('accounts')
    .select('id, name, balance, account_type, created_at')
    .match({account_type: 'savings'})
    .limit(1);
  console.log(data);

  return !data || data.length < 1 ? null : data[0];
};

export const updateSavings = async ({
  mainAccount,
  savingsAccount,
}: {
  mainAccount: IAccount;
  savingsAccount: IAccount;
}) => {
  if (!supabaseClient) {
    console.log('No supabaseClient');
    return null;
  }

  return await supabaseClient
    .from('accounts')
    .update({
      balance: mainAccount.balance + savingsAccount.balance,
    })
    .match({id: savingsAccount.id});
};

export const setBalance = async ({
  id,
  balance,
}: {
  id: string;
  balance: number;
}) => {
  if (!supabaseClient) {
    console.log('No supabaseClient');
    return null;
  }

  return await supabaseClient
    .from('accounts')
    .update({
      balance,
    })
    .match({id});
};

export const addTransaction = async ({
  id,
  amount,
}: {
  id: string;
  amount: number;
}) => {
  if (!supabaseClient) {
    console.log('No supabaseClient');
    return null;
  }

  return await supabaseClient.from('transactions').insert({
    account_id: id,
    amount,
  });
};
