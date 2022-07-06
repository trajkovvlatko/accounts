import React, {useState} from 'react';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import Header from '../components/Header';
import {useParams, useNavigate} from 'react-router-native';
import supabaseClient from '../lib/supabaseClient';
import useAccount from '../hooks/useAccount';
import {updateAccount} from '../lib/queries';
import styles from '../shared/styles';

const AddSalary = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(0);
  const {account} = useAccount();

  const addSalary = async () => {
    if (!supabaseClient || !account) {
      return;
    }

    try {
      const balance = amount;
      const savings = account.savings + account.balance;
      await updateAccount({id: account.id, balance, savings});
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
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header id={id} />
        <Text>AddSalary</Text>

        <TextInput
          value={amount.toString()}
          keyboardType="numeric"
          onChangeText={onChangeText}
        />
        <Button title="Add salary" onPress={addSalary} />
      </ScrollView>
    </View>
  );
};
export default AddSalary;
