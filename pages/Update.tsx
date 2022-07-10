import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../components/Header';
import {useParams} from 'react-router-native';
import styles from '../shared/styles';
import UpdateForm from '../components/UpdateForm';
import {Page, TAction} from '../shared/types';

const Update = () => {
  const {userId, action} = useParams();

  if (!userId) {
    return null;
  }

  return (
    <View style={styles.updateContainer}>
      <ScrollView style={styles.scrollView}>
        <Header currentPage={Page.UPDATE} userId={userId} />

        <View style={styles.updateWrapper}>
          <Text style={styles.title}>
            {action === 'expense' ? 'Внеси трошоци' : 'Внеси плата'}
          </Text>
          <UpdateForm userId={userId} action={action as TAction} />
        </View>
      </ScrollView>
    </View>
  );
};
export default Update;
