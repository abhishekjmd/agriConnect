import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Colors from '../../utils/Colors'
// import Header from '../../components/common/cart/Header'
import CartInfoCard from '../../components/feed/GetEstimate/CartView/CartInfoCard'
import AddmoreProductButtons from '../../components/feed/GetEstimate/CartView/AddmoreProductButton'
import ContinueView from '../../components/feed/GetEstimate/CartView/ContinueView'

const CartView = () => {
  const route = useRoute();
  const productDetails = route.params?.productDetails;
  const navigation = useNavigation();
  const [estimatedProductData, setEstimatedProductData] = useState([]);

  const getEstimatedata = async () => {
    try {
      const storedData = await AsyncStorage.getItem('estimatedProductData');
      if (storedData !== null) {
        const data = JSON.parse(storedData);
        setEstimatedProductData(data);
      }
    } catch (error) {
      log.error('Error retrieving estimated data from AsyncStorage:', error);
    }
  };

  const totalEstimatedPrice = useMemo(() => {
    return estimatedProductData.reduce((sum, data) => sum + data.totalEstimatedPrice, 0);
  }, [estimatedProductData]);

  const handleRemoveProduct = async (productIndex) => {
    // Create a new array without the product
    const updatedProductData = estimatedProductData.filter((_, index) => index !== productIndex);
    // Update the state
    setEstimatedProductData(updatedProductData);
    // Save the updated array back to AsyncStorage
    try {
      const jsonString = JSON.stringify(updatedProductData);
      await AsyncStorage.setItem('estimatedProductData', jsonString);
    } catch (error) {
      log.error('Error updating estimated product data in AsyncStorage:', error);
    }
  };

  useEffect(() => {
    getEstimatedata();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Header
        titleText={`Cart (${estimatedProductData.length})`}
        handleBackPress={() => navigation.goBack()}
      /> */}
      <FlatList
        data={estimatedProductData}
        renderItem={({ item, index }) => {
          return (
            <CartInfoCard
              showRemoveBtn={true}
              productName={item?.estimatedData[0]?.productName}
              subTotal={item?.totalEstimatedPrice}
              numOfProducts={item?.estimatedData.length}
              handleCartPress={() => navigation.navigate('GetEstimate', { cartData: item, productDetails: productDetails })}
              handleRemovePress={() => handleRemoveProduct(index)}
            />
          )
        }}
      />
      <View style={{ justifyContent: 'flex-start', marginBottom: 320 }}>
        <AddmoreProductButtons
          handleAddmoreProductPress={() => {
            navigation.navigate('Feed')
          }
          }
        />
      </View>
      <View style={styles.continueContainer}>
        <ContinueView
          totalEstimatedPrice={totalEstimatedPrice}
          handleContinuePress={() => {
            navigation.navigate('ReviewYourOrderView', {
              estimatedProductData: estimatedProductData,
              productDetails: productDetails
            })
          }}
        />
      </View>
    </View>
  )
}

export default CartView

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  continueContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})