import React from 'react';
import {useParams} from 'react-router-native';
import {ScrollView, View} from 'react-native';
import Header from '../components/Header';
import useAccount from '../hooks/useAccount';
import useTransactions from '../hooks/useTransactions';
import styles from '../shared/styles';
import TransactionsList from '../components/TransactionsList';
import AccountInfo from '../components/AccountInfo';
import AccountButtons from '../components/AccountButtons';
import {Page} from '../shared/types';

const Home = () => {
  const {userId} = useParams();
  const {account, triggerReload: reloadAccount} = useAccount({userId});
  const {transactions, triggerReload: reloadTransactions} = useTransactions({
    userId,
  });

  if (!account || !userId) {
    return null;
  }

  const onDelete = () => {
    reloadAccount();
    reloadTransactions();
  };

  return (
    <View style={styles.homeContainer}>
      <ScrollView style={styles.scrollView}>
        <Header currentPage={Page.ACCOUNT} />

        <View style={styles.wrapper}>
          <AccountInfo balance={account.balance} savings={account.savings} />
          <AccountButtons userId={userId} accountId={account.id} />
        </View>
      </ScrollView>

      <TransactionsList
        account={account}
        transactions={transactions}
        userId={userId}
        onDelete={onDelete}
      />
    </View>
  );
};
export default Home;
