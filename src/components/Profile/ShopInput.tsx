import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../CustomInput';
import Feather from 'react-native-vector-icons/Feather';
import {ErrorToast} from '../../utils/ErrorToast';
import {globalStyles} from '../../styles/globalStyles';
import {Checkbox} from 'react-native-paper';
import Colors from '../../utils/Colors';
export default function ShopInput({userData, setUserData, setSelectProgress}) {
  const [gstCheck, setGstCheck] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const inputDatas = [
    {
      placeholder: 'Enter owner name',
      autoCapitalize: 'none',
      value: userData.userName,
      onChangeText: (text: string) => {
        setUserData({...userData, userName: text});
      },
      keyboardType: 'default',
      leftIcon: true,
      leftIconComponent: (
        <Image
          source={require('../../assets/icons/name.png')}
          style={globalStyles.leftIcon}
        />
      ),
      label: 'Owner Name',
      required: true,
    },
    {
      placeholder: 'Enter shop name',
      autoCapitalize: 'none',
      value: userData.shopName,
      onChangeText: (text: string) => {
        setUserData({...userData, shopName: text});
      },
      keyboardType: 'default',
      leftIcon: true,
      leftIconComponent: (
        <Image
          source={require('../../assets/icons/shop.png')}
          style={[globalStyles.leftIcon]}
        />
      ),
      label: 'Shop Name',
      required: true,
    },
    {
      placeholder: 'Enter shop address',
      autoCapitalize: 'none',
      value: userData.address?.address,
      onChangeText: (text: string) => {
        setUserData({
          ...userData,
          address: {...userData.address, address: text},
        });
      },
      keyboardType: 'default',
      leftIcon: true,
      leftIconComponent: (
        <Image
          source={require('../../assets/icons/address.png')}
          style={globalStyles.leftIcon}
        />
      ),
      label: 'Address',
      required: true,
    },
    {
      placeholder: 'Enter pincode',
      autoCapitalize: 'none',
      value: userData.address?.pincode?.toString(),
      onChangeText: (text: string) => {
        setUserData({
          ...userData,
          address: {...userData.address, pincode: parseInt(text)},
        });
      },
      keyboardType: 'phone-pad',
      leftIcon: true,
      leftIconComponent: (
        <Image
          source={require('../../assets/icons/validation.png')}
          style={globalStyles.leftIcon}
        />
      ),
      label: 'Pincode',
      required: true,
    },
    {
      placeholder: 'Enter GST number',
      autoCapitalize: 'characters',
      value: userData.gstin,
      onChangeText: (text: string) => {
        text.length == 0 ? setDisabled(false) : setDisabled(true);
        setUserData({...userData, gstin: text});
      },
      keyboardType: 'default',
      leftIcon: true,
      leftIconComponent: (
        <Image
          source={require('../../assets/icons/gst.png')}
          style={globalStyles.leftIcon}
        />
      ),
      label: 'GSTIN (optional)',
      required: false,
    },
  ];

  const handleSubmit = () => {
    if (!userData.userName)
      ErrorToast('error', 'Invalid Name', 'Please enter valid name');
    else if (!userData?.shopName || userData?.shopName?.trim() == '')
      ErrorToast('error', 'Invalid Shop Name', 'Please enter valid shop name');
    else if (!userData?.address?.pincode)
      ErrorToast('error', 'Invalid Pincode', 'Please enter valid pincode');
    else if (
      userData.gstin != undefined &&
      userData.gstin.length != 0 &&
      !gstCheck
    )
      ErrorToast('error', 'Please select GST checkbox', '');
    else {
      setSelectProgress(2);
    }
  };
  return (
    <View
      style={{
        marginTop: 26,
      }}>
      {inputDatas.map((item, index) => {
        return (
          <View key={index} style={{marginBottom: 20}}>
            <Text style={{fontSize: 14, fontWeight: '500'}}>
              {item.label}
              {item.required && <Text style={{color: 'red'}}> *</Text>}
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

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
          marginTop: -10,
        }}>
        <Checkbox
          disabled={!disabled}
          color={Colors.PRIMARY}
          status={gstCheck ? 'checked' : 'unchecked'}
          onPress={() => {
            setGstCheck(!gstCheck);
          }}
        />
        <Text style={{width: '90%', color: 'grey', fontSize: 11}}>
          By providing GSTIN, you authorize the company to verify your
          information through GST portal
        </Text>
      </View>
      <TouchableOpacity
        style={globalStyles.editIconContainer}
        onPress={handleSubmit}>
        <Feather name="arrow-right" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
