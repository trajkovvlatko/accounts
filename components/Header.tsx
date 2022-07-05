import React from 'react';
import {Text, View} from 'react-native';
import {Link} from 'react-router-native';

interface IProps {
  id?: string;
}

const Header = ({id}: IProps) => {
  return (
    <View>
      {id && (
        <Link to="/">
          <Text>Back</Text>
        </Link>
      )}
      <Text>----------</Text>
    </View>
  );
};

export default Header;
