import {StyleSheet, View, FlatList, RefreshControl} from 'react-native';
import React, {useState} from 'react';
import NoRequirements from './NoRequirements';

const FulfilledRequirements = () => {
  return (
    <View style={styles.container}>
      <NoRequirements />
    </View>
  );
};

export default FulfilledRequirements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
