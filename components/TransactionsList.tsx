import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from '../shared/styles';
import {IAccount, ITransaction} from '../shared/types';
import TransactionRow from './TransactionRow';
import TransactionsHeader from './TransactionsHeader';

interface IProps {
  account: IAccount;
  transactions: ITransaction[];
  userId: string;
  onDelete: () => void;
}

const TransactionsList = ({account, transactions, userId, onDelete}: IProps) => {
  return (
    <View style={styles.transactionsWrapper}>
      <Text style={styles.title}>Последни промени</Text>
      <FlatList
        data={transactions}
        ListHeaderComponent={TransactionsHeader}
        scrollEnabled={true}
        stickyHeaderIndices={[0]}
        renderItem={row => (
          <TransactionRow onDelete={onDelete} account={account} userId={userId} item={row.item} index={row.index} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TransactionsList;
