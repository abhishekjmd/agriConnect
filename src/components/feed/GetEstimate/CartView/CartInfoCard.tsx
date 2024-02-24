import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SCREEN_WIDTH } from '../../../../utils/Theme'
import Colors from '../../../../utils/Colors'

type CartInfoCardProps = {
  showRemoveBtn?: boolean,
  productName?: string,
  subTotal?: string,
  numOfProducts?: string,
  handleCartPress?: () => void,
  handleRemovePress?: () => void,
}

const CartInfoCard = (props: CartInfoCardProps) => {
  const {
    showRemoveBtn,
    productName,
    subTotal,
    numOfProducts,
    handleCartPress,
    handleRemovePress
  } = props
  return (
    <View style={styles.container}>
    {/* TODO: product Images asset would be added in future keeping the code for simiplicity  */}
      {/* <View style={[styles.productImageContainer, { marginBottom: showRemoveBtn ? 10 : 0 }]}>
        <Image
          style={styles.productImageStyles}
          // the current PR is only for static UI screens thats why added this image and it would be removed in the upcoming PR
          source={require('../../../../assets/icons/image84.png')}
        />
      </View> */}
      <View style={styles.infoContainer}>
        <View style={[styles.productNameContainer, { marginTop: showRemoveBtn ? 10 : 0 }]}>
          <Text style={styles.productNameTextStyles}>{productName}</Text>
        </View>
        <View style={styles.amountAndProductContainer}>
          <Text style={styles.amountAndProductQuantityTextStyles}>RS {subTotal} /-</Text>
        </View>
        <View style={styles.amountAndProductContainer}>
          <Text style={styles.amountAndProductQuantityTextStyles}>no of product: {numOfProducts}</Text>
        </View>
        {showRemoveBtn ?
          <Pressable onPress={handleRemovePress} style={styles.removeContainer}>
            <MaterialCommunityIcons name='close' size={18} />
            <Text style={styles.removeTextStyles}>Remove</Text>
          </Pressable>
          : false
        }
      </View>
      <Pressable onPress={handleCartPress}>
        <MaterialCommunityIcons name='chevron-right' size={25} color='#1C1B1F' />
      </Pressable>
    </View>
  )
}

export default CartInfoCard

const styles = StyleSheet.create({
  container: {
    gap: 10,
    height: 114,
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    justifyContent: 'space-around',
    borderBottomColor: Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK,
  },
  productImageContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH * 0.20,
  },
  productImageStyles: {
    width: 49,
    height: 49,
    borderRadius: 4,
    resizeMode: 'cover',
  },
  infoContainer: {
    height: '100%',
    justifyContent: 'center',
    width: SCREEN_WIDTH * 0.63,
  },
  productNameContainer: {
    width: '100%',
  },
  productNameTextStyles: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.BLACK,
  },
  amountAndProductContainer: {
    width: '100%',
    marginTop: 2,
  },
  removeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    gap: 5
  },
  amountAndProductQuantityTextStyles: {
    fontSize: 11,
    fontWeight: '500',
    color: Colors.BLACK
  },
  removeTextStyles: {
    fontSize: 11,
    color: '#5B5757',
    fontWeight: '500',
  },
})