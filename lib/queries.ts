import supabaseClient, {tables} from './supabaseClient';

export const updateAccount = async ({
  id,
  userId,
  balance,
  savings,
}: {
  id: string;
  userId: string;
  balance: number;
  savings: number;
}) => {
  if (!supabaseClient) {
    console.log('No supabaseClient');
    return null;
  }

  return await supabaseClient.from(tables.accounts).update({balance, savings}).match({id, user_id: userId});
};

export const addTransaction = async ({id, userId, amount}: {id: string; userId: string; amount: number}) => {
  if (!supabaseClient) {
    console.log('No supabaseClient');
    return null;
  }

  return await supabaseClient.from(tables.transactions).insert({
    account_id: id,
    user_id: userId,
    amount,
  });
};

export const deleteTransaction = async ({id, userId}: {id: string; userId: string}) => {
  if (!supabaseClient) {
    console.log('No supabaseClient');
    return null;
  }

  return await supabaseClient.from(tables.transactions).delete().match({id, user_id: userId});
};
