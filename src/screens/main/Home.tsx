import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../../styles/globalStyles';

const Home = () => {
  return (
    <View style={globalStyles.centerAlignedView}>
      <Text style={globalStyles.comingSoonTextStyle}>
        Home Coming Soon...
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
