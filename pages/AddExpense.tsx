import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Header from '../components/Header';
import {useParams, useNavigate} from 'react-router-native';
import supabaseClient from '../lib/supabaseClient';
import useAccount from '../hooks/useAccount';
import {addTransaction, updateAccount} from '../lib/queries';

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
    <View>
      <Header id={id} />
      <Text>AddExpense</Text>

      <TextInput
        value={amount.toString()}
        keyboardType="numeric"
        onChangeText={onChangeText}
      />
      <Button title="Add expense" onPress={addExpense} />
    </View>
  );
};
export default AddExpense;
