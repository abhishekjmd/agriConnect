import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import NoRequirements from '../NoRequirements';
const YourRequirements = ({activeTab}) => {
  return (
    <View style={styles.container}>
      <NoRequirements /> 
    </View>
  );
};

export default YourRequirements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
