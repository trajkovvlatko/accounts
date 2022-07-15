import React from 'react';
import {Text, View} from 'react-native';
import {Link} from 'react-router-native';
import styles from '../shared/styles';
import {Page} from '../shared/types';

interface IProps {
  currentPage: Page;
}

const Header = ({currentPage}: IProps) => {
  switch (currentPage) {
    case Page.SELECT_USER:
      return (
        <View style={styles.header}>
          <Text style={styles.headerText}>Почетна</Text>
        </View>
      );
    case Page.ACCOUNT:
      return (
        <View style={styles.header}>
          <Link to="/">
            <View style={styles.headerLink}>
              <Text style={styles.headerIcon}>{'<'}</Text>
              <Text style={styles.headerText}>Одбери друга сметка</Text>
            </View>
          </Link>
        </View>
      );
    case Page.UPDATE:
      return (
        <View style={styles.header}>
          <Link to="/account">
            <View style={styles.headerLink}>
              <Text style={styles.headerIcon}>{'<'}</Text>
              <Text style={styles.headerText}>Назад</Text>
            </View>
          </Link>
        </View>
      );
    default:
      return null;
  }
};

export default Header;
