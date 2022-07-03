import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Header from '../components/Header';
import {Link, useParams} from 'react-router-native';
import {IAccount} from '../shared/types';
import supabaseClient from '../lib/supabaseClient';

const Account = () => {
  const {id} = useParams();
  const [account, setAccount] = useState<IAccount | null>(null);

  const fetchAccount = async () => {
    if (!supabaseClient) {
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

  if (!account) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Header />
      <Text>Account info:</Text>
      <Text>Name: {account.name}</Text>
      <Text>Balance: {account.balance}</Text>

      <Link to={`/add-expense/${account.id}`}>
        <Text>Add expense</Text>
      </Link>

      <Link to={`/add-salary/${account.id}`}>
        <Text>Add salary</Text>
      </Link>
    </View>
  );
};
export default Account;
