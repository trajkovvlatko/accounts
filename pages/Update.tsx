import React, {useContext} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../components/Header';
import {useParams} from 'react-router-native';
import styles from '../shared/styles';
import UpdateForm from '../components/UpdateForm';
import {Page, TAction} from '../shared/types';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

const Update = () => {
  const {currentUser} = useContext(CurrentUserContext);
  const {action} = useParams();

  if (!currentUser) {
    return null;
  }

  return (
    <View style={styles.updateContainer}>
      <ScrollView style={styles.scrollView}>
        <Header currentPage={Page.UPDATE} />

        <View style={styles.updateWrapper}>
          <Text style={styles.title}>
            {action === 'expense' ? 'Внеси трошоци' : 'Внеси плата'} -{' '}
            {currentUser.name}
          </Text>
          <UpdateForm userId={currentUser.id} action={action as TAction} />
        </View>
      </ScrollView>
    </View>
  );
};
export default Update;
