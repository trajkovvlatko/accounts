import React from 'react';
import {Alert, Pressable, Text, View} from 'react-native';
import {updateAccount, deleteTransaction} from '../lib/queries';
import {toDateString} from '../shared/helpers';
import styles from '../shared/styles';
import {IAccount, ITransaction} from '../shared/types';

interface IProps {
  account: IAccount;
  item: ITransaction;
  onDelete: () => void;
}

const TransactionRow = ({account, item, onDelete}: IProps) => {
  const showAlert = () => {
    Alert.alert('Избриши трансакција?', '', [
      {
        text: 'Откажи',
        style: 'cancel',
      },
      {text: 'Избриши', onPress: () => remove()},
    ]);
  };

  const remove = async () => {
    const balance = account.balance + item.amount;
    const savings = account.savings;

    await Promise.all([
      updateAccount({id: account.id, balance, savings}),
      deleteTransaction({id: item.id}),
    ]);

    onDelete();
  };

  return (
    <View key={`transaction-${item.id}`} style={styles.transactionsRow}>
      <Text style={styles.transactionsRowAmount}>{item.amount}</Text>
      <Text style={styles.transactionsRowDate}>
        {toDateString(item.created_at)}
      </Text>
      <Pressable onPress={showAlert}>
        <Text style={styles.deleteText}>Избриши</Text>
      </Pressable>
    </View>
  );
};

export default TransactionRow;
