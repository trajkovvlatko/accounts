import React, {Fragment} from 'react';
import {Text, View} from 'react-native';
import {currencyFormat} from '../shared/helpers';
import styles from '../shared/styles';

interface IProps {
  balance: number;
  savings: number;
}

const AccountInfo = ({balance, savings}: IProps) => {
  return (
    <Fragment>
      <Text style={styles.title}>Моментална состојба</Text>
      <View style={styles.balanceWrapper}>
        <Text style={styles.text}>Сметка:</Text>
        <Text style={styles.boldText}>{currencyFormat(balance)}</Text>
      </View>
      <View style={styles.balanceWrapper}>
        <Text style={styles.text}>Заштеда:</Text>
        <Text style={styles.boldText}>{currencyFormat(savings)}</Text>
      </View>
    </Fragment>
  );
};

export default AccountInfo;
