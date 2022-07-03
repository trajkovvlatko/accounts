import React from 'react';
import {Text, View} from 'react-native';
import {Link} from 'react-router-native';
import Header from '../components/Header';
import useAccounts from '../hooks/useAccounts';
import useTransactions from '../hooks/useTransactions';

const Home = () => {
  const {accounts} = useAccounts();
  const {transactions} = useTransactions();

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
