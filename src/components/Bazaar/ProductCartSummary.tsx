import { View, Text, Pressable, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useStores } from '../../stores';
import Colors from '../../utils/Colors';
import { SCREEN_WIDTH } from '../../utils/Theme';

const ProductCartSummary = observer(({ productId, handleNavigate }) => {
  const { productCartStore, productStore } = useStores();

  const totalPrice = productCartStore.getCartSummaryForProductID(productId)?.totalPrice;
  const formattedTotalPrice = Number.isInteger(totalPrice) ? totalPrice.toFixed(0) : totalPrice.toFixed(2);

  return (
    <>
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.center}>
            <Text style={styles.variantName}>
              {productStore.getProductById(productId)?.name}
            </Text>
            <Text style={styles.rupee}>
              {productCartStore.getCartSummaryForProductID(productId)?.numberOfLineItems === 1 
                ? `${productCartStore.getCartSummaryForProductID(productId)?.numberOfLineItems} product` 
                : `${productCartStore.getCartSummaryForProductID(productId)?.numberOfLineItems} products`}
            </Text>
          </View>
          <Pressable style={styles.cartBtn} onPress={handleNavigate}>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome 
              name='rupee' 
              size={13} 
              color={Colors.WHITE}
              style={{paddingRight: 2, paddingTop: 2}}
            />
            <Text style={styles.cartText}>{formattedTotalPrice} | View Cart</Text>
          </View>
          </Pressable>
        </View>
      </View>
    </>
  )
});

export default ProductCartSummary;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    position: 'absolute',
    bottom: 10,
    borderColor: Colors.BORDER,
    backgroundColor: Colors.WHITE,
    width: SCREEN_WIDTH * 0.90,
    padding: 15,
    marginHorizontal: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  center: {
    justifyContent: 'center'
  },
  variantName: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17,
    color: Colors.BLACK,
    width: SCREEN_WIDTH * 0.35
  },
  rupee: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: Colors.LIGHT_GREY,
  },
  cartBtn: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.PRIMARY,
    backgroundColor: Colors.PRIMARY,
    width: SCREEN_WIDTH * 0.40,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2
  },
  cartText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17,
    textAlign: 'center',
    color: Colors.WHITE
  }
});