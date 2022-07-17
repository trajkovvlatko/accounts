import React, {useContext} from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../components/Header';
import useAccount from '../hooks/useAccount';
import styles from '../shared/styles';
import {Page} from '../shared/types';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import AccountEditForm from '../components/AccountEditForm';

const EditAccount = () => {
  const {currentUser} = useContext(CurrentUserContext);
  const {account} = useAccount({userId: currentUser?.id});

  if (!account || !currentUser?.id) {
    return null;
  }

  return (
    <View style={styles.homeContainer}>
      <ScrollView>
        <Header currentPage={Page.EDIT_ACCOUNT} />

        <View style={styles.wrapper}>
          <AccountEditForm account={account} currentUser={currentUser} />
        </View>
      </ScrollView>
    </View>
  );
};
export default EditAccount;
