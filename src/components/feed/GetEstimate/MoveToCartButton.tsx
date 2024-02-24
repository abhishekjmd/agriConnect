import { Image, StyleSheet, Text, View, Pressable, ActivityIndicator } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../../utils/Theme'
import Colors from '../../../utils/Colors'
// import { Cart } from '../../../assets'

type MoveToCartButtonProps = {
  onPress: () => void,
  loading: boolean,
}

const MoveToCartButton = (props: MoveToCartButtonProps) => {
  const { onPress, loading } = props
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.mainContainer}
        onPress={onPress}
      >
        {/* <Image source={Cart} style={styles.iconStyles} /> */}
        {loading ? (
          <ActivityIndicator size={'small'} color={'white'} />
        ) : (
          <Text style={styles.textStyles}>Move to cart</Text>
          // <Text style={styles.postBtnTextStyles}>Post</Text>
        )}
      </Pressable>
    </View>
  )
}

export default MoveToCartButton

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    paddingVertical: 20,
  },
  mainContainer: {
    backgroundColor: Colors.PRIMARY,
    width: SCREEN_WIDTH * 0.90,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 3,
    height: 55,
    gap: 10,
  },
  iconStyles: {
    resizeMode: 'contain',
    height: 24,
    width: 24,
  },
  textStyles: {
    fontWeight: '600',
    color: 'white',
    fontSize: 16,
  },
})