import supabaseClient from './supabaseClient';

export const updateAccount = async ({
  id,
  balance,
  savings,
}: {
  id: string;
  balance: number;
  savings: number;
}) => {
  if (!supabaseClient) {
    console.log('No supabaseClient');
    return null;
  }

  return await supabaseClient
    .from('accounts')
    .update({balance, savings})
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
