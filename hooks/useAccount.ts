import {useEffect, useState} from 'react';
import supabaseClient from '../lib/supabaseClient';
import {IAccount} from '../shared/types';

interface IProps {
  id?: string;
}

const useAccount = ({id}: IProps) => {
  const [account, setAccount] = useState<IAccount | null>(null);

  const fetchAccount = async () => {
    if (!supabaseClient || !id) {
      return;
    }

    const {data} = await supabaseClient
      .from('accounts')
      .select()
      .filter('id', 'eq', id)
      .limit(1);

    if (data && data.length === 1) {
      setAccount(data[0]);
    }
  };

  useEffect(() => {
    fetchAccount();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {account};
};

export default useAccount;
