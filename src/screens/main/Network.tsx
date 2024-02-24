import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/Theme'

const Network = () => {
  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
        Network Comming Soon...
      </Text>
    </View>
  );
}

export default Network

const styles = StyleSheet.create({})