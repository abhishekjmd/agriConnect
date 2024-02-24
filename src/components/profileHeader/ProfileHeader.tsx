// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Linking,
//   Alert,
// } from 'react-native';
// import {useState, useEffect, useContext} from 'react';
// import {useNavigation} from '@react-navigation/native';
// import Colors from '../../utils/Colors';
// import {SCREEN_WIDTH} from '../../utils/Theme';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import CarouselComponent from '../carousel/Carousel';
// import {DefaultCover} from '../../assets';
// import ProfileInfo from '../Profile/profileInfo/ProfileInfo';
// import ProfileBadge from '../Profile/profileBadge/ProfileBadge';
// import ProfileTabs from '../Profile/profileTabs/ProfileTabs';
// import TopHeader from '../topHeader/TopHeader';
// import {ObjectDataContext} from '../../utils/ObjectDataContext';
// import {useStores} from '../../stores';
// import {userEngagementLog} from '../../ServiceWrapper/AamServiceMonitoringApi';
// import debounce from 'debounce';
// interface HeaderProps {
//   coverPhotos: string[];
//   userData: any;
//   userIdProp: any;
//   profileImageUrl: string;
//   selectedIndex: number;
//   setSelectedIndex: (index: number) => void;
//   showEditProfile?: boolean;
//   showButton?: boolean;
//   isUserProfile: boolean;
//   postId: string;
//   postDescription: string;
// }

// const ProfileHeader = (props: HeaderProps) => {
//   const {
//     coverPhotos,
//     userData,
//     userIdProp,
//     profileImageUrl,
//     selectedIndex,
//     setSelectedIndex,
//     showEditProfile,
//     isUserProfile,
//   } = props;
//   const navigation: any = useNavigation();
//   const [id, setId] = useState(null);
//   const objectData = useContext(ObjectDataContext);
//   const {userStore} = useStores();
//   useEffect(() => {
//     fetchUserID();
//   }, []);

//   const fetchUserID = async () => {
//     const ids = JSON.parse(await AsyncStorage.getItem('userId'));
//     setId(ids);
//   };

//   const debounceAPILog = async (engagementType: string) => {
//     const buyerUserId = userStore.loggedInUser?.user.userId;
//     await userEngagementLog({
//       engagementType,
//       buyerUserId,
//       sellerUserId: userIdProp,
//       engagementItemIdentifier: props.postId,
//       description: props.postDescription,
//     });
//   };

//   const debounceDialer = debounce(() => debounceAPILog('FEED_TO_DIALER'), 5000);
//   const debounceWhatsapp = debounce(
//     () => debounceAPILog('FEED_TO_WHATSAPP'),
//     5000,
//   );

//   const sendWhatsappMessageToUser = async () => {
//     debounceWhatsapp();
//     const message =
//       'Hello, I am interested in your product. Please contact me.';
//     const phone = userData?.primaryMobileNumber;
//     const url = 'whatsapp://send?text=' + message + '&phone=' + phone;
//     Linking.openURL(url)
//       .then(data => {})
//       .catch(() => {
//         Alert.alert('Make sure WhatsApp installed on your device');
//       });
//   };

//   const sendUserContacttoDialer = async () => {
//     debounceDialer();
//     const phone = userData?.primaryMobileNumber;
//     const url = 'tel:' + phone;
//     Linking.openURL(url)
//       .then(data => {})
//       .catch(() => {
//         Alert.alert(
//           'Make sure sendUserContacttoDialer installed on your device',
//         );
//       });
//   };

//   const navigateToCoverPhoto = () => {
//     if (id == userData?.userId) navigation.navigate('CoverPhoto' as never);
//     return;
//   };

//   return (
//     <View>
//       <View
//         style={{
//           backgroundColor: '#fff',
//         }}>
//         <TopHeader
//           actionLabel="Profile"
//           contactPhone={() => {
//             sendUserContacttoDialer();
//           }}
//           contactChat={() => {
//             sendWhatsappMessageToUser();
//           }}
//         />
//         {/* {coverPhotos?.length !== 0 && coverPhotos ? (
//           // <CarouselComponent
//           //   data={coverPhotos}
//           //   onPressImage={navigateToCoverPhoto}
//           //   onPressEdit={() => objectData?.isUserBrowsing ? null : navigation.navigate('EditProfileView')}
//           // />
//         ) : showEditProfile ? (
//           <TouchableOpacity
//             style={{
//               width: SCREEN_WIDTH,
//             }}
//             onPress={() => objectData?.isUserBrowsing ? null :  navigation.navigate('CoverPhoto' as never)}
//           >
//             <Image
//               style={{
//                 height: 200,
//                 width: SCREEN_WIDTH,
//               }}
//               source={DefaultCover}
//             />
//           </TouchableOpacity>
//         ) : (
//           <View
//             style={{
//               width: SCREEN_WIDTH,
//             }}
//           >
//             <Image
//               style={{
//                 height: 200,
//                 width: SCREEN_WIDTH,
//               }}
//               source={DefaultCover}
//             />
//           </View>
//         )} */}

//         <ProfileInfo
//           isUserProfile={isUserProfile}
//           profileImageUrl={profileImageUrl}
//           userData={userData}
//           userIdProp={userIdProp}
//         />
//         <View
//           style={{
//             width: '100%',
//             borderWidth: 0.5,
//             borderColor: 'rgba(0,0,0,0.1)',
//           }}
//         />
//       </View>
//       <View
//         style={
//           !objectData?.isUserBrowsing
//             ? styles.tabContainer
//             : styles.browseTabContainer
//         }></View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderBottomWidth: 0.2,
//     borderBottomColor: Colors.GRAY,
//     height: 70,
//   },
//   tab: {
//     width: SCREEN_WIDTH / 4,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100%',
//   },
//   browseTabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     backgroundColor: 'rgb(255,255,255)',
//     borderBottomWidth: 0.2,
//     borderBottomColor: Colors.GRAY,
//     height: 70,
//   },
//   browseTab: {
//     width: SCREEN_WIDTH / 2,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 70,
//   },
//   pagination_area: {
//     position: 'absolute',
//     bottom: 10,
//     right: 10,
//     backgroundColor: Colors.PRIMARY,
//     width: 48,
//     height: 22,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 3,
//   },
//   bar_container: {
//     padding: 8,
//     position: 'absolute',
//     zIndex: 1,
//     top: 0,
//     left: 0,
//   },
//   image_container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   tag_item: {
//     backgroundColor: '#B75D92',
//     marginRight: 8,
//     paddingHorizontal: 10,
//     borderRadius: 3,
//     paddingVertical: 4,
//   },
//   tag_text: {
//     fontSize: 12,
//     color: '#fff',
//   },
//   flex_container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 14,
//   },
//   connection_text: {
//     color: '#333332',
//     fontWeight: 'bold',
//     fontSize: 14,
//     marginRight: 6,
//   },
//   container: {
//     marginTop: 20,
//     paddingHorizontal: 16,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   buisness_type_text: {
//     fontWeight: '500',
//     fontSize: 16,
//     marginLeft: 8,
//   },
//   buisness_container: {
//     marginBottom: 4,
//     flexDirection: 'row',
//   },
//   visiting_card_btn: {
//     backgroundColor: Colors.PRIMARY,
//     width: 98,
//     height: 35,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   visiting_card_text: {
//     fontWeight: '600',
//     fontSize: 12,
//     color: '#fff',
//   },
//   verifyContainer: {
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: Colors.PRIMARY,
//     width: '40%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     paddingVertical: '1%',
//     marginVertical: '2%',
//   },
//   verificationText: {
//     color: Colors.PRIMARY,
//     fontWeight: '500',
//   },
// });

// export default ProfileHeader;
