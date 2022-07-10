import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import supabaseClient from '../lib/supabaseClient';
import {IUser} from '../shared/types';

const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    if (!supabaseClient) {
      console.error('No supabase client.');
      return;
    }

    const {data, error} = await supabaseClient.from('users').select();
    if (data && data.length > 0) {
      setUsers(data);
    }
    if (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {users};
};

export default useUsers;
