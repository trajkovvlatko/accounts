import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import supabaseClient from '../lib/supabaseClient';
import {ITransaction} from '../shared/types';

const useTransactions = () => {
  const [reload, setReload] = useState(false);
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
    } catch (e: any) {
      console.error(e);
      Alert.alert('Error', e.message);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [reload]);

  const triggerReload = () => setReload(oldVal => !oldVal);

  return {transactions, triggerReload};
};

export default useTransactions;
