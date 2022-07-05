import React from 'react';
import {Button, Pressable, Text, View} from 'react-native';
import Header from '../components/Header';
import useAccount from '../hooks/useAccount';
import useTransactions from '../hooks/useTransactions';
import {useNavigate} from 'react-router-native';
import styles from '../shared/styles';

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
    <View style={styles.container}>
      <Header />

      <View style={styles.wrapper}>
        <Text style={styles.title}>Momentalna sostojba</Text>

        <View style={styles.balanceWrapper}>
          <Text style={styles.text}>Balance:</Text>
          <Text style={styles.text}>{account.balance}</Text>
        </View>
        <View style={styles.balanceWrapper}>
          <Text style={styles.text}>Savings:</Text>
          <Text style={styles.text}>{account.savings}</Text>
        </View>

        <View style={styles.buttonsWrapper}>
          <Pressable onPress={addSalary} style={styles.addSalaryButton}>
            <Text style={styles.addSalaryButtonText}>Add salary</Text>
          </Pressable>
          <Pressable onPress={addExpense} style={styles.addExpenseButton}>
            <Text style={styles.addExpenseButtonText}>Add expense</Text>
          </Pressable>
        </View>

        <View style={styles.separator} />

        <Text style={styles.title}>Latest transactions</Text>
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
    </View>
  );
};
export default Home;
