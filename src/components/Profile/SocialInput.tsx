import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useContext, useState } from 'react';
import CustomInput from '../CustomInput';
import Feather from 'react-native-vector-icons/Feather';
import { globalStyles } from '../../styles/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ObjectDataContext } from '../../utils/ObjectDataContext';
import { useNavigation } from '@react-navigation/native';

export default function SocialInput({ userData, setUserData, dealsIn }) {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const objectData = useContext(ObjectDataContext);
  const inputDatas = [
    {
      placeholder: 'Enter the website URL',
      autoCapitalize: 'none',
      value: userData.contactDetails?.website,
      onChangeText: (text: string) => {
        setUserData({
          ...userData,
          contactDetails: { ...userData.contactDetails, website: text },
        });
      },
      keyboardType: 'default',
      leftIcon: true,
      leftIconComponent: (
        <Image
          source={require('../../assets/icons/website.png')}
          style={[globalStyles.leftIcon]}
        />
      ),
      label: 'Website',
      required: false,
    },
    {
      placeholder: 'Enter your mail address',
      value: userData.primaryEmailId,
      onChangeText: (text: string) => {
        setUserData({ ...userData, primaryEmailId: text });
      },
      autoCapitalize: 'none',
      keyboardType: 'email-address',
      leftIcon: true,
      leftIconComponent: (
        <Image
          source={require('../../assets/icons/email.png')}
          style={globalStyles.leftIcon}
        />
      ),
      label: 'Email',
      required: false,
    },
    {
      placeholder: 'Enter your facebook profile URL',
      value: userData.contactDetails?.facebookLink,
      onChangeText: (text: string) => {
        setUserData({
          ...userData,
          contactDetails: { ...userData.contactDetails, facebookLink: text },
        });
      },
      autoCapitalize: 'none',
      keyboardType: 'default',
      leftIcon: true,
      leftIconComponent: (
        <Image
          source={require('../../assets/icons/facebook.png')}
          style={globalStyles.leftIcon}
        />
      ),
      label: 'Facebook',
      required: false,
    },
    {
      placeholder: 'Enter your instagram profile URL',
      value: userData.contactDetails?.instagramLink,
      onChangeText: (text: string) => {
        setUserData({
          ...userData,
          contactDetails: { ...userData.contactDetails, instagramLink: text },
        });
      },
      autoCapitalize: 'none',
      keyboardType: 'default',
      leftIcon: true,
      leftIconComponent: (
        <Image
          source={require('../../assets/icons/instagram.png')}
          style={globalStyles.leftIcon}
        />
      ),
      label: 'Instagram',
      required: false,
    },
  ];
  
  const handleSubmit = async () => {
    try {
      setLoading(true);
      objectData?.setIsUserAuthenticated(true);     
      AsyncStorage.setItem('userData', JSON.stringify(userData)); 
      navigation.navigate("MainBottomTabNavigator");
      setLoading(false);
    } catch (error) {
      console.log('Error saving user data: ', error);
      setLoading(false);
    }
  };
  
  return (
    <View
      style={{
        marginTop: 26,
      }}
    >
      {inputDatas.map((item, index) => {
        return (
          <View key={index} style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: '500' }}>
              {item.label}
              {item.required && <Text style={{ color: 'red' }}> *</Text>}
            </Text>
            <CustomInput
              placeholder={item.placeholder}
              autoCapitalize={item.autoCapitalize as any}
              value={item.value}
              onChangeText={item.onChangeText}
              keyboardType={item.keyboardType}
              leftIcon={item.leftIcon}
              leftIconComponent={item.leftIconComponent}
              style={globalStyles.userDataInput}
              input_style={globalStyles.userDataInputText}
            />
          </View>
        );
      })}
      <TouchableOpacity
        style={globalStyles.editIconContainer}
        onPress={loading ? null : handleSubmit}
      >
        {loading ? (
          <ActivityIndicator size='small' color='#fff' />
        ) : (
          <Feather name='arrow-right' size={28} color='#fff' />
        )}
      </TouchableOpacity>
    </View>
  );
}
