import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DailyUpdates = () => {
  return (
    <View>
      <Text>DailyUpdates</Text>
    </View>
  )
}

export default DailyUpdates

const styles = StyleSheet.create({})
// import {
//   useCallback,
//   useState,
//   useEffect,
//   useRef,
// } from 'react';
// import {
//   View,
//   StyleSheet,
//   ActivityIndicator,
//   FlatList,
//   RefreshControl,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';
// import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/Theme';
// import Post from '../../components/feed/post/Post';
// import { PostData } from '../../types/Post';
// import Colors from '../../utils/Colors';
// import { useStores } from '../../stores';
// import { observer } from 'mobx-react-lite';

// const DailyUpdates = observer(() => {
//   const { feedStore } = useStores();
//   const likedPostsRef = useRef<Record<string, boolean>>({});
//   const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
//   const [refreshing, setRefreshing] = useState<boolean>(false);
//   const navigation = useNavigation();

//   useEffect(() => {
//     const loadData = async () => {
//       if (feedStore.dailyUpdatesData.length == 0) {
//         await feedStore.fetchDailyPostsData();
//         populateLikedPosts();
//       }
//     };
//     loadData();
//   }, [feedStore.dailyUpdatesData]);

//   const loadNewPosts = async () => {
//     feedStore.quickLoadDailyUpdates();
//   };

//   const populateLikedPosts = () => {
//     const loadLikedPosts = async () => {
//       const savedLikes = await AsyncStorage.getItem('likedPosts');
//       if (savedLikes) {
//         setLikedPosts(JSON.parse(savedLikes));
//       }
//     };
//     loadLikedPosts();
//   };

//   const toggleLike = useCallback(async (postId: string) => {
//     const currentLikedPosts = likedPostsRef.current;
//     const isLiked = !!currentLikedPosts[postId];

//     setLikedPosts((prev) => ({
//       ...prev,
//       [postId]: !prev[postId],
//     }));

//     const postIndex = feedStore.dailyUpdatesData.findIndex(post => getPostId(post) === postId);
//     if (postIndex > -1) {
//       const post = feedStore.dailyUpdatesData[postIndex];
//       const numberOfLikes = post.numberOfLikes ?? 0;
//       const newLikeCount = isLiked ? numberOfLikes - 1 : numberOfLikes + 1;
//       feedStore.updateLikeCount(postId, newLikeCount);
//     }
//   }, [feedStore.dailyUpdatesData]);

//   useEffect(() => {
//     likedPostsRef.current = likedPosts;
//     const updateLikedPosts = async () => {
//       await AsyncStorage.setItem('likedPosts', JSON.stringify(likedPosts));
//     };
//     updateLikedPosts();
//   }, [likedPosts]);

//   const handleRefresh = useCallback(async () => {
//     setRefreshing(true);
//     await feedStore.fetchDailyPostsData();
//     setRefreshing(false);
//   }, []);

//   const getPostId = (post: PostData) => {
//     return `${post.domainId}#${post.creationDateInMillis}`;
//   };

//   const postItem = useCallback(
//     ({ item }) => (
//       <Post
//         postId={getPostId(item)}
//         post={item}
//         isLiked={!!likedPosts[getPostId(item)]}
//         toggleLike={toggleLike}
//         productDetailsList={item.productDetailsList}
//         profilePhoto={item?.userProfilePhotoUrl}
//         shopName={item?.shopName}
//         browseProfile={() => {
//           navigation.navigate('BrowseProfileView', {
//             userIdProp: item?.creationDomainID?.domainId,
//             postId: item?.postType_postId,
//             postDescription: item?.description,
//           });
//         }}
//       />
//     ),
//     [likedPosts, toggleLike]
//   );

//   return (
//     <>
//       {feedStore.dailyUpdatesData.length == 0 ? (
//         <View style={styles.loading_spinner_area}>
//           <ActivityIndicator size='large' color={Colors.PRIMARY} />
//         </View>
//       ) : (
//         <>
//           <FlatList
//             data={feedStore.dailyUpdatesData}
//             keyExtractor={(item, index) => index.toString()}
//             initialNumToRender={5}
//             maxToRenderPerBatch={10}
//             removeClippedSubviews={true}
//             windowSize={7}
//             refreshControl={
//               <RefreshControl
//                 refreshing={refreshing}
//                 onRefresh={handleRefresh}
//               />
//             }
//             renderItem={postItem}
//             onEndReached={() => loadNewPosts()}
//             onEndReachedThreshold={0.8}
//           />
//         </>
//       )}
//     </>
//   );
// });

// const styles = StyleSheet.create({
//   loading_spinner_area: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: SCREEN_HEIGHT * 0.75,
//     width: SCREEN_WIDTH,
//   },
// });
// export default DailyUpdates;
