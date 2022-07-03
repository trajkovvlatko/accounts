import {useEffect, useState} from 'react';
import supabaseClient from '../lib/supabaseClient';
import {IAccount} from '../shared/types';

const useAccounts = () => {
  const [accounts, setAccounts] = useState<IAccount[]>([]);

  const fetchAccounts = async () => {
    if (!supabaseClient) {
      console.error('No supabase client.');
      return;
    }

    try {
      const {data} = await supabaseClient
        .from('accounts')
        .select()
        .order('name', {ascending: false});
      if (data && data.length > 0) {
        setAccounts(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return {accounts};
};

export default useAccounts;
