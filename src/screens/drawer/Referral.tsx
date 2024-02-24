import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateUserApi } from '../../ServiceWrapper/AamService';
import { ErrorToast } from '../../utils/ErrorToast';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { Divider } from 'react-native-paper'
import { useStores } from '../../stores';
export default function Referral({ navigation }) {
  const [referralCode, setReferralCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { userStore } = useStores();
  const handleReferralCode = async () => {
    const res = userStore.loggedInUser;
    if (res.user) {
      res.user.referralCode = referralCode;
      updateProfile(res);
    }
  };

  const updateProfile = async (body: any) => {
    setLoading(true);
    const res = await updateUserApi(body);
    if (res.error) {
      setLoading(false);
      ErrorToast('error', 'Error', 'Invalid Referral Code');
    } else {
      ErrorToast('success', 'Success', 'Referral added Successfully');
      setLoading(false);
    }
  };


  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{paddingRight: 10}} 
          onPress={() => navigation.goBack()}>
           <Ionicons name='chevron-back' size={24} color={Colors.SECONDARY_BLACK} />
        </TouchableOpacity>
        <Text style={styles.heading}>Referral</Text>
        </View>
        <Divider style={styles.divider}/>
        <View style={{paddingHorizontal: 20, marginTop: 30}}>
      <TextInput
        placeholder="Referral"
        style={styles.input}
        placeholderTextColor={'#121212'}
        value={referralCode}
        onChangeText={(text) => setReferralCode(text)}
      />
      <Button
        title="Add Referral"
        onPress={() => handleReferralCode()}
        textStyle={{
          color: 'white',
        }}
        style={{
          marginTop: 24,
        }}
        loading={loading}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#00000066',
    borderRadius: 10,
    padding: 16,
    fontWeight: '500',
    fontSize: 12,
    color: '#121212',
  },
  header: {
    flexDirection: 'row', 
    paddingHorizontal: 15, 
    paddingVertical: 10, 
    alignSelf: 'flex-start'
},
heading: {
    color: Colors.SECONDARY_BLACK,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 19,
    paddingTop: 5
},
divider: {
    height: 1,
    color: Colors.SECONDARY_BLACK,
    marginBottom: 20
}
});
