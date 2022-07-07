import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../components/Header';
import {useParams} from 'react-router-native';
import styles from '../shared/styles';
import UpdateForm from '../components/UpdateForm';
import {TAction} from '../shared/types';

const Update = () => {
  const {id, action} = useParams();

  return (
    <View style={styles.updateContainer}>
      <ScrollView style={styles.scrollView}>
        <Header id={id} />

        <View style={styles.updateWrapper}>
          <Text style={styles.title}>
            {action === 'expense' ? 'Внеси трошоци' : 'Внеси плата'}
          </Text>
          <UpdateForm action={action as TAction} />
        </View>
      </ScrollView>
    </View>
  );
};
export default Update;
