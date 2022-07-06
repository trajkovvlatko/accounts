import {useEffect, useState} from 'react';
import supabaseClient from '../lib/supabaseClient';
import {ITransaction} from '../shared/types';

const useTransactions = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const fetchTransactions = async () => {
    if (!supabaseClient) {
      console.error('No supabase client.');
      return;
    }

    try {
      const {data} = await supabaseClient
        .from('transactions')
        .select()
        .limit(100)
        .order('created_at', {ascending: false});
      if (data && data.length > 0) {
        setTransactions(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return {transactions};
};

export default useTransactions;
