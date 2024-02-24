import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo, } from 'react'
import { SCREEN_WIDTH } from '../../../../utils/Theme'
import Colors from '../../../../utils/Colors'

type ReviewPriceInfoCardProps = {
  estimatedData?: any,
}

const ReviewPriceInfoCard = (props: ReviewPriceInfoCardProps) => {
  const { estimatedData } = props

  // Using useMemo to calculate values only when estimatedData changes
  const { numOfProducts, subTotal, totalDiscount, totalEstimatedPrice } = useMemo(() => {
    let productCount = 0;
    let subtotalSum = 0;
    let discountSum = 0;
    let estimatedPriceSum = 0;

    estimatedData.forEach((data) => {
      productCount += data.estimatedData.length;
      subtotalSum += data.subtotal;
      discountSum += data.totalDiscount;
      estimatedPriceSum += data.totalEstimatedPrice;
    });

    return {
      numOfProducts: productCount,
      subTotal: subtotalSum,
      totalDiscount: discountSum,
      totalEstimatedPrice: estimatedPriceSum,
    };
  }, [estimatedData]);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.priceDetailsContainer}>
          <Text style={styles.priceDetailsTextStyles}>Price details ({numOfProducts} products)</Text>
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Text style={[styles.infoTextStyles, { textTransform: 'uppercase' }]}>Description</Text>
          </View>
          <View>
            <Text style={[styles.infoTextStyles, { textTransform: 'uppercase' }]}>Rate</Text>
          </View>
          <View>
            <Text style={[styles.infoTextStyles, { textTransform: 'uppercase' }]}>Qty</Text>
          </View>
          <View>
            <Text style={[styles.infoTextStyles, , { textTransform: 'uppercase' }]}>SubTotal</Text>
          </View>
        </View>
        {estimatedData.map((data, dataIndex) => (
          data.estimatedData.map((item, itemIndex) => {
            return (
              <View key={`item-${dataIndex}-${itemIndex}`} style={styles.productDetailsContainer}>
                <View style={styles.productNameContainer}>
                  <Text style={[styles.infoTextStyles, { textTransform: 'uppercase' }]}>{item.productName} ({item.productVariant})</Text>
                </View>
                <View style={styles.productRateContainer}>
                  <Text style={styles.infoTextStyles}>Rs {item.rate}</Text>
                </View>
                <View style={styles.productQtyContainer}>
                  <Text style={styles.infoTextStyles}>{item.quantity[item.productVariant]}</Text>
                </View>
                <View style={styles.productSubtotalContainer}>
                  <Text style={styles.infoTextStyles}>Rs {item.subTotal}</Text>
                </View>
              </View>
            )
          })
        ))}
        <View style={styles.productEstimateContainer}>
          <View style={styles.subTotalContainer}>
            <Text style={styles.lightGreyTextStyles}>SubTotal</Text>
            <Text style={styles.infoTextStyles}>Rs {subTotal}</Text>
          </View>
          <View style={styles.discountContainer}>
            <Text style={styles.lightGreyTextStyles}>Discount</Text>
            <Text style={[styles.infoTextStyles, { marginRight: 10 }]}>Rs {totalDiscount}</Text>
          </View>
        </View>
        <View style={styles.grandTotalContainer}>
          <Text style={[styles.grandTotalTextStyles, { color: Colors.BLACK }]}>grand Total</Text>
          <Text style={[styles.grandTotalTextStyles, { color: Colors.PRIMARY }]}>Rs.{totalEstimatedPrice}/-</Text>
        </View>
      </View>
    </View>
  )
}

export default ReviewPriceInfoCard

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
  },
  mainContainer: {
    width: SCREEN_WIDTH,
  },
  priceDetailsContainer: {
    width: SCREEN_WIDTH,
    marginLeft: 34,
    paddingVertical: 15,
  },
  priceDetailsTextStyles: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.BLACK
  },
  infoContainer: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK,
    height: 40,
  },
  infoTextStyles: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.BLACK,
  },
  productDetailsContainer: {
    justifyContent: 'space-evenly',
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  productNameContainer: {
    width: SCREEN_WIDTH * 0.24,
    alignItems: 'center',
  },
  productRateContainer: {
    width: SCREEN_WIDTH * 0.18,
    alignItems: 'center',
  },
  productQtyContainer: {
    width: SCREEN_WIDTH * 0.08,
    alignItems: 'flex-start',
  },
  productSubtotalContainer: {
    width: SCREEN_WIDTH * 0.20,
    alignItems: 'flex-start',
  },
  productEstimateContainer: {
    borderBottomColor: Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK,
    borderBottomWidth: 0.5,
    paddingVertical: 15,
    width: SCREEN_WIDTH,
  },
  subTotalContainer: {
    justifyContent: 'space-around',
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    paddingVertical: 10,
    gap: 115,
  },
  discountContainer: {
    justifyContent: 'space-around',
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    gap: 115,
  },
  lightGreyTextStyles: {
    fontWeight: '400',
    color: '#979A9F',
    fontSize: 14,
  },
  grandTotalContainer: {
    justifyContent: 'space-evenly',
    paddingVertical: 15,
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    gap: 120,
  },
  grandTotalTextStyles: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
  },
})