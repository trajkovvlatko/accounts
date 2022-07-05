import {useEffect, useState} from 'react';
import supabaseClient from '../lib/supabaseClient';
import {IAccount} from '../shared/types';

const useAccount = () => {
  const [account, setAccount] = useState<IAccount | null>(null);

  const fetchAccount = async () => {
    if (!supabaseClient) {
      console.error('No supabase client.');
      return;
    }

    try {
      const {data} = await supabaseClient.from('accounts').select();

      if (data && data.length > 0) {
        setAccount(data[0]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return {account};
};

export default useAccount;
