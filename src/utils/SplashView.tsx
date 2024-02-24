import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import userStore from '../mobx/stores/UserStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashView = () => {

  useEffect(()=>{
    let id : string;
    async function FetchUser() : Promise<void>{
      id = JSON.parse(await AsyncStorage.getItem('userId'));
      userStore?.setUserID(id);
    }
    FetchUser();
  },[]);

  return (
    <View style={styles.splashContainer}>
      <Image
        style={styles.splashImage}
        source={require('../assets/SplashScreen.png')}
        defaultSource={require('../assets/SplashScreen.png')}
      />
    </View>
  );
};

export default SplashView;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: '100%',
    height: '100%',
  },
});
