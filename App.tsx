/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Navigator from './src/navigation/Navigator';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <Navigator />
      <Toast />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
