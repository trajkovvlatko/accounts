import React from 'react';
import {Text, View} from 'react-native';
import {Link} from 'react-router-native';

const Header = () => {
  return (
    <View>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Text>----------</Text>
    </View>
  );
};

export default Header;
