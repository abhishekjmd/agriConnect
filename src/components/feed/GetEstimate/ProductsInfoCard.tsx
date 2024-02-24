import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {BrandsBackgroundImage} from '../../../assets';
import {SCREEN_WIDTH} from '../../../utils/Theme';
import Colors from '../../../utils/Colors';

type ProductsInfoCardProps = {
  productName?: string;
  productVariant?: string;
  price?: number;
  handleIncrement: () => void;
  quantity?: string;
  handleDecrement: () => void;
};

const ProductsInfoCard = (props: ProductsInfoCardProps) => {
  const {
    productName,
    productVariant,
    price,
    handleIncrement,
    handleDecrement,
    quantity,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* <Image source={BrandsBackgroundImage} style={styles.image} /> */}
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.productsInfoContainer}>
          <Text style={styles.productTextStyles}>{productName}</Text>
          <Text style={styles.productTextStyles}>{productVariant}</Text>
          <Text style={styles.productTextStyles}>₹ {price}</Text>
        </View>
        <View style={styles.quantitySelectorContainer}>
          <Pressable onPress={handleDecrement}>
            <AntDesign name="minus" size={18} color={Colors.PRIMARY} />
          </Pressable>
          <Text style={styles.quantityTextStyles}>{quantity}</Text>
          <Pressable onPress={handleIncrement}>
            <AntDesign name="plus" size={16} color={Colors.PRIMARY} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProductsInfoCard;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.8,
    height: 70,
    flexDirection: 'row',
  },
  imageContainer: {
    width: SCREEN_WIDTH * 0.12,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  infoContainer: {
    width: SCREEN_WIDTH * 0.67,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  productsInfoContainer: {
    width: SCREEN_WIDTH * 0.42,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  productTextStyles: {
    fontSize: 11,
    fontWeight: '500',
    color: '#282828',
  },
  quantitySelectorContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.23,
    height: 35,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 5,
  },
  quantityTextStyles: {
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
    color: '#000000',
  },
});
