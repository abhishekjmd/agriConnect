import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/Button";
import Colors from "../../utils/Colors";
import { SCREEN_WIDTH } from "../../utils/Theme";

const images = [
  {
    key: 1,
    image: require("../../assets/splash2.png"),
    title: "AgriConnect: Direct Link to Markets",
    description:
      "AgriConnect bridges the gap for 120 million Indian farmers, enabling direct sales to businesses and retailers, ensuring fair prices and market access.",
  },
  {
    key: 2,
    image: require("../../assets/splash3.png"),
    title: "Farm to Market: Simplified",
    description:
      "Simplify the farm-to-market journey with our app, connecting Indian farmers directly with buyers, enhancing income and reducing middlemen",
  },
  {
    key: 3,
    image: require("../../assets/splash4.png"),
    title: "Harvesting Prosperity: Farmer First",
    description:
      "Empower farmers with direct market access, fostering sustainable farming and equitable growth across India's agricultural sector.",
  },
];

export default function SplashScreen({ navigation }) {
  const [selected, setSelected] = useState(0);

  const navigateToSignIn = () => {
    console.log("button press");
    navigation.replace("SignInScreen");
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.WHITE,
        }}
      >
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            const viewSize = event.nativeEvent.layoutMeasurement.width;
            const contentOffset = event.nativeEvent.contentOffset.x;
            const selectedIndex = Math.floor(contentOffset / viewSize);
            setSelected(selectedIndex);
          }}
        >
          {images.map((image) => (
            <View
              key={image.key}
              style={{
                width: SCREEN_WIDTH,
              }}
            >
              <Image source={image.image} style={styles.image} />
              <Text style={styles.title}>{image.title}</Text>
              <Text style={styles.description}>{image.description}</Text>
            </View>
          ))}
        </ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 15,
          }}
        >
          <View style={styles.pagination_container}>
            {images.map((image, index) => (
              <View
                key={image.key}
                style={[
                  styles.pagination,
                  {
                    backgroundColor:
                      selected === index ? Colors.PRIMARY : Colors.SHADOW_GRAY,
                  },
                ]}
              />
            ))}
          </View>

          <Button
            title="GET STARTED"
            style={styles.button}
            textStyle={{
              color: Colors.WHITE,
              fontSize: 18,
              fontWeight: "700",
            }}
            onPress={() => navigateToSignIn()}
          />

          <TouchableOpacity onPress={navigateToSignIn}>
            <Text style={styles.alreadyHaveAccount}>
              I ALREADY HAVE AN ACCOUNT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.BLACK,
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.DARK_GRAY,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  button: {
    height: 48,
    width: SCREEN_WIDTH - 40,
    borderRadius: 5,
    marginBottom: 16,
  },
  image: {
    width: SCREEN_WIDTH - 32,
    height: 420,
    resizeMode: "contain",
    alignSelf: "center",
  },
  alreadyHaveAccount: {
    color: Colors.PRIMARY,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  pagination_container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  pagination: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
