import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AboutUsStack = () => {
  return (
    <View>
      <Text>AboutUsStack</Text>
    </View>
  )
}

export default AboutUsStack

const styles = StyleSheet.create({})

// import { createStackNavigator } from "@react-navigation/stack";
// import BankDetails from '../../screens/drawer/BankDetails';
// // import CompanyDetails from '../../screens/drawer/CompanyDetails';
// // import DrawerAboutUs from '../../screens/drawer/DrawerAboutUs';
// import TermsAndConditionsView from "../../screens/drawer/TermsAndConditionsView";
// import PrivacyPolicyView from "../../screens/drawer/PrivacyPolicyView";

// const Stack = createStackNavigator();

// export function AboutUsStack() {
//   return (
//     <Stack.Navigator initialRouteName='DrawerAboutUs'>
//       <Stack.Screen
//         name='DrawerAboutUs'
//         component={DrawerAboutUs}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name='BankDetails'
//         component={BankDetails}
//         options={{ headerShown: false }}
//       />
//       {/* <Stack.Screen
//         name='CompanyDetails'
//         component={CompanyDetails}
//         options={{ headerShown: false }}
//       /> */}
//       <Stack.Screen
//         name='TermsAndConditions'
//         component={TermsAndConditionsView}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name='PrivacyPolicy'
//         component={PrivacyPolicyView}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }