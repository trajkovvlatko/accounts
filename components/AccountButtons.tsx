import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from '../shared/styles';
import {useNavigate} from 'react-router-native';

const AccountButtons = () => {
  const navigate = useNavigate();

  const addSalary = () => {
    navigate('/account/update/salary');
  };

  const addExpense = () => {
    navigate('/account/update/expense');
  };

  return (
    <View style={styles.buttonsWrapper}>
      <Pressable onPress={addSalary} style={styles.addSalaryButton}>
        <Text style={styles.addSalaryButtonText}>Внеси плата</Text>
      </Pressable>
      <Pressable onPress={addExpense} style={styles.addExpenseButton}>
        <Text style={styles.addExpenseButtonText}>Внеси трошоци</Text>
      </Pressable>
    </View>
  );
};

export default AccountButtons;
