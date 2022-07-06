import React, {useState} from 'react';
import {Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import Header from '../components/Header';
import {useParams, useNavigate} from 'react-router-native';
import supabaseClient from '../lib/supabaseClient';
import useAccount from '../hooks/useAccount';
import {addTransaction, updateAccount} from '../lib/queries';
import styles from '../shared/styles';

const Update = () => {
  const {id, action} = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(0);
  const {account} = useAccount();

  const update = async () => {
    if (!supabaseClient || !account) {
      return;
    }

    try {
      if (action === 'expense') {
        const balance = account.balance - amount;
        const savings = account.savings;
        await Promise.all([
          updateAccount({id: account.id, balance, savings}),
          addTransaction({id: account.id, amount}),
        ]);
      } else {
        const balance = amount;
        const savings = account.savings + account.balance;
        await updateAccount({id: account.id, balance, savings});
      }
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
          <Text style={styles.title}>
            {action === 'expense' ? 'Внеси трошоци' : 'Внеси плата'}
          </Text>
          <Text style={styles.text}>Сума</Text>
          <TextInput
            style={styles.textInput}
            value={amount.toString()}
            keyboardType="numeric"
            onChangeText={onChangeText}
          />
          <Pressable onPress={update} style={styles.saveButton}>
            <Text style={styles.addExpenseButtonText}>Зачувај</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};
export default Update;
