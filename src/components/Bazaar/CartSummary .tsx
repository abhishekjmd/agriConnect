import { View, Text, Pressable, StyleSheet } from "react-native";
// import { observer } from "mobx-react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Colors from "../../utils/Colors";
import { SCREEN_WIDTH } from "../../utils/Theme";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartSummary = ({ handleNavigate }) => {
  const [cartItems, setCartItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [numberOfUniqueItems, setNumberOfUniqueItems] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      const cartData = await AsyncStorage.getItem("cart");
      const cart = cartData ? JSON.parse(cartData) : {};
      setCartItems(cart);
      calculateTotalPrice(cart);
    };

    fetchCart();
  }, []);

  const calculateTotalPrice = (cart) => {
    let total = 0;
    let itemCount = 0;
    Object.values(cart).forEach((item) => {
      total += item.quantity * item.price;
      itemCount += 1;
    });
    setTotalPrice(total);
    setNumberOfUniqueItems(itemCount);
  };

  const formattedTotalPrice = Number.isInteger(totalPrice)
    ? totalPrice.toFixed(0)
    : totalPrice.toFixed(2);

  return (
    <>
      <View style={styles.card}>
        <View style={styles.row}>
          <Pressable style={styles.cartBtn} onPress={handleNavigate}>
            <View style={{ flexDirection: "row", padding: 2 }}>
              <Text style={styles.cartText}>
                 View Cart
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default CartSummary;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.BORDER,
    backgroundColor: Colors.PRIMARY,
    width: SCREEN_WIDTH * 0.9,
    // padding: 5,
    marginHorizontal: 20,
  },
  row: {
    alignItems:'center',
    // flexDirection: "row",
    justifyContent: 'center',
  },
  center: {
    justifyContent: "center",
  },
  cartBtn: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.PRIMARY,
    backgroundColor: Colors.PRIMARY,
    width: SCREEN_WIDTH * 0.4,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  cartText: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 17,
    textAlign: "center",
    color: Colors.WHITE,
    textTransform:'uppercase'
  },
});
