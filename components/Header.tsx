import React from 'react';
import {Text, View} from 'react-native';
import {Link} from 'react-router-native';
import styles from '../shared/styles';

interface IProps {
  id?: string;
}

const Header = ({id}: IProps) => {
  return (
    <View style={styles.header}>
      {id ? (
        <Link to="/">
          <Text style={styles.headerText}>Back</Text>
        </Link>
      ) : (
        <Text style={styles.headerText}>Pocetna</Text>
      )}
    </View>
  );
};

export default Header;
