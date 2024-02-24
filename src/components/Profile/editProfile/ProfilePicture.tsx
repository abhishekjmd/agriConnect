import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { CameraClick, InactiveCamera } from '../../../assets';
import { globalStyles } from '../../../styles/globalStyles';
import { ImageLoader } from './ImageLoader';
import Colors from '../../../utils/Colors';
import TitlesHeader from './TitlesHeader';

type ProfilePictureProps = {
  type: string
  imageSettingLoading: boolean,
  handleProfilePhoto: () => void,
  profileImageUrl: string | null,
  profilePhotoVisible: boolean | string,
  pickImage: (type: string, aspect?: [number, number]) => Promise<void>;
}

const ProfilePicture = (props: ProfilePictureProps) => {
  const {
    type,
    pickImage,
    profileImageUrl,
    handleProfilePhoto,
    profilePhotoVisible,
    imageSettingLoading,
  } = props

  const ImageUploadModal = ({
    onPress,
    text,
  }: {
    onPress: () => void;
    text: string;
  }) => {
    return (
      <View style={styles.upload_image_modal}>
        <TouchableOpacity onPress={onPress}>
          <Text>{text} </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={[globalStyles.customContainer]}>
      <TitlesHeader text='Profile Picture' style={{ marginLeft: 10 }} />
      <TouchableOpacity
        style={styles.profile_image_container}
        onPress={handleProfilePhoto}
      >
        {imageSettingLoading && type === 'PROFILE' ? (
          <ImageLoader />
        ) : (
          <>
            <Image
              style={profileImageUrl && styles.profile_image}
              source={
                profileImageUrl
                  ? { uri: profileImageUrl }
                  : CameraClick
                // : require('../../assets/icons/picture.png')
              }
              defaultSource={InactiveCamera}
            />
          </>
        )}
      </TouchableOpacity>
      {/* PROFILE PHOTO */}
      {profilePhotoVisible && (
        <ImageUploadModal
          onPress={() => pickImage('PROFILE')}
          text={
            imageSettingLoading && type === 'PROFILE'
              ? 'Updating Profile Photo'
              : profileImageUrl === null
                ? 'Add Profile Photo'
                : 'Edit Profile Photo'
          }
        />
      )}
    </View>
  )
}

export default ProfilePicture

const styles = StyleSheet.create({
  upload_image_modal: {
    position: 'absolute',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    top: 50,
    left: 40,
    flex: 1,
    gap: 12,
    zIndex: 2,
  },
  profile_image_container: {
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },
  profile_image: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
})
