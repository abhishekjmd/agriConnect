import { NavigationContainer } from "@react-navigation/native";
import AuthenticationStack from "./stack/AuthenticationStack";
import { SafeAreaView, StatusBar } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainBottomTab from "./tab/MainBottomTab";
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ObjectDataContext } from '../utils/ObjectDataContext';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const objectData = useContext(ObjectDataContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString) {
          setUserData(JSON.parse(userDataString));
        }
      } catch (error) {
        console.log('Error fetching user data: ', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={'white'} barStyle='dark-content' />
      <NavigationContainer>
        {userData ? (
          objectData?.isUserAuthenticated ? (
            <AuthenticationStack />
          ) : (
            <MainBottomTab />
          )
        ) : (
          <AuthenticationStack />
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigator;
