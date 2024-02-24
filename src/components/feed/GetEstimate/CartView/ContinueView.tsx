import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../../../utils/Theme'
// import { DoubleArrow } from '../../../../assets'
import Colors from '../../../../utils/Colors'

type ContinueViewProps = {
  handleContinuePress: () => void,
  totalEstimatedPrice?: string
}

const ContinueView = (props: ContinueViewProps) => {
  const {
    handleContinuePress,
    totalEstimatedPrice
  }
    = props
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.amountTextStyles}>Rs.{totalEstimatedPrice}</Text>
        <Text style={styles.totalTextStyles}>TOTAL</Text>
      </View>
      <TouchableOpacity
        style={styles.continueBtnContainer}
        onPress={handleContinuePress}
      >
        <Text style={styles.continueBtnTextStyles}>Continue</Text>
        {/* <Image source={DoubleArrow} style={styles.iconStyles} /> */}
      </TouchableOpacity>
    </View>
  )
}

export default ContinueView

const styles = StyleSheet.create({
  container: {
    height: 90,
    borderTopWidth: 0.5,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK,
  },
  amountTextStyles: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.PRIMARY
  },
  totalTextStyles: {
    fontSize: 11,
    fontWeight: '500',
    color: Colors.BLACK
  },
  continueBtnContainer: {
    gap: 5,
    height: 47,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.44,
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY,
  },
  continueBtnTextStyles: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.WHITE,
  },
  iconStyles: {
    width: 19,
    height: 19,
    marginTop: 5,
    resizeMode: 'contain',
  },
})