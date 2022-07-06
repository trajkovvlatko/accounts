import React from 'react';
import {Text, View} from 'react-native';
import styles from '../shared/styles';

const TransactionsHeader = () => {
  return (
    <View style={styles.transactionsHeader}>
      <Text style={styles.transactionsHeaderAmount}>Suma</Text>
      <Text style={styles.transactionsHeaderDate}>Data</Text>
      <Text />
    </View>
  );
};

export default TransactionsHeader;
