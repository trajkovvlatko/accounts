import React from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../components/Header';
import useAccount from '../hooks/useAccount';
import useTransactions from '../hooks/useTransactions';
import styles from '../shared/styles';
import TransactionsList from '../components/TransactionsList';
import AccountInfo from '../components/AccountInfo';
import AccountButtons from '../components/AccountButtons';

const Home = () => {
  const {account, triggerReload: reloadAccount} = useAccount();
  const {transactions, triggerReload: reloadTransactions} = useTransactions();

  if (!account) {
    return null;
  }

  const onDelete = () => {
    reloadAccount();
    reloadTransactions();
  };

  return (
    <View style={styles.homeContainer}>
      <ScrollView style={styles.scrollView}>
        <Header />

        <View style={styles.wrapper}>
          <AccountInfo balance={account.balance} savings={account.savings} />
          <AccountButtons accountId={account.id} />
        </View>
      </ScrollView>

      <TransactionsList
        account={account}
        transactions={transactions}
        onDelete={onDelete}
      />
    </View>
  );
};
export default Home;
