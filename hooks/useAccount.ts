import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import supabaseClient from '../lib/supabaseClient';
import {IAccount} from '../shared/types';

const useAccount = () => {
  const [reload, setReload] = useState(false);
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
    } catch (e: any) {
      console.error(e);
      Alert.alert('Error', e.message);
    }
  };

  useEffect(() => {
    fetchAccount();
  }, [reload]);

  const triggerReload = () => setReload(oldVal => !oldVal);

  return {account, triggerReload};
};

export default useAccount;
