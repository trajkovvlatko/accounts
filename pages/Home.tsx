import React from 'react';
import {FlatList, Pressable, ScrollView, Text, View} from 'react-native';
import Header from '../components/Header';
import useAccount from '../hooks/useAccount';
import useTransactions from '../hooks/useTransactions';
import {useNavigate} from 'react-router-native';
import styles from '../shared/styles';
import TransactionsHeader from '../components/TransactionsHeader';
import {toDateString} from '../shared/helpers';

const Home = () => {
  const {account} = useAccount();
  const {transactions} = useTransactions();
  const navigate = useNavigate();

  if (!account) {
    return null;
  }

  const addSalary = () => {
    navigate(`/update/salary/${account.id}`);
  };

  const addExpense = () => {
    navigate(`/update/expense/${account.id}`);
  };

  return (
    <View style={styles.homeContainer}>
      <ScrollView style={styles.scrollView}>
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
        </View>
      </ScrollView>

      <View style={styles.transactionsWrapper}>
        <Text style={styles.title}>Latest transactions</Text>
        <FlatList
          data={transactions}
          ListHeaderComponent={TransactionsHeader}
          scrollEnabled={true}
          stickyHeaderIndices={[0]}
          renderItem={row => {
            return (
              <View
                key={`transaction-${row.item.id}`}
                style={styles.transactionsRow}>
                <Text style={styles.transactionsRowAmount}>
                  {row.item.amount}
                </Text>
                <Text style={styles.transactionsRowDate}>
                  {toDateString(row.item.created_at)}
                </Text>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
export default Home;
