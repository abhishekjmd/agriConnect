import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../styles/globalStyles';

const DailyUpdates = () => {
  return (
    <View style={globalStyles.centerAlignedView}>
      <Text style={{fontSize: 20}}>
        Daily Updates coming soon...
      </Text>
    </View>
  );
};

export default DailyUpdates;

const styles = StyleSheet.create({});
