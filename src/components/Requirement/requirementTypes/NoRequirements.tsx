import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NoRequirements_Icon } from '../../../assets'

const NoRequirements = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={NoRequirements_Icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyles} ellipsizeMode='tail'>Use ʻCreate Requirements’ button and let </Text>
        <Text style={styles.textStyles} ellipsizeMode='tail'>others know what you're looking for</Text>
      </View>
    </View>
  )
}

export default NoRequirements

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 160,
    height: 160,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:30
  },
  textStyles: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000A6',
  },
})