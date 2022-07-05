import React from 'react';
import {Button, Text, View} from 'react-native';
import Header from '../components/Header';
import useAccount from '../hooks/useAccount';
import useTransactions from '../hooks/useTransactions';
import {useNavigate} from 'react-router-native';

const Home = () => {
  const {account} = useAccount();
  const {transactions} = useTransactions();
  const navigate = useNavigate();

  if (!account) {
    return null;
  }

  const addSalary = () => {
    navigate(`/add-salary/${account.id}`);
  };

  const addExpense = () => {
    navigate(`/add-expense/${account.id}`);
  };

  return (
    <View>
      <Header />
      <View key={`account-link-${account.id}`}>
        <Text>Balance: {account.balance}</Text>
        <Text>Savings: {account.savings}</Text>
      </View>
      <Text>------------------</Text>
      <View>
        <Button onPress={addSalary} title="Add salary" />
        <Button onPress={addExpense} title="Add expense" />
      </View>
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
