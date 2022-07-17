import React, {useContext} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../components/Header';
import {useParams} from 'react-router-native';
import styles from '../shared/styles';
import UpdateForm from '../components/UpdateForm';
import {Page, TAction} from '../shared/types';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

const getLabel = (action: TAction): string => {
  switch (action) {
    case 'remove':
      return 'Одземи од сметка';
    case 'add':
      return 'Додади на сметка';
    case 'transfer':
      return 'Внеси плата';
    default:
      return '';
  }
};

const Update = () => {
  const {currentUser} = useContext(CurrentUserContext);
  const params = useParams();
  const action = params.action as TAction;

  if (!currentUser) {
    return null;
  }

  return (
    <View style={styles.updateContainer}>
      <ScrollView style={styles.scrollView}>
        <Header currentPage={Page.UPDATE} />

        <View style={styles.updateWrapper}>
          <Text style={styles.title}>
            {getLabel(action)} - {currentUser.name}
          </Text>
          <UpdateForm userId={currentUser.id} action={action} />
        </View>
      </ScrollView>
    </View>
  );
};
export default Update;
