import React, {useContext} from 'react';
import {useNavigate} from 'react-router-native';
import {Pressable, ScrollView, Text, View} from 'react-native';
import Header from '../components/Header';
import styles from '../shared/styles';
import {IUser, Page} from '../shared/types';
import useUsers from '../hooks/useUsers';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

const SelectUser = () => {
  const navigate = useNavigate();
  const {users} = useUsers();
  const {setCurrentUser} = useContext(CurrentUserContext);

  const selectUser = (user: IUser) => {
    setCurrentUser(user);
    navigate('/account');
  };

  if (!users || users.length === 0) {
    return null;
  }

  return (
    <View style={styles.updateContainer}>
      <ScrollView style={styles.scrollView}>
        <Header currentPage={Page.SELECT_USER} />

        <View style={styles.selectAccountWrapper}>
          <Text style={styles.title}>Одбери корисник</Text>
          {users.map(user => {
            return (
              <Pressable
                style={styles.selectAccountButtonWrapper}
                onPress={() => selectUser(user)}
                key={`user-${user.id}`}>
                <View style={styles.addExpenseButton}>
                  <Text style={styles.addExpenseButtonText}>{user.name}</Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default SelectUser;
