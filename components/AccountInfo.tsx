import React from 'react';
import {Text, View} from 'react-native';
import {currencyFormat} from '../shared/helpers';
import styles from '../shared/styles';
import {IUser} from '../shared/types';

interface IProps {
  balance: number;
  savings: number;
  currentUser: IUser;
}

const AccountInfo = ({balance, savings, currentUser}: IProps) => {
  return (
    <>
      <Text style={styles.title}>Моментална состојба - {currentUser.name}</Text>
      <View style={styles.balanceWrapper}>
        <Text style={styles.text}>Сметка:</Text>
        <Text style={styles.boldText}>{currencyFormat(balance)}</Text>
      </View>
      <View style={styles.balanceWrapper}>
        <Text style={styles.text}>Заштеда:</Text>
        <Text style={styles.boldText}>{currencyFormat(savings)}</Text>
      </View>
    </>
  );
};

export default AccountInfo;
