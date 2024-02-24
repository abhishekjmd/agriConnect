import React, { useEffect, useRef, useState } from "react";
import { View, Text, Pressable, StyleSheet, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ProductOptionBottomSheet from "./ProductOptionBottomSheet";
import Colors from "../../utils/Colors";
import { SCREEN_WIDTH } from "../../utils/Theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ProductVariant {
  variantName: string;
  price: number;
}
interface Product {
  id: string;
  productName: string;
  description?: string;
  image: string;
  variants: ProductVariant[];
}

type ProductProps = {
  product: Product;
};

const ProductCard = (props: ProductProps) => {
  const navigation: any = useNavigation();
  const sheetRef = useRef<RBSheet | null>(null);

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const [cart, setCart] = useState({});

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const savedCart = await AsyncStorage.getItem("cart");
      if (savedCart !== null) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      Alert.alert("Error", "Failed to load the cart.");
    }
  };

  const updateCartInStorage = async (updatedCart) => {
    try {
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    } catch (error) {
      Alert.alert("Error", "Failed to save the cart.");
    }
  };

  const onAddToCart = async (variant) => {
    const updatedCart = { ...cart, [variant]: (cart[variant] || 0) + 1 };
    await updateCartInStorage(updatedCart);
  };

  const onRemoveFromCart = async (variant) => {
    if (cart[variant] > 0) {
      const updatedCart = { ...cart, [variant]: cart[variant] - 1 };
      await updateCartInStorage(updatedCart);
    }
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Pressable style={styles.card}>
        <View style={{ flex: 1 }}>
          <Pressable style={styles.imageContainer}>
            <View>
              <Image
                style={styles.image}
                source={{ uri: props.product.image }}
                resizeMode="center"
              />
            </View>
          </Pressable>
          <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
            <Text style={styles.productName}>{props.product.productName}</Text>
            {props.product.description && (
              <Text style={styles.productDescName} numberOfLines={1}>
                {props.product.description}
              </Text>
            )}
            <View style={styles.row}>
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesome
                    name="rupee"
                    size={12}
                    color={Colors.BLACK}
                    style={{ paddingRight: 2, paddingTop: 2 }}
                  />
                  <Text style={styles.rupee}>
                    {props.product.variants[0].price}
                  </Text>
                </View>
                <Text style={styles.unitText}>
                  Per {props.product.variants[0].variantName}
                </Text>
              </View>
              <View>
                <Pressable style={styles.addBtn} onPress={openSheet}>
                  <Text style={styles.addText}>Add</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <ProductOptionBottomSheet
        ref={sheetRef}
        product={props.product} // Corrected reference here
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 80,
  },
  productName: {
    color: Colors.BLACK,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "500",
    width: SCREEN_WIDTH * 0.32,
    height: 40,
  },
  productDescName: {
    color: "#7C7A7A",
    fontSize: 11,
    lineHeight: 16,
    fontWeight: "500",
    width: SCREEN_WIDTH * 0.32,
  },
  rupee: {
    color: Colors.BLACK,
    fontSize: 12,
    fontWeight: "500",
    width: SCREEN_WIDTH * 0.15,
  },
  unitText: {
    color: Colors.BLACK,
    fontSize: 10,
    lineHeight: 16,
    fontWeight: "500",
    width: SCREEN_WIDTH * 0.15,
  },
  addText: {
    color: Colors.PRIMARY,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "600",
    textAlign: "center",
    paddingTop: 2,
  },
  card: {
    width: SCREEN_WIDTH * 0.42,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginRight: 20,
    height: 230,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  addBtn: {
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    marginTop: 3,
    width: 60,
    height: 25,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  imageContainer: {
    justifyContent: "center",
    marginHorizontal: 25,
    marginTop: 15,
  },
});

export default ProductCard;
