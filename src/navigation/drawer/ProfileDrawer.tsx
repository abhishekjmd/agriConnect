import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileDrawer = () => {
  return (
    <View>
      <Text>ProfileDrawer</Text>
    </View>
  )
}

export default ProfileDrawer

const styles = StyleSheet.create({})

// import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import ProfileStack from "../stack/ProfileStack";
// import userStore from "../../mobx/stores/UserStore";
// import Colors from "../../utils/Colors";
// import Entypo from "react-native-vector-icons/Entypo";
// import { Divider } from "react-native-paper";
// import Feather from "react-native-vector-icons/Feather";
// import LinkQrCode from "../../screens/drawer/LinkQrCode";
// import Referral from "../../screens/drawer/Referral";
// import Help from "../../screens/drawer/Help";
// import LogoutView from "../../screens/drawer/LogoutView";
// import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/AntDesign';
// import { AboutUsStack } from "./AboutUsStack";
// import EditProfileView from '../../screens/profile/EditProfileView';
// import { useStores } from "../../stores";
// import Transport from "../../components/Transport/Transport";

// const Drawer = createDrawerNavigator();

// const getLoyaltyPoints = async () => {
//   const {userStore: userDataStore} = useStores();
//   userStore?.setLoyaltyPoints(userDataStore.loggedInUser?.user?.loyaltyPoints || 0);
// }

// function CustomDrawerContent(props) {
//   userStore?.isFCMregistered ? null : userStore?.registerDeviceFcm(); //register user device for notifications
//   const {navigation} = props;

//   getLoyaltyPoints();

//   const name = userStore.userData

//   return (
//     <View style={styles.container}>
//     <View style={styles.loyaltyContainer}> 
//         <Text style={styles.loyaltyText}>Loyalty Points: {userStore?.loyaltyPoints}</Text>
//       </View>
//       <View style={styles.userContainer}>
//         <TouchableOpacity style={styles.crossIcon}
//         onPress={() => navigation.closeDrawer()}>
//         <Entypo color={Colors.WHITE} size={26} name='cross' />
//         </TouchableOpacity>
//         <Text style={styles.shopNameText}>{name.shopName}</Text>  
//         <Text style={styles.ownerNameText}>{name.userName}</Text>         
//         </View>
//         <View style={{height: 30}}>
//         <Divider style={styles.divider} />   
//         </View>
//       <DrawerItemList {...props} />

//       <View style={styles.versionContainer}>
//         <Text style={{color: Colors.WHITE}}>Version : {userStore?.currentAppVersion}</Text>
//       </View>
//     </View>
//   );
// }

// function ProfileDrawer() {
//   return (
//     <Drawer.Navigator
//       initialRouteName='My Profile'
//       screenOptions={{
//         headerShown: false,
//         drawerActiveTintColor: Colors.SIDEBAR,
//         drawerLabelStyle: {
//           color: Colors.WHITE, 
//           fontSize: 16,
//           fontWeight: '600',
//           marginVertical: -10
//         },
//         drawerStyle: {
//           backgroundColor: Colors.SIDEBAR,
//         },
//       }}
//       drawerContent={(props) => <CustomDrawerContent {...props} />}
//     >
//       <Drawer.Screen
//         name='My Profile'
//         component={ProfileStack}
//         options={{ 
//           drawerLabel: 'Home', 
//           headerShown:false , 
//           drawerIcon:() => <Feather color={Colors.WHITE} size={16} name='user' />
//           }}
//       />
//       <Drawer.Screen
//         name='EditProfile'
//         component={EditProfileView}
//         options={{ 
//           drawerLabel: 'Edit Profile',
//           drawerIcon:() => <Feather color={Colors.WHITE} size={16} name='edit-2' />
//         }}
//       />
//       <Drawer.Screen
//         name='LinkQrCode'
//         component={LinkQrCode}
//         options={{ 
//           drawerLabel: 'Link Qr Code', 
//           drawerIcon:() => <Icon color={Colors.WHITE} size={16} name='qrcode' />
//         }}
//       />
//       <Drawer.Screen
//         name='Referral'
//         component={Referral}
//         options={{ 
//           drawerLabel: 'Referral',
//           drawerIcon:() => <Entypo color={Colors.WHITE} size={16} name='forward' />
//          }}
//       />
//       <Drawer.Screen
//         name='AboutUs'
//         component={AboutUsStack}
//         options={{ 
//           drawerLabel: 'About Us',
//           drawerIcon:() => <MaterialIcon color={Colors.WHITE} size={16} name='text-box-multiple-outline' />
//          }}
//       />
//       <Drawer.Screen
//         name='Help'
//         component={Help}
//         options={{ 
//           drawerLabel: 'Help',
//           drawerIcon:() => <Icon color={Colors.WHITE} size={16} name='questioncircleo' />
//         }}
//       />
//       <Drawer.Screen 
//        name='Logout' 
//        component={LogoutView} 
//         options={{ 
//           drawerLabel: 'Logout',
//           drawerIcon:() => <MaterialIcon color={Colors.WHITE} size={16} name='logout' />
//     }}/>
//     </Drawer.Navigator>
//   );
// }

// export default ProfileDrawer;

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1 
//   },
//   loyaltyContainer: { 
//     padding: 16, 
//     borderBottomWidth: 1, 
//     borderBottomColor: Colors.WHITE 
//   },
//   userContainer: {
//     width: '100%', 
//     padding: 20, 
//     paddingVertical: 10
//   },
//   loyaltyText: { 
//     fontSize: 16, 
//     color: Colors.PRIMARY 
//   },
//   crossIcon: {
//     top: 5, 
//     position: 'relative', 
//     alignItems: 'flex-end'
//   },
//   shopNameText: {
//     fontSize: 18, 
//     color: Colors.WHITE, 
//     fontWeight: '600', 
//     paddingLeft: 5,
//     marginTop: 10,
//   },
//   ownerNameText: { 
//     fontSize: 14, 
//     color: Colors.WHITE, 
//     fontWeight: '500', 
//     paddingLeft: 5
//   },
//   divider: {
//     top: 10, 
//     height: 1.5, 
//     backgroundColor: Colors.WHITE
//   },
//   versionContainer: {
//     position: 'absolute',
//     bottom: 10,
//     alignItems: 'center',
//     width: '100%',
//   }
// });
