import React from 'react';
import {Text, View} from 'react-native';
import {Link} from 'react-router-native';

interface IProps {
  id?: string;
}

const Header = ({id}: IProps) => {
  return (
    <View>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      {id && (
        <Link to={`/account/${id}`}>
          <Text>Back</Text>
        </Link>
      )}
      <Text>----------</Text>
    </View>
  );
};

export default Header;
