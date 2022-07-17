import React from 'react';
import {Text, View} from 'react-native';
import {Link} from 'react-router-native';
import styles from '../shared/styles';
import {Page} from '../shared/types';

type IProps =
  | {currentPage: Page.SELECT_USER}
  | {currentPage: Page.ACCOUNT}
  | {currentPage: Page.UPDATE}
  | {currentPage: Page.EDIT_ACCOUNT};

const Header = (props: IProps) => {
  switch (props.currentPage) {
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
          <Link to="/account/edit">
            <Text style={styles.headerText}>Измени</Text>
          </Link>
        </View>
      );
    case Page.EDIT_ACCOUNT:
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
