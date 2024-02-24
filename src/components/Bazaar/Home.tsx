import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import NyakulBazaar from "./NyakulBazaar";
import DailyUpdates from "../../screens/feed/DailyUpdates";
import Colors from "../../utils/Colors";
import { SCREEN_WIDTH } from "../../utils/Theme";

const Home = () => {
  const [categoriesIndex, setCategoriesIndex] = useState(0);

  // Todo: need to use Tab Navigator to switch between the two screens
  const tabCategories = [
    { name: 'AgriConnect Bazaar', onPress: () => { } },
    { name: 'Community', onPress: () => { } },
  ];

  return (
    <View style={styles.container}>
      <View style={{paddingTop: 20}}>
        <View style={styles.categoryContainer}>
          {tabCategories.map((item, index) => (
            <TouchableOpacity
              style={[styles.tabRow, categoriesIndex === index && styles.tabSelectedRow]}
              key={index}
              onPress={() => {
                setCategoriesIndex(index), item.onPress;
              }}>
              <Text
                style={[
                  styles.categoryText,
                  categoriesIndex === index && styles.categoryTextSelected,
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {categoriesIndex === 0 && <NyakulBazaar />}
      {categoriesIndex === 1 && <DailyUpdates />}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_SILVER,
    paddingBottom: 2
  },
  categoryContainer: {
    width: SCREEN_WIDTH * 0.90,
    height: 50,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    marginBottom: 15,
    alignSelf: 'center'
  },
  categoryText: {
    fontSize: 14,
    color: Colors.BLACK,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 19,
  },
  categoryTextSelected: {
    backgroundColor: Colors.PRIMARY,
    textAlign: 'center',
    color: Colors.WHITE,
  },
  tabRow: {
    width: SCREEN_WIDTH / 2 - 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabSelectedRow: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 25,
  },
})

export default Home;