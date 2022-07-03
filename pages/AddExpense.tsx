import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Header from '../components/Header';
import {useParams, useNavigate} from 'react-router-native';
import supabaseClient from '../lib/supabaseClient';
import {IAccount} from '../shared/types';

const AddExpense = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(0);
  const [account, setAccount] = useState<IAccount | null>(null);

  const fetchAccount = async () => {
    if (!supabaseClient) {
      return;
    }

    const {data} = await supabaseClient
      .from('accounts')
      .select()
      .filter('id', 'eq', id)
      .limit(1);

    if (data && data.length === 1) {
      setAccount(data[0]);
    }
  };

  useEffect(() => {
    fetchAccount();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const addExpense = async () => {
    if (!supabaseClient || !account) {
      return;
    }

    try {
      await supabaseClient.from('transactions').insert({
        account_id: id,
        amount,
      });
      await supabaseClient
        .from('accounts')
        .update({
          balance: account.balance - amount,
        })
        .match({id});

      navigate(`/account/${id}`);
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
      <Header />
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
