import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Header from '../components/Header';
import {useParams, useNavigate} from 'react-router-native';
import supabaseClient from '../lib/supabaseClient';
import useAccount from '../hooks/useAccount';
import {getSavingsAccount, setBalance, updateSavings} from '../lib/queries';

const AddSalary = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(0);
  const {account} = useAccount({id});

  const addSalary = async () => {
    if (!supabaseClient || !account) {
      return;
    }

    try {
      // get savings account
      const savingsAccount = await getSavingsAccount();

      if (!savingsAccount) {
        console.log('Missing savings account.');
        return;
      }

      // add what's left on the account to the savings account balance
      await updateSavings({mainAccount: account, savingsAccount});

      // add only salary to the main account
      await setBalance({id: account.id, balance: amount});

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
      <Header id={id} />
      <Text>AddSalary</Text>

      <TextInput
        value={amount.toString()}
        keyboardType="numeric"
        onChangeText={onChangeText}
      />
      <Button title="Add salary" onPress={addSalary} />
    </View>
  );
};
export default AddSalary;
