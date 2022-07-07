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
  index: number;
}

const TransactionRow = ({account, item, onDelete, index}: IProps) => {
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

  const rowStyles = [
    styles.transactionsRow,
    index % 2 === 0 ? styles.transactionsEvenRow : {},
  ];

  return (
    <View key={`transaction-${item.id}`} style={rowStyles}>
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
