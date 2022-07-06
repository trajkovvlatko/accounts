import React from 'react';
import {FlatList, Pressable, ScrollView, Text, View} from 'react-native';
import Header from '../components/Header';
import useAccount from '../hooks/useAccount';
import useTransactions from '../hooks/useTransactions';
import {useNavigate} from 'react-router-native';
import styles from '../shared/styles';
import TransactionsHeader from '../components/TransactionsHeader';
import TransactionRow from '../components/TransactionRow';

const Home = () => {
  const {account, triggerReload: reloadAccount} = useAccount();
  const {transactions, triggerReload: reloadTransactions} = useTransactions();
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

  const onDelete = () => {
    reloadAccount();
    reloadTransactions();
  };

  return (
    <View style={styles.homeContainer}>
      <ScrollView style={styles.scrollView}>
        <Header />

        <View style={styles.wrapper}>
          <Text style={styles.title}>Моментална состојба</Text>

          <View style={styles.balanceWrapper}>
            <Text style={styles.text}>Сметка:</Text>
            <Text style={styles.text}>{account.balance}</Text>
          </View>
          <View style={styles.balanceWrapper}>
            <Text style={styles.text}>Заштеда:</Text>
            <Text style={styles.text}>{account.savings}</Text>
          </View>

          <View style={styles.buttonsWrapper}>
            <Pressable onPress={addSalary} style={styles.addSalaryButton}>
              <Text style={styles.addSalaryButtonText}>Внеси плата</Text>
            </Pressable>
            <Pressable onPress={addExpense} style={styles.addExpenseButton}>
              <Text style={styles.addExpenseButtonText}>Внеси трошоци</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <View style={styles.transactionsWrapper}>
        <Text style={styles.title}>Последни промени</Text>
        <FlatList
          data={transactions}
          ListHeaderComponent={TransactionsHeader}
          scrollEnabled={true}
          stickyHeaderIndices={[0]}
          renderItem={row => {
            return (
              <TransactionRow
                onDelete={onDelete}
                account={account}
                item={row.item}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
export default Home;
