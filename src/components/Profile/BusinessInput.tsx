import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomInput from '../CustomInput';
import {globalStyles} from '../../styles/globalStyles';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../utils/Theme';
import {Picker} from '@react-native-picker/picker';
import {ErrorToast} from '../../utils/ErrorToast';
import {MultiSelect} from 'react-native-element-dropdown';
import Colors from '../../utils/Colors';

export default function BusinessInput({
  userData,
  setUserData,
  setSelectProgress,
  dealsIn,
  setDealsIn,
}) {
  const [phoneNumber, setPhoneNumber] = useState<any>(null);

   useEffect(() => {
     const fetchNumber = async () => {
       const number = await AsyncStorage.getItem('phoneNumber');
       if (number) {
         const parsedNumber = JSON.parse(number);
         setUserData({...userData, primaryMobileNumber: `+91 ${parsedNumber}`});
         setPhoneNumber(`+91 ${parsedNumber}`);
       }
     };

     fetchNumber();
   }, []);


  const dealsInCategories = [
    {label: 'Farmers', value: 'Farmer'},
    {label: 'Wholesalers', value: 'Wholesaler'},
    {label: 'Retailers', value: 'Retailer'},
    {label: 'Caterers', value: 'Caterer'},
    {label: 'Supermarkets', value: 'Supermarket'},
    {label: 'Restaurants', value: 'Restaurant'},
    {label: 'Food Processing Companies', value: 'Food Processing'},
  ];

  const handleSubmit = () => {
     if (userData?.description === '' || !userData?.description) {
      ErrorToast('error', 'Error', 'Please enter description');
      return;
    }
    setSelectProgress(1);
  };

  return (
    <View
      style={{
        marginTop: 26,
      }}>
      <View>
        <Text style={styles.label}>
          Phone Number
          <Text style={{color: Colors.RED}}> *</Text>
        </Text>
        <CustomInput
          placeholder="Enter Phone Number"
          editable={false}
          style={globalStyles.userDataInput}
          defaultValue={phoneNumber}
          value={phoneNumber}
          input_style={globalStyles.userDataInputText}
          leftIcon={true}
          leftIconComponent={
            <Image
              source={require('../../assets/icons/phone.png')}
              style={globalStyles.leftIcon}
            />
          }
        />
      </View>
      <View style={{paddingTop: 18}}>
        <Text style={styles.label}>
          Category
          <Text style={{color: Colors.RED}}> *</Text>
        </Text>
        <View style={{width: 400}}>
          <MultiSelect
            data={dealsInCategories}
            labelField="label"
            valueField="value"
            placeholderStyle={{
              fontSize: 15,
              justifyContent: 'center',
              marginLeft: 10,
            }}
            iconStyle={{marginRight: 10}}
            placeholder="Select category"
            containerStyle={{marginTop: 26}}
            activeColor={Colors.SECONDARY}
            searchPlaceholder="Search"
            style={styles.multiselect_input}
            value={dealsIn}
            onChange={val => {
              setDealsIn(val);
            }}
          />
        </View>
      </View>
      <View style={{paddingTop: 18}}>
        <Text style={styles.label}>
          Description
          <Text style={{color: Colors.RED}}> *</Text>
        </Text>
        <CustomInput
          placeholder="Describe about your business..."
          editable={true}
          style={[globalStyles.userDataInput, styles.descriptionInput]}
          defaultValue={userData.description}
          value={userData.description}
          input_style={globalStyles.userDataInputText}
          leftIcon={true}
          leftIconComponent={
            <Image
              source={require('../../assets/icons/content.png')}
              style={[globalStyles.leftIcon]}
            />
          }
          onChangeText={text => setUserData({...userData, description: text})}
          multiline={true}
        />
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        style={globalStyles.editIconContainer}>
        <Feather name="arrow-right" size={28} color={Colors.WHITE} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  picker_android: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.BORDER,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 12,
  },
  descriptionInput: {
    height: 82,
    alignItems: 'center',
    marginTop: 0,
    justifyContent: 'center',
  },
  multiselect_input: {
    width: SCREEN_WIDTH * 0.91,
    height: 40,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    fontSize: 13,
    borderRadius: 3,
    marginTop: 10,
    minHeight: 50,
  },
});
