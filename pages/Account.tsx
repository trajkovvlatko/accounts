import React, {useContext} from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../components/Header';
import useAccount from '../hooks/useAccount';
import useTransactions from '../hooks/useTransactions';
import styles from '../shared/styles';
import TransactionsList from '../components/TransactionsList';
import AccountInfo from '../components/AccountInfo';
import AccountButtons from '../components/AccountButtons';
import {Page} from '../shared/types';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

const Account = () => {
  const {currentUser} = useContext(CurrentUserContext);
  const {account, triggerReload: reloadAccount} = useAccount({
    userId: currentUser?.id,
  });
  const {transactions, triggerReload: reloadTransactions} = useTransactions({
    userId: currentUser?.id,
  });

  if (!account || !currentUser?.id) {
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
          <AccountInfo balance={account.balance} savings={account.savings} currentUser={currentUser} />
          <AccountButtons />
        </View>
      </ScrollView>

      <TransactionsList account={account} transactions={transactions} userId={currentUser.id} onDelete={onDelete} />
    </View>
  );
};
export default Account;
