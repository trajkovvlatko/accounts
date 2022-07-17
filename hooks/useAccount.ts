import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import supabaseClient, {tables} from '../lib/supabaseClient';
import {IAccount} from '../shared/types';

interface IProps {
  userId?: string;
}

const useAccount = ({userId}: IProps) => {
  const [reload, setReload] = useState(false);
  const [account, setAccount] = useState<IAccount | null>(null);

  const fetchAccount = async () => {
    if (!supabaseClient) {
      console.error('No supabase client.');
      return;
    }

    if (!userId) {
      console.error('No user id.');
      return;
    }

    const {data, error} = await supabaseClient.from(tables.accounts).select().match({user_id: userId});

    if (data) {
      setAccount(data[0]);
    }
    if (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };

  useEffect(() => {
    fetchAccount();
  }, [reload]);

  const triggerReload = () => setReload(oldVal => !oldVal);

  return {account, triggerReload};
};

export default useAccount;
