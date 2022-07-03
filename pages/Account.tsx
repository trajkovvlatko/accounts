import React from 'react';
import {Text, View} from 'react-native';
import Header from '../components/Header';
import {Link, useParams} from 'react-router-native';
import useAccount from '../hooks/useAccount';

const Account = () => {
  const {id} = useParams();
  const {account} = useAccount({id});

  if (!account) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Header />
      <Text>Account info:</Text>
      <Text>Name: {account.name}</Text>
      <Text>Balance: {account.balance}</Text>

      {account.account_type === 'main' && (
        <View>
          <Link to={`/add-expense/${account.id}`}>
            <Text>Add expense</Text>
          </Link>
          <Link to={`/add-salary/${account.id}`}>
            <Text>Add salary</Text>
          </Link>
        </View>
      )}
    </View>
  );
};
export default Account;
