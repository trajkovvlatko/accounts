import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import supabaseClient from '../lib/supabaseClient';
import {ITransaction} from '../shared/types';

interface IProps {
  userId?: string;
}

const useTransactions = ({userId}: IProps) => {
  const [reload, setReload] = useState(false);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const fetchTransactions = async () => {
    if (!supabaseClient) {
      console.error('No supabase client.');
      return;
    }

    if (!userId) {
      console.error('No user id.');
      return;
    }

    const {data, error} = await supabaseClient
      .from('transactions')
      .select()
      .match({user_id: userId})
      .limit(100)
      .order('created_at', {ascending: false});
    if (data) {
      setTransactions(data);
    }
    if (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [reload]);

  const triggerReload = () => setReload(oldVal => !oldVal);

  return {transactions, triggerReload};
};

export default useTransactions;
