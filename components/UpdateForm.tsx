import React, {Fragment, useRef, useState} from 'react';
import {useNavigate} from 'react-router-native';
import useAccount from '../hooks/useAccount';
import {Alert, Pressable, Text, TextInput} from 'react-native';
import {addTransaction, updateAccount} from '../lib/queries';
import supabaseClient from '../lib/supabaseClient';
import styles from '../shared/styles';
import {TAction} from '../shared/types';

interface IProps {
  userId: string;
  action: TAction;
}

const UpdateForm = ({userId, action}: IProps) => {
  const [amount, setAmount] = useState<number>(0);
  const updatingRef = useRef(false);
  const {account} = useAccount({userId});
  const navigate = useNavigate();

  const update = async () => {
    if (!supabaseClient || !account || updatingRef.current) {
      return;
    }

    if (amount <= 0) {
      Alert.alert('Проблем со сума', 'Внесената сума мора да биде над 0.');
      return;
    }

    try {
      updatingRef.current = true;
      if (action === 'expense') {
        const balance = account.balance - amount;
        const savings = account.savings;
        await Promise.all([
          updateAccount({id: account.id, userId, balance, savings}),
          addTransaction({id: account.id, userId, amount}),
        ]);
      } else {
        const balance = amount;
        const savings = account.savings + account.balance;
        await updateAccount({id: account.id, userId, balance, savings});
      }
      navigate(`/account/${userId}`);
    } catch (e: any) {
      console.error(e);
      Alert.alert('Error', e.message);
    }
  };

  const onChangeText = (value: string) => {
    const num = value ? parseInt(value, 10) : 0;
    setAmount(num);
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default UpdateForm;
