import { FlatList, Linking, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Colors from '../../utils/Colors'
import Header from '../../components/common/cart/Header'
import { NYAKUL_ADMIN_WHATSAPP_NUMBER } from '../../config/constants'
import CartInfoCard from '../../components/feed/GetEstimate/CartView/CartInfoCard'
import ReviewPriceInfoCard from '../../components/feed/GetEstimate/reviewYourOrderView/ReviewPriceInfoCard'
import Footer from '../../components/common/cart/Footer'

const ReviewYourOrderView = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const productDetails = route.params?.productDetails;
  const estimatedProductData = route?.params?.estimatedProductData;

  const handleCallLinkPress = async () => {
    const callUrl = 'tel:' + NYAKUL_ADMIN_WHATSAPP_NUMBER;
    Linking.openURL(callUrl).catch((error) => {
      log.error('Error opening URL:', error);
    });
  };

  const formatDataForWhatsApp = (estimatedProductData) => {
    let message = 'I am interested in buying these items:\n\n';
    if (!estimatedProductData || estimatedProductData.length === 0) {
      message = 'Hello, I have a query regarding some products.';
    } else {
      // Add each item's details
      estimatedProductData.forEach((data) => {
        data.estimatedData.forEach((item) => {
          message += `Product Name: ${item.productName}\n`;
          message += item.productVariant ? `Variant: ${item.productVariant}\n` : '';
          message += `Rate: Rs.${item.rate}\n`;
          message += `Quantity: ${item.quantity[item.productVariant]}\n`;
          message += `Subtotal: Rs.${item.subTotal}\n\n`;
        });
      });

      // Calculate and add totals
      const totalProducts = estimatedProductData.reduce((acc, curr) => acc + curr.estimatedData.length, 0);
      const totalSubTotal = estimatedProductData.reduce((acc, curr) => acc + curr.subtotal, 0);
      const totalDiscount = estimatedProductData.reduce((acc, curr) => acc + curr.totalDiscount, 0);
      const grandTotal = estimatedProductData.reduce((acc, curr) => acc + curr.totalEstimatedPrice, 0);

      message += `Total Number of Products: ${totalProducts}\n`;
      message += `Subtotal: Rs.${totalSubTotal}\n`;
      message += `Discount: Rs.${totalDiscount}\n`;
      message += `GRAND TOTAL: Rs.${grandTotal}\n`;
    }

    return message;
  };

  const handleWhatsappShare = async () => {
    try {
      const message = formatDataForWhatsApp(estimatedProductData);
      const whatsappUrl = `whatsapp://send?phone=${NYAKUL_ADMIN_WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
      Linking.openURL(whatsappUrl).catch(err => console.error('An error occurred', err));
    } catch (error) {
      log.error(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        titleText='Review your order'
        handleBackPress={() => navigation.goBack()}
      />
      <FlatList
        data={estimatedProductData}
        renderItem={({ item, index }) => {
          return (
            <CartInfoCard
              showRemoveBtn={false}
              productName={item?.estimatedData[0]?.productName}
              subTotal={item?.totalEstimatedPrice}
              numOfProducts={item?.estimatedData.length}
              handleCartPress={() => navigation.navigate('GetEstimate', { cartData: item, productDetails: productDetails })}
            />
          )
        }}
      />
      <ReviewPriceInfoCard
        estimatedData={estimatedProductData}
      />
      <View style={styles.footerContainer}>
        <Footer
          handleWhatsappPress={handleWhatsappShare}
          handleCallPress={handleCallLinkPress}
        />
      </View>
    </ScrollView>
  )
}

export default ReviewYourOrderView

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
})