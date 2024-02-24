import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import ProfileDrawer from "../drawer/ProfileDrawer";
import Colors from "../../utils/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
// import { SearchStack } from "../stack/SearchStack";
import { HomeStack } from "../stack/HomeStack";
// import { RequirementStack } from "../stack/RequirementStack";

const BottomTab = createBottomTabNavigator();

const MainBottomTabNavigator = () => {

  return (
    <>
      <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation, route }) => ({
          tabBarStyle: {
            height: 60,
            backgroundColor: 'white',
          },
          headerShown: false,
          tabBarActiveTintColor: '#31A05F',
          tabBarInactiveTintColor: Colors.FADED_SEA,
          tabBarLabelStyle: {
            marginBottom: 5,
          },
          tabBarIconStyle: {
            marginTop: 10,
          },
        })}
      >
        <BottomTab.Screen
          name={"Profile"}
          component={ProfileDrawer}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={
                  require('../../assets/icons/bottomTabIcons/person.png')
                }
                style={styles.imageIcon}
              />
            ),
            unmountOnBlur: true,
          }}
        />

        {/* <BottomTab.Screen
          name='Search'
          component={SearchStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name='search'
                color={focused ? Colors.PRIMARY : Colors.FADED_SEA}
                size={28}
                style={styles.iconsStyles}
              />
            ),
            unmountOnBlur: true,
          }}
        /> */}

        {/* <BottomTab.Screen
          name='Home'
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={
                  require('../../assets/icons/bottomTabIcons/home.png')
                }
                style={styles.imageIcon}
              />
            ),
          }}
        />
 */}
        {/* <BottomTab.Screen
          name='Requirements'
          component={RequirementStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={
                  require('../../assets/icons/bottomTabIcons/contract-edit.png')
                }
                style={styles.requirementsIcon}
              />
            ),
          }}
        />
 */}
      </BottomTab.Navigator>
    </>
  )
}

export default MainBottomTabNavigator;

const styles = StyleSheet.create({
  imageIcon: {
    height: 32,
    width: 32,
    resizeMode: 'contain',

  },
  requirementsIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  iconsStyles: {
    marginRight: 2,
  },
});
