import React from 'react';
import {Text, View} from 'react-native';
import styles from '../shared/styles';
import {Link} from 'react-router-native';

const AccountButtons = () => {
  return (
    <View style={styles.buttonsWrapper}>
      <Link to="/account/update/remove" style={styles.addExpenseButton}>
        <Text style={styles.addExpenseButtonText}>Одземи од сметка</Text>
      </Link>
      <Link to="/account/update/add" style={styles.addExpenseButton}>
        <Text style={styles.addExpenseButtonText}>Додади на сметка</Text>
      </Link>
      <Link to="/account/update/transfer" style={styles.addSalaryButton}>
        <Text style={styles.addSalaryButtonText}>Внеси плата</Text>
      </Link>
    </View>
  );
};

export default AccountButtons;
