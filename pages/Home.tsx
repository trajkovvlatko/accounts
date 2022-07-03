import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Link} from 'react-router-native';
import Header from '../components/Header';
import supabaseClient from '../lib/supabaseClient';
import {IAccount, ITransaction} from '../shared/types';

const Home = () => {
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

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

  const fetchTransactions = async () => {
    if (!supabaseClient) {
      console.error('No supabase client.');
      return;
    }

    try {
      const {data} = await supabaseClient
        .from('transactions')
        .select()
        .order('created_at', {ascending: false});
      if (data && data.length > 0) {
        setTransactions(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAccounts();
    fetchTransactions();
  }, []);

  return (
    <View>
      <Header />
      <Text>Home</Text>
      {accounts.map(account => {
        return (
          <Link
            to={`/account/${account.id}`}
            key={`account-link-${account.id}`}>
            <Text>
              {account.name} - {account.balance}
            </Text>
          </Link>
        );
      })}
      <Text>------------------</Text>
      <Text>Latest transactions</Text>
      {transactions.map(transaction => {
        return (
          <View key={`transaction-${transaction.id}`}>
            <Text>
              {transaction.amount} -{' '}
              {new Date(transaction.created_at).toLocaleString()}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
export default Home;
