import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { observer } from 'mobx-react';
import { useStores } from '../../stores';
import Colors from '../../utils/Colors';
import { SCREEN_WIDTH } from '../../utils/Theme';

type CartProps = {
  productId: string,
  variant: string
}

const FooterCart = observer((props: CartProps) => {
  const { productId, variant } = props;
  const navigation = useNavigation();
  const { productStore, productCartStore } = useStores();

  const handleIncrement = (productId, productVariant) => {
    const identifier = `${productId}#${productVariant}`;
    productCartStore.addItemToCart(identifier);
  };

  const handleDecrement = (productId, productVariant) => {
    const identifier = `${productId}#${productVariant}`;
    productCartStore.decrementLineItemQuantity(identifier);
  };

  const handleNavigate = () => {
    navigation.navigate('ProductCartView')
  };

  const totalPrice = productCartStore.getCartSummaryForProductID(productId)?.totalPrice;
  const formattedTotalPrice = Number.isInteger(totalPrice) ? totalPrice.toFixed(0) : totalPrice.toFixed(2);

  return (
    <>
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.center}>
            <Text style={styles.variantName}>{productStore.getProductById(productId)?.name}</Text>
            {
              formattedTotalPrice > 0 && 
              <View style={{flexDirection: 'row'}}>
                <FontAwesome 
                  name='rupee' 
                  size={13} 
                  color={Colors.BLACK}
                  style={{paddingRight: 2, paddingTop: 2}}
                />
                <Text style={styles.variantName}>{formattedTotalPrice}</Text>
              </View>
            }                 
            <Text style={styles.ruppee}>{variant.replace('#', ': ')}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Pressable style={styles.counterBtn}>
              <Pressable onPress={() => handleDecrement(productId, variant)}>
                <AntDesign name='minus' size={15} color={Colors.BLACK} style={{ top: 2 }} />
              </Pressable>
                <Text style={styles.quantityText}>{productCartStore.cart.get(`${productId}#${variant}`)?.quantity || 0}</Text>
              <Pressable onPress={() => handleIncrement(productId, variant)}>
                <AntDesign name='plus' size={13} color={Colors.BLACK} style={{ top: 3 }} />
              </Pressable>
            </Pressable>
            <Pressable style={styles.cartBtn} onPress={handleNavigate}>
              <Text style={styles.cartText}>View Cart</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  )
});

export default FooterCart;

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
  ruppee: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: Colors.LIGHT_GREY,
    width: SCREEN_WIDTH * 0.35,
  },
  counterBtn: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.PRIMARY,
    alignSelf: 'center',
    backgroundColor: Colors.WHITE,
    width: SCREEN_WIDTH * 0.20,
    padding: 8,
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: 15
  },
  cartBtn: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.PRIMARY,
    alignSelf: 'center',
    backgroundColor: Colors.PRIMARY,
    width: SCREEN_WIDTH * 0.20,
    padding: 8,
    height: 40,
    justifyContent: 'center'
  },
  cartText: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 17,
    textAlign: 'center',
    color: Colors.WHITE
  },
  quantityText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.PRIMARY,
    textAlign: 'center'
  },
});