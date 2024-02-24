import React, { useState, useRef, useEffect, useMemo } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ViewShot from 'react-native-view-shot';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../utils/Colors';

// import Header from '../../components/common/cart/Header';
import EstimatedPriceInfoCard from '../../components/feed/GetEstimate/EstimatedPriceInfoCard';
import ProductsInfoCard from '../../components/feed/GetEstimate/ProductsInfoCard';
import MoveToCartButton from '../../components/feed/GetEstimate/MoveToCartButton';
// import Header from '../../components/common/cart/Header';

const GetEstimateView = () => {
  const ref = useRef();
  const route = useRoute();
  const navigation = useNavigation();
  const productDetails = route?.params?.productDetails;
  const [productQuantities, setProductQuantities] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [estimatedData, setEstimatedData] = useState([]);
  const [isLogoVisible, setIsLogoVisible] = useState(false)
  const [totalEstimatedPrice, setTotalEstimatedPrice] = useState(0);

  const handleDecrement = (productDetails) => {
    const currentQuantity = productQuantities[productDetails?.productVariant] || 0;
    if (currentQuantity > 0) {
      const updatedQuantities = { ...productQuantities };
      updatedQuantities[productDetails?.productVariant] = currentQuantity - 1;
      setProductQuantities(updatedQuantities);
      const totalDiscount = calculateTotalDiscount(updatedQuantities, productDetails);
      const subTotal = calculateSubtotal(updatedQuantities, productDetails)
      const estimatedItem = {
        productName: productDetails.productName,
        productVariant: productDetails.productVariant,
        rate: productDetails?.pricePerCarton,
        quantity: updatedQuantities,
        subTotal: subTotal,
        discount: totalDiscount,
        estimatedPrice: subTotal - totalDiscount,
      };
      if (updatedQuantities[productDetails.productVariant] === 0) {
        // Remove the product from estimatedData when quantity becomes 0
        setEstimatedData((prevData) => {
          return prevData.filter((item) => item.productVariant !== productDetails.productVariant);
        });
      } else {
        setEstimatedData((prevData) => {
          const index = prevData.findIndex((item) => item.productVariant === productDetails.productVariant);
          if (index !== -1) {
            // If the variant already exists, update it
            prevData[index] = estimatedItem;
            return [...prevData];

          } else {
            // If it's a new variant, add it to the array
            return [...prevData, estimatedItem];
          }
        });
      }
    }
  }

  const handleIncrement = (productDetails) => {
    const currentQuantity = productQuantities[productDetails?.productVariant] || 0;
    if (currentQuantity < 10) {
      const updatedQuantities = { ...productQuantities };
      updatedQuantities[productDetails?.productVariant] = currentQuantity + 1;
      setProductQuantities(updatedQuantities);
      // Calculate the total estimated price based on the updated quantities
      const totalDiscount = calculateTotalDiscount(updatedQuantities, productDetails);
      const subTotal = calculateSubtotal(updatedQuantities, productDetails)
      const estimatedItem = {
        productName: productDetails.productName,
        productVariant: productDetails.productVariant,
        rate: productDetails?.pricePerCarton,
        quantity: updatedQuantities,
        subTotal: subTotal,
        discount: totalDiscount,
        estimatedPrice: subTotal - totalDiscount,
      };

      if (updatedQuantities[productDetails.productVariant] === 0) {
        // Remove the product from estimatedData when quantity becomes 0
        setEstimatedData((prevData) => {
          return prevData.filter((item) => item.productVariant !== productDetails.productVariant);
        });
      } else {
        setEstimatedData((prevData) => {
          const index = prevData.findIndex((item) => item.productVariant === productDetails.productVariant);
          if (index !== -1) {
            // If the variant already exists, update it
            prevData[index] = estimatedItem;
            return [...prevData];
          } else {
            // If it's a new variant, add it to the array
            return [...prevData, estimatedItem];
          }
        });
      }
    }
  }

  const calculateTotalDiscount = (quantities, productDetails) => {
    let totalDiscount = 0;
    if (quantities.hasOwnProperty(productDetails.productVariant)) {
      const quantity = quantities[productDetails.productVariant];
      const discount = productDetails?.discount || 0;
      totalDiscount += quantity * discount;
    }
    return totalDiscount;
  }

  const calculateSubtotal = (quantities, productDetails) => {
    let subtotal = 0;
    // Loop through all product variants
    if (quantities.hasOwnProperty(productDetails.productVariant)) {
      const quantity = quantities[productDetails.productVariant];
      const rate = productDetails?.pricePerCarton || 0;
      subtotal += quantity * rate;
    }
    return subtotal;
  }

  useEffect(() => {
    const totalEstimatedPrice = estimatedData.reduce((total, item) => total + item.estimatedPrice, 0);
    const totalDiscount = estimatedData.reduce((total, item) => total + item.discount, 0);
    const subTotal = estimatedData.reduce((total, item) => total + item.subTotal, 0);
    setTotalEstimatedPrice(totalEstimatedPrice);
    setTotalDiscount(totalDiscount);
    setSubTotal(subTotal);
  }, [estimatedData])

  useEffect(() => {
    if (route.params?.cartData) {
      const { estimatedData, totalEstimatedPrice, totalDiscount, subtotal } = route.params.cartData;

      if (Array.isArray(estimatedData)) {
        setEstimatedData(estimatedData);
        setTotalEstimatedPrice(totalEstimatedPrice);
        setTotalDiscount(totalDiscount);
        setSubTotal(subtotal);
      } else {
        console.error('estimatedData is not an array:', estimatedData);
      }
    }
  }, [route.params?.cartData]);

  const updateProductDataArray = async () => {
    try {
      setLoading(true);
      const storedData = await AsyncStorage.getItem('estimatedProductData');
      let newProductDataArray = storedData ? JSON.parse(storedData) : [];

      // Create new product data
      const newProductData = {
        estimatedData: estimatedData,
        totalEstimatedPrice: totalEstimatedPrice,
        totalDiscount: totalDiscount,
        subtotal: subTotal,
      };

      // Only proceed if estimatedData is not empty
      if (newProductData.estimatedData && newProductData.estimatedData.length > 0) {
        const existingProductIndex = newProductDataArray.findIndex(entry =>
          entry.estimatedData.some(product =>
            product.productName === newProductData.estimatedData[0].productName &&
            product.productVariant === newProductData.estimatedData[0].productVariant
          )
        );

        if (existingProductIndex !== -1) {
          // Update existing product data
          newProductDataArray[existingProductIndex] = newProductData;
        } else {
          // Add new product data to the array if it doesn't exist
          newProductDataArray.push(newProductData);
        }

        const jsonString = JSON.stringify(newProductDataArray);
        await AsyncStorage.setItem('estimatedProductData', jsonString);
      }
      setLoading(false);
      navigation.navigate('CartView', { productDetails: productDetails })
    } catch (error) {
      setLoading(false);
      navigation.navigate('CartView', { productDetails: productDetails })
    }
  };

  const memoizedCalculations = useMemo(() => {
    const totalEstimatedPrice = estimatedData.reduce((total, item) => total + item.estimatedPrice, 0);
    const totalDiscount = estimatedData.reduce((total, item) => total + item.discount, 0);
    const subTotal = estimatedData.reduce((total, item) => total + item.subTotal, 0);

    return { totalEstimatedPrice, totalDiscount, subTotal };
  }, [estimatedData]);

  return (
    <>
    {/* <Header
          titleText='Get Estimate'
          handleBackPress={() => navigation.goBack()}
        /> */}
      <ScrollView style={styles.container}>
        <View style={{ paddingHorizontal: 20, }}>
          <View style={styles.itemSelectedBox}>
            <FlatList
              data={productDetails}
              keyExtractor={(item) => item?.productVariant}
              nestedScrollEnabled={true}
              renderItem={({ item, index }) => {
                return (
                  <ProductsInfoCard
                    productName={item?.productName}
                    productVariant={item?.productVariant}
                    price={item?.pricePerCarton}
                    quantity={productQuantities[item?.productVariant] || 0}
                    handleDecrement={() => handleDecrement(item)}
                    handleIncrement={() => handleIncrement(item)}
                  />
                )
              }}
            />
          </View>
          <ViewShot ref={ref}>
            <EstimatedPriceInfoCard
              subTotal={memoizedCalculations.subTotal}
              totalDiscount={memoizedCalculations.totalDiscount}
              estimatedData={estimatedData}
              totalEstimatedPrice={memoizedCalculations.totalEstimatedPrice}
              visibleOnlyForViewShotSharing={isLogoVisible}
            />
          </ViewShot>
        </View>
      </ScrollView>
      <MoveToCartButton
        loading={loading}
        onPress={() => updateProductDataArray()}
      />
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  itemSelectedBox: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.WHITE,
    marginTop: 15,
    borderRadius: 30,
    elevation: 4,
  },
  divider: {
    backgroundColor: Colors.LIGHT_GRAY,
    height: 1
  },
});

export default GetEstimateView