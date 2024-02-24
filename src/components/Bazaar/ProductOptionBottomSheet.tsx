// ProductOptionBottomSheet.js
import React, { forwardRef, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import RBSheet from "react-native-raw-bottom-sheet";
import Colors from "../../utils/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CartSummary from "./CartSummary ";
import { useNavigation } from "@react-navigation/native";

const ProductOptionBottomSheet = forwardRef(({ product }, ref) => {
  const [cart, setCart] = useState({});
  const navigation = useNavigation();
  const updateCartData = async (newCart) => {
    await AsyncStorage.setItem("cart", JSON.stringify(newCart));
  };

  const onAddToCart = (variant) => {
    setCart((currentCart) => {
      const currentQuantity = currentCart[variant.variantName]?.quantity || 0;
      const newCart = {
        ...currentCart,
        [variant.variantName]: {
          ...variant,
          productName: product.productName, // Including product name here
          quantity: currentQuantity + 1,
          subtotal: ((currentQuantity + 1) * variant.price).toFixed(2),
        },
      };
      updateCartData(newCart);
      console.log("cartData", newCart);
      return newCart;
    });
  };

  const onRemoveFromCart = (variant) => {
    setCart((currentCart) => {
      const currentQuantity = currentCart[variant.variantName]?.quantity || 0;
      if (currentQuantity <= 1) {
        const newCart = { ...currentCart };
        delete newCart[variant.variantName]; // Removing the variant if quantity is less than or equal to 1
        updateCartData(newCart);
        console.log("cartData", newCart);
        return newCart;
      } else {
        const newCart = {
          ...currentCart,
          [variant.variantName]: {
            ...variant,
            productName: product.productName, // Including product name here as well
            quantity: currentQuantity - 1,
            subtotal: ((currentQuantity - 1) * variant.price).toFixed(2),
          },
        };
        updateCartData(newCart);
        return newCart;
      }
    });
  };

  return (
    <RBSheet
      ref={ref}
      height={350}
      openDuration={250}
      customStyles={{
        container: { borderTopRightRadius: 20, borderTopLeftRadius: 20 },
      }}
    >
      <ScrollView>
        <View style={styles.sheetHeader}>
          <Text style={styles.sheetTitle}>{product.productName}</Text>
        </View>
        {product.variants.map((variant, index) => (
          <View key={index} style={styles.variantContainer}>
            <Text style={styles.variantName}>
              {variant.variantName} - ₹{variant.price}
            </Text>
            <View style={styles.actionContainer}>
              <Pressable
                onPress={() => onRemoveFromCart(variant)}
                style={styles.actionButton}
              >
                <AntDesign name="minus" size={20} color={Colors.PRIMARY} />
              </Pressable>
              <Text style={styles.quantityText}>
                {cart[variant.variantName]?.quantity || 0}
              </Text>
              <Pressable
                onPress={() => onAddToCart(variant)}
                style={styles.actionButton}
              >
                <AntDesign name="plus" size={20} color={Colors.PRIMARY} />
              </Pressable>
            </View>
          </View>
        ))}

        {
          // !productCartStore.isCartEmpty &&
          <CartSummary
            cartItems={cart}
            handleNavigate={() => navigation.navigate("ProductCartView")}
          />
        }
      </ScrollView>
    </RBSheet>
  );
});

const styles = StyleSheet.create({
  sheetHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.BLACK,
  },
  variantContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  variantName: {
    fontSize: 16,
    color: Colors.BLACK,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionButton: {
    margin: 5,
    padding: 5,
    backgroundColor: Colors.LIGHTGRAY,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 16,
    color: Colors.BLACK,
  },
});

export default ProductOptionBottomSheet;
