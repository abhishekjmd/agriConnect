import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import Avatar from '../avatar/Avatar';
import Styles from './Styles';
import userStore from '../../../mobx/stores/UserStore';
import { capitalizeNames } from '../../../utils/CapitalizeNames';
import { GstVerified } from '../../../assets';
import { ObjectDataContext } from '../../../utils/ObjectDataContext';
import ProfileCompletion from './ProfileCompletion';

const ProfileInfo = ({ profileImageUrl, userData, userIdProp, isUserProfile }) => {
  const objectData = useContext(ObjectDataContext);

  return (
    <View>
      <View style={Styles.infoContainer}>
        <Avatar
          avatarURI={profileImageUrl}
          userData={userData}
          userIdProp={userIdProp}
        />
        {isUserProfile ?
          <ProfileCompletion userData={userData} />
          : false
        }
      </View>
      <View style={{ paddingVertical: 2, paddingHorizontal: '6%', marginTop: 10 }}>
        <View style={Styles.shopNameContainer}>
          <Text style={Styles.shop_text}>
            {objectData?.isUserBrowsing
              ? capitalizeNames(userData?.shopName)
              : capitalizeNames(userStore?.userData?.shopName)}
          </Text>
        </View>
        <View style={Styles.shopInfoMain}>
          <>
            <Text style={Styles.ownerLabel}>Owner :</Text>
          </>
          <>
            <Text style={Styles.shop_owner}>
              {objectData?.isUserBrowsing
                ? capitalizeNames(userData?.userName)
                : capitalizeNames(userStore?.userData?.userName)}
            </Text>
          </>
        </View>
        {!objectData?.isUserBrowsing &&
          userStore?.userData?.gstin?.length > 0 ? (
          <View style={Styles.gstContainer}>
            <Text style={Styles.shopGst}>
              #: {userStore?.userData?.gstin}
            </Text>
            {userStore?.userData?.gstVerified ? (
              <Image source={GstVerified} style={Styles.gstBadge} />
            ) : null}
          </View>
        ) : null}

        {objectData?.isUserBrowsing && userData?.gstin?.length > 0 ? (
          <View style={Styles.gstContainer}>
            <Text style={Styles.shopGst}>#: {userData?.gstin}</Text>
            {userData?.gstVerified ? (
              <Image source={GstVerified} style={Styles.gstBadge} />
            ) : null}
          </View>
        ) : null}
      </View>
      <View style={Styles.descriptionContainer}>
        <Text style={Styles.descriptionText}>
          {objectData?.isUserBrowsing
            ? userData?.description
            : userStore?.userData?.description}
        </Text>
      </View>
    </View>
  );
};
export default ProfileInfo;
