import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EstimatedPriceInfoCard from "../../components/feed/GetEstimate/EstimatedPriceInfoCard";
import ProductsInfoCard from "../../components/feed/GetEstimate/ProductsInfoCard";
import Footer from "../../components/common/cart/Footer";
import Header from "../../components/common/cart/Header";
import Colors from "../../utils/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductCartView = () => {
  const navigation = useNavigation();
  const [cartData, setCartData] = useState({});

  const fetchCartData = async () => {
    try {
      const cartJson = await AsyncStorage.getItem("cart");
      const cart = cartJson != null ? JSON.parse(cartJson) : {};
      setCartData(cart);
    } catch (e) {
      console.error("Failed to fetch cart data from AsyncStorage", e);
    }
  };

  const handleWhatsappShare = async () => {
    try {
      let message = "I am interested in buying these items:\n\n";
      if (!cartData || Object.keys(cartData).length === 0) {
        message = "Hello, I have a query regarding some products.";
      } else {
        // Format each item's details from cartData
        Object.values(cartData).forEach((item) => {
          message += `Product Name: ${item.productName}\n`;
          message += item.productVariant
            ? `Variant: ${item.productVariant}\n`
            : "";
          message += `Rate: Rs.${item.price}\n`;
          message += `Quantity: ${item.quantity}\n`;
          message += `Subtotal: Rs.${item.subTotal}\n\n`;
        });
        message += `GRAND TOTAL: Rs.${totalEstimatedPrice}\n`; // Use the calculated totalEstimatedPrice
      }
      const whatsappUrl = `whatsapp://send?phone=${+919825571401}&text=${encodeURIComponent(
        message
      )}`;
      Linking.openURL(whatsappUrl).catch((err) =>
        console.error("An error occurred", err)
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const updateCartData = async (newCart) => {
    await AsyncStorage.setItem("cart", JSON.stringify(newCart));
    setCartData(newCart);
  };

  const handleDecrement = (variantName) => {
    setCartData((prevCartData) => {
      const newCart = { ...prevCartData };
      if (newCart[variantName].quantity > 1) {
        newCart[variantName].quantity -= 1;
      } else {
        delete newCart[variantName];
      }
      updateCartData(newCart);
      return newCart;
    });
  };

  const handleIncrement = (variantName) => {
    setCartData((prevCartData) => {
      const newCart = { ...prevCartData };
      if (newCart[variantName]) {
        newCart[variantName].quantity += 1;
      } else {
        // Handle the case where the variant is not already in the cart
        // For example, you can add it with a default quantity of 1
        // Here's a simple implementation:
        newCart[variantName] = {
          productName: "New Product", // Set the actual product name here
          quantity: 1,
          price: 0, // Set the actual price here
          subTotal: 0, // You may need to update the subtotal accordingly
        };
      }
      updateCartData(newCart);
      return newCart;
    });
  };

  // const handleDecrement = (variantName) => {
  //   const newCart = { ...cartData };
  //   if (newCart[variantName].quantity > 1) {
  //     newCart[variantName].quantity -= 1;
  //   } else {
  //     delete newCart[variantName];
  //   }
  //   updateCartData(newCart);
  // };

  // const handleIncrement = (variantName) => {
  //   const newCart = { ...cartData };
  //   if (newCart[variantName]) {
  //     newCart[variantName].quantity += 1;
  //   }
  //   updateCartData(newCart);
  // };

  const subtotal = Object.values(cartData).reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const totalDiscount = 0;
  const totalEstimatedPrice = subtotal - totalDiscount;

  return (
    <>
      <Header
        titleText="Cart"
        handleBackPress={() => navigation.goBack()}
        isProductCart={true}
      />
      <ScrollView style={styles.container}>
        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.itemSelectedBox}>
            {Object.entries(cartData).map(([variantName, item]) => (
              <ProductsInfoCard
                key={variantName}
                productName={item.productName}
                productVariant={variantName}
                price={item.price}
                quantity={item.quantity}
                onDecrement={() => handleDecrement(variantName)}
                onIncrement={() => handleIncrement(variantName)}
              />
            ))}
          </View>
          <EstimatedPriceInfoCard
            subTotal={subtotal}
            totalDiscount={totalDiscount}
            estimatedData={Object.values(cartData)}
            totalEstimatedPrice={totalEstimatedPrice}
          />
        </View>
      </ScrollView>

      <Footer handleWhatsappPress={handleWhatsappShare} isProductCart={true} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  itemSelectedBox: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.WHITE,
    marginTop: 15,
    borderRadius: 30,
    elevation: 4,
  },
});

export default ProductCartView;
