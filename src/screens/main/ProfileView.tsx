import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import { useContext, useRef, useEffect, useState, useMemo, memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ObjectDataContext } from '../../utils/ObjectDataContext';
import ProfileHeader from '../../components/profileHeader/ProfileHeader';
import Colors from '../../utils/Colors';
import ProfileAboutView from '../profile/profileAboutView/ProfileAboutView';

const ProfileView = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [selectedIndex, setSelectedIndex] = useState('About us');
  const [verticalOffset, setVerticalOffset] = useState(0);
  const objectData = useContext(ObjectDataContext);
  const ref = useRef(null);


  
  const MemoizedProfileHeader = useMemo(
    () =>
      memo(() => (
        <ProfileHeader
          userData={objectData?.userData}
          coverPhotos={objectData?.coverPhotos}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          profileImageUrl={profileImageUrl}
          showEditProfile={true}
          showButton={true}
          isUserProfile={true}
        />
      )),
    [
      selectedIndex,
      objectData?.userData,
      profileImageUrl,
      objectData?.coverPhotos,
    ]
  );

  useEffect(() => {
    const scrollToOffsetWithNullCheck = (
      ref,
      verticalOffset,
      animated = true
    ) => {
      if (ref.current) {
        ref.current.scrollToOffset({ offset: verticalOffset, animated });
      }
    };
    setTimeout(() => {
      scrollToOffsetWithNullCheck(ref, verticalOffset);
    }, 1500);
  }, [selectedIndex]);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}
      >

        <FlatList
          ref={ref}
          data={[0]}
          renderItem={({ item }) => (
            <View>
              {selectedIndex === 'About us' && (
                <>
                  <ProfileAboutView
                    userIdProp={userId}
                    userData={objectData?.userData}
                    loading={loading}
                    setIsSnackVisible={(val: boolean) => setIsSnackVisible(val)}
                  />
                </>
              )}

            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
          ListHeaderComponent={MemoizedProfileHeader}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    zIndex: 100,
  },
  circleButton: {
    borderRadius: 38,
    width: 129,
    height: 38,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
  },
  circleButtonText: {
    color: Colors.WHITE,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProfileView;
