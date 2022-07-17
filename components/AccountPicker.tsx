import React, {Dispatch, SetStateAction} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from '../shared/styles';
import {AccountType} from '../shared/types';

interface IProps {
  selectedAccount: AccountType;
  onPress: Dispatch<SetStateAction<AccountType>>;
}

const AccountPicker = ({selectedAccount, onPress}: IProps) => {
  return (
    <View style={styles.accountPicker}>
      <Pressable style={styles.accountPickerItem} onPress={() => onPress(AccountType.BALANCE)}>
        <Text
          style={
            selectedAccount === AccountType.BALANCE ? [styles.text, styles.accountPickerItemSelected] : styles.text
          }>
          Сметка
        </Text>
      </Pressable>
      <Pressable style={styles.accountPickerItem} onPress={() => onPress(AccountType.SAVINGS)}>
        <Text
          style={
            selectedAccount === AccountType.SAVINGS ? [styles.text, styles.accountPickerItemSelected] : styles.text
          }>
          Заштеда
        </Text>
      </Pressable>
    </View>
  );
};

export default AccountPicker;
