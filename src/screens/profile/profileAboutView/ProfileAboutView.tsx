import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileAboutView = () => {
  return (
    <View>
      <Text>ProfileAboutView</Text>
    </View>
  )
}

export default ProfileAboutView

const styles = StyleSheet.create({})
// import {
//   Text,
//   View,
//   Linking,
//   ActivityIndicator,
//   Image,
//   Pressable,
// } from 'react-native';
// import { useState, useContext } from 'react';
// import Colors from '../../../utils/Colors';
// import { Hyperlink } from 'react-native-hyperlink';
// import { ScrollView } from 'react-native-gesture-handler';
// import {
//   EditImage,
//   Email_BW,
//   Facebook_BW,
//   Instagram_BW,
//   Location_BW,
//   Logo_NoBg,
//   Phone_BW,
//   Website_BW,
// } from '../../../assets';
// import { ExtractUsername } from '../../../utils/ExtractUserName';
// import Styles from './Styles';

// const ProfileAboutView = ({
//   userIdProp,
//   userData,
//   loading,
//   setIsSnackVisible,
// }) => {
  
//   return (
//     <ScrollView showsVerticalScrollIndicator={false}>
//       <View style={Styles.containerMain}>
//         {loading ? (
//           <ActivityIndicator size='large' color={Colors.PRIMARY} />
//         ) : (
//           <View>
//             {userData?.primaryMobileNumber && (
//               <View style={Styles.infoContainerMain}>
//                 <Image
//                   source={Phone_BW}
//                   style={Styles.infoIcons}
//                   accessible={true}
//                   accessibilityLabel='Phone'
//                 />
//                 <View style={Styles.infoContainer}>
//                   <Text style={Styles.infoLabel}>:</Text>

//                   <Text style={Styles.infoLabel}>
//                     {userData?.primaryMobileNumber}
//                   </Text>
//                 </View>
//               </View>
//             )}
//             {userData?.primaryEmailId && (
//               <View style={Styles.infoContainerMain}>
//                 <Image
//                   source={Email_BW}
//                   style={Styles.infoIcons}
//                   accessible={true}
//                   accessibilityLabel='Email'
//                 />

//                 <View style={Styles.infoContainer}>
//                   <Text style={Styles.infoLabel}>:</Text>

//                   <Text style={Styles.infoLabel}>
//                     {userData?.primaryEmailId}
//                   </Text>
//                 </View>
//               </View>
//             )}
//             {(userData?.address?.pincode.toString() ||
//               userData?.address?.address) && (
//               <View style={Styles.infoContainerMain}>
//                 <Image
//                   source={Location_BW}
//                   style={Styles.infoIcons}
//                   accessible={true}
//                   accessibilityLabel='Location'
//                 />

//                 <View style={Styles.infoContainer}>
//                   <Text style={Styles.infoLabel}>:</Text>

//                   <Text style={Styles.infoLabel}>
//                     {userData.address?.address} , {userData?.address?.pincode.toString()}
//                   </Text>
//                 </View>
//               </View>
//             )}

//             {userData?.contactDetails?.facebookLink && (
//               <View style={Styles.infoContainerMain}>
//                 <Image
//                   source={Facebook_BW}
//                   style={Styles.infoIcons}
//                   accessible={true}
//                   accessibilityLabel='Facebook'
//                 />
//                 <View style={Styles.infoContainer}>
//                   <Text style={Styles.infoLabel}>:</Text>

//                   <Text
//                     style={Styles.infoLabel}
//                     onPress={() =>
//                       Linking.openURL(userData?.contactDetails?.facebookLink)
//                     }
//                   >
//                     {ExtractUsername(
//                       'facebook',
//                       userData?.contactDetails?.facebookLink
//                     )}
//                   </Text>
//                 </View>
//               </View>
//             )}
//             {userData?.contactDetails?.instagramLink && (
//               <View style={Styles.infoContainerMain}>
//                 <Image
//                   source={Instagram_BW}
//                   style={Styles.infoIcons}
//                   accessible={true}
//                   accessibilityLabel='Instagram'
//                 />
//                 <Hyperlink
//                   linkDefault={true}
//                   linkStyle={{ color: Colors.LINK_BLUE }}
//                 >
//                   <View style={Styles.infoContainer}>
//                     <Text style={Styles.infoLabel}>:</Text>

//                     <Text
//                       style={Styles.infoLabel}
//                       onPress={() =>
//                         Linking.openURL(userData?.contactDetails?.instagramLink)
//                       }
//                     >
//                       {ExtractUsername(
//                         'instagram',
//                         userData?.contactDetails?.instagramLink
//                       )}
//                     </Text>
//                   </View>
//                 </Hyperlink>
//               </View>
//             )}
//             {userData?.contactDetails?.website && (
//               <View style={Styles.infoContainerMain}>
//                 <Image
//                   source={Website_BW}
//                   style={Styles.infoIcons}
//                   accessible={true}
//                   accessibilityLabel='Website'
//                 />
//                 <Hyperlink linkDefault={true}>
//                   <View style={Styles.infoContainer}>
//                     <Text style={Styles.infoLabel}>:</Text>
//                     <Text
//                       style={Styles.infoLabel}
//                       numberOfLines={3}
//                       ellipsizeMode={'tail'}
//                     >
//                       {userData?.contactDetails?.website}
//                     </Text>
//                   </View>
//                 </Hyperlink>
//               </View>
//             )}
//           </View>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// export default ProfileAboutView;
