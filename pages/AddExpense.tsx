import React, {useState} from 'react';
import {
  Button,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import Header from '../components/Header';
import {useParams, useNavigate} from 'react-router-native';
import supabaseClient from '../lib/supabaseClient';
import useAccount from '../hooks/useAccount';
import {addTransaction, updateAccount} from '../lib/queries';
import styles from '../shared/styles';

const AddExpense = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(0);
  const {account} = useAccount();

  const addExpense = async () => {
    if (!supabaseClient || !account) {
      return;
    }

    try {
      const balance = account.balance - amount;
      const savings = account.savings;
      await updateAccount({id: account.id, balance, savings});
      await addTransaction({id: account.id, amount});
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  const onChangeText = (value: string) => {
    const num = value ? parseInt(value, 10) : 0;
    setAmount(num);
  };

  return (
    <View style={styles.updateContainer}>
      <ScrollView style={styles.scrollView}>
        <Header id={id} />

        <View style={styles.updateWrapper}>
          <Text style={styles.text}>Suma</Text>
          <TextInput
            style={styles.textInput}
            value={amount.toString()}
            keyboardType="numeric"
            onChangeText={onChangeText}
          />
          <Pressable onPress={addExpense} style={styles.saveButton}>
            <Text style={styles.addExpenseButtonText}>Zacuvaj</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};
export default AddExpense;
