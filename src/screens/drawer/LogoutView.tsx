import { View, Text } from 'react-native';
import React, { useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ObjectDataContext } from '../../utils/ObjectDataContext';

export default function LogoutView({ navigate }) {
  const objectData = useContext(ObjectDataContext);
  const Logout = () => {
    AsyncStorage.clear();
    objectData?.setIsUserAuthenticated(false);
  };
  useEffect(() => {
    Logout();
  }, []);
  return (
    <View>
      <Text></Text>
    </View>
  );
}
