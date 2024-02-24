import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { isValidGSTIN, isValidName, isValidPincode } from '../../../utils/InputFieldValidators';
import EditProfileCustomInput from './EditProfileCustomInput';
import { Address, GstIcon, Pincode, Shop } from '../../../assets';
import { globalStyles } from '../../../styles/globalStyles';
import TitlesHeader from './TitlesHeader';

type ShopDetailsProps = {
  shopName: string,
  setShopName: React.Dispatch<React.SetStateAction<string>>,
  setShopNameError: boolean,
  shopNameError: boolean,
  address: string,
  setAddress: React.Dispatch<React.SetStateAction<string>>,
  pincode: string,
  setPincode: React.Dispatch<React.SetStateAction<string>>,
  setPincodeError: boolean,
  gstin: string,
  setGstin: React.Dispatch<React.SetStateAction<string>>,
  gstinError: boolean,
  setGstinError: boolean,
  pincodeError: boolean
}

const ShopDetails = (props: ShopDetailsProps) => {
  const {
    shopName,
    setShopName,
    shopNameError,
    setShopNameError,
    address,
    setAddress,
    pincode,
    setPincode,
    setPincodeError,
    gstin,
    setGstin,
    gstinError,
    setGstinError,
    pincodeError
  } = props
  const shopDetailsInputData = [
    {
      placeholder: 'Shop Name',
      leftIconComponent: (
        <Image
          source={Shop}
          style={{ width: 30, height: 50 }}
          resizeMode='center'
        />
      ),
      value: shopName,
      onChangeText: (shopName) => {
        setShopName(shopName);
        setShopNameError(!isValidName(shopName));
      },
      error: shopNameError,
      errorMessage: 'Please enter a valid shop name',
    },
    {
      placeholder: 'Address',
      leftIconComponent: (
        <Image
          source={Address}
          style={{ width: 30, height: 50 }}
          resizeMode='center'
        />
      ),
      value: address,
      onChangeText: (address) => {
        setAddress(address);
      },
    },
    {
      placeholder: 'Pincode',
      leftIconComponent: (
        <Image
          source={Pincode}
          style={{ width: 30, height: 50 }}
          resizeMode='center'
        />
      ),
      value: pincode,
      onChangeText: (pincode) => {
        setPincode(pincode);
        setPincodeError(!isValidPincode(pincode));
      },
      error: pincodeError,
      errorMessage: 'Please enter a valid pincode',
    },
    {
      placeholder: 'Gstin',
      leftIconComponent: (
        <Image
          source={GstIcon}
          style={{ width: 30, height: 50 }}
          resizeMode='center'
        />
      ),
      value: gstin,
      onChangeText: (gstin) => {
        setGstin(gstin);
        setGstinError(!isValidGSTIN(gstin));
      },
      error: gstinError,
      errorMessage: 'Please enter a valid GSTIN number',
    },
  ];


  return (
    <View style={[globalStyles.customContainer]}>
      <TitlesHeader text='Shop Details' style={{ marginLeft: 10 }} />
      {shopDetailsInputData.map((item, index) => {
        return (
          <EditProfileCustomInput
            key={index}
            placeholder={item.placeholder}
            leftIconComponent={item.leftIconComponent}
            showConnectingLine={index < shopDetailsInputData.length - 1}
            value={item.value}
            onChangeText={item.onChangeText}
            errorText={item.error && item.errorMessage}
          />
        );
      })}
    </View>
  )
}

export default ShopDetails

const styles = StyleSheet.create({})