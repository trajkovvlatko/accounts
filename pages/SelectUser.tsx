import React from 'react';
import {useNavigate} from 'react-router-native';
import {Pressable, ScrollView, Text, View} from 'react-native';
import Header from '../components/Header';
import styles from '../shared/styles';
import {Page} from '../shared/types';
import useUser from '../hooks/useUser';

const SelectUser = () => {
  const navigate = useNavigate();
  const {users} = useUser();

  const selectUser = (userId: string) => {
    navigate(`/account/${userId}`);
  };

  return (
    <View style={styles.updateContainer}>
      <ScrollView style={styles.scrollView}>
        <Header currentPage={Page.SELECT_USER} />

        <View style={styles.selectAccountWrapper}>
          <Text style={styles.title}>Одбери сметка</Text>
          {users.map(user => {
            return (
              <Pressable
                style={styles.selectAccountButtonWrapper}
                onPress={() => selectUser(user.id)}
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
