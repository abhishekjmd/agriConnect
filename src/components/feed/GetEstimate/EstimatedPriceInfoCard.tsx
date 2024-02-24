import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SCREEN_WIDTH} from '../../../utils/Theme';
import {Divider} from 'react-native-paper';
import Colors from '../../../utils/Colors';
// import { PRIMARY_Logo } from '../../../assets'

type EstimatedPriceInfoCardProps = {
  estimatedData?: any;
  totalEstimatedPrice?: number;
  totalDiscount?: number;
  subTotal: number;
  visibleOnlyForViewShotSharing?: boolean;
  isProductCart?: boolean;
};

const EstimatedPriceInfoCard = (props: EstimatedPriceInfoCardProps) => {
  const {estimatedData, totalEstimatedPrice} = props;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.descriptionInfoContainer}>
          <Text style={styles.infoTextStyles}>DESCRIPTION</Text>
        </View>
        <View style={styles.rateInfoContainer}>
          <Text style={styles.infoTextStyles}>RATE</Text>
        </View>
        <View style={styles.qtyInfoContainer}>
          <Text style={styles.infoTextStyles}>QTY</Text>
        </View>
        <View style={styles.subTotalInfoContainer}>
          <Text style={styles.infoTextStyles}>SUBTOTAL</Text>
        </View>
      </View>
      <Divider style={styles.divider} bold={true} />
      {estimatedData.map((item, index) => {
        return (
          <View style={[styles.infoContainer, {paddingVertical: 10}]}>
            <View style={styles.descriptionInfoContainer}>
              <Text style={styles.productTextStyles}>{item.productName}</Text>
              <Text style={styles.productTextStyles}>
                {item.productVariant}
              </Text>
              <Text style={styles.productTextStyles}>₹ {item.price}</Text>
              {/* <Text style={[styles.infoTextStyles, { width: 80 }]}>{item.productName} {item.productVariant}</Text> */}
            </View>
            <View style={styles.rateInfoContainer}>
              <Text style={styles.infoTextStyles}>{item.price}</Text>
            </View>
            <View style={styles.qtyInfoContainer}>
              <Text style={styles.infoTextStyles}>
                {item.quantity[item.productVariant] || item.quantity}
              </Text>
            </View>
            <View style={styles.subTotalInfoContainer}>
              <Text style={styles.infoTextStyles}>
                ₹ {item.price * item.quantity}
              </Text>
            </View>
          </View>
        );
      })}
      <Divider style={styles.divider} bold={true} />

      <Divider style={styles.divider} bold={true} />
      <View style={[styles.lightGreyTextRow]}>
        <Text style={styles.grandTotal}>GRAND TOTAL</Text>
        <Text style={styles.lightGreySubText}>₹ {totalEstimatedPrice}</Text>
      </View>
    </View>
  );
};

export default EstimatedPriceInfoCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 10,
    backgroundColor: 'white',
    marginVertical: 25,
    borderRadius: 30,
    elevation: 4,
  },
  logoContainer: {
    width: '100%',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  image: {
    width: 90,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  infoContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  infoTextStyles: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  descriptionInfoContainer: {
    width: SCREEN_WIDTH * 0.31,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rateInfoContainer: {
    width: SCREEN_WIDTH * 0.18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productTextStyles: {
    fontSize: 11,
    fontWeight: '500',
    color: '#282828',
  },

  qtyInfoContainer: {
    width: SCREEN_WIDTH * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTotalInfoContainer: {
    width: SCREEN_WIDTH * 0.24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    backgroundColor: Colors.LIGHT_GRAY,
    height: 1,
  },
  lightGreyTextRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
  },
  lightGreyText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#979A9F',
  },
  lightGreySubText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
    width: 80,
  },
  grandTotal: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.PRIMARY,
  },
});
