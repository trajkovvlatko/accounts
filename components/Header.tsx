import React from 'react';
import {Text, View} from 'react-native';
import {Link} from 'react-router-native';
import styles from '../shared/styles';

interface IProps {
  id?: string;
}

const Header = ({id}: IProps) => {
  return id ? (
    <View style={[styles.header, styles.backHeader]}>
      <Link to="/">
        <View style={styles.headerLink}>
          <Text style={styles.headerIcon}>{'<'}</Text>
          <Text style={styles.headerText}>Назад</Text>
        </View>
      </Link>
    </View>
  ) : (
    <View style={styles.header}>
      <Text style={styles.headerText}>Почетна</Text>
    </View>
  );
};

export default Header;
