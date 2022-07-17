import React, {useState} from 'react';
import {Alert, Pressable, Text, TextInput, View} from 'react-native';
import {Link} from 'react-router-native';
import styles from '../shared/styles';
import {IAccount, IUser} from '../shared/types';
import {updateAccount} from '../lib/queries';
import {useNavigate} from 'react-router-native';

interface IProps {
  account: IAccount;
  currentUser: IUser;
}

const AccountEditForm = ({account, currentUser}: IProps) => {
  const {id, balance, savings} = account;
  const [newBalance, setNewBalance] = useState<number>(balance);
  const [newSavings, setNewSavings] = useState<number>(savings);
  const navigate = useNavigate();

  const onUpdateBalance = (value: string) => {
    const num = value ? parseInt(value, 10) : 0;
    setNewBalance(num);
  };

  const onUpdateSavings = (value: string) => {
    const num = value ? parseInt(value, 10) : 0;
    setNewSavings(num);
  };

  const update = async () => {
    if (newBalance >= 0 && newSavings >= 0) {
      await updateAccount({
        id,
        userId: currentUser.id,
        balance: newBalance,
        savings: newSavings,
      });
      navigate('/account');
    } else {
      Alert.alert('Погрешни вредности за сметка и заштеда.');
    }
  };

  return (
    <View style={styles.fullPage}>
      <Text style={styles.title}>Измени состојба - {currentUser.name}</Text>
      <View style={styles.balanceWrapper}>
        <Text style={styles.text}>Сметка:</Text>
        <TextInput
          style={styles.textInput}
          value={newBalance.toString()}
          keyboardType="numeric"
          onChangeText={onUpdateBalance}
        />
      </View>
      <View style={styles.balanceWrapper}>
        <Text style={styles.text}>Заштеда:</Text>
        <TextInput
          style={styles.textInput}
          value={newSavings.toString()}
          keyboardType="numeric"
          onChangeText={onUpdateSavings}
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <Link to="/account" style={styles.addSalaryButton}>
          <Text style={styles.addSalaryButtonText}>Откажи</Text>
        </Link>
        <Pressable onPress={update} style={styles.addExpenseButton}>
          <Text style={styles.addExpenseButtonText}>Зачувај</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AccountEditForm;
