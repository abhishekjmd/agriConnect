import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { qrLinkApi } from '../../ServiceWrapper/AamService';
import { ErrorToast } from '../../utils/ErrorToast';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { Divider } from 'react-native-paper'

export default function LinkQrCode({ navigation }) {
  const [qrCode, setQrCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLinkQrCode = async () => {
    const userId = JSON.parse(await AsyncStorage.getItem('userId'));
    const bodyData = {
      userId: userId,
      qrCode: qrCode,
    };
    setLoading(true);
    const res: any = await qrLinkApi(bodyData);
    if (res.error) {
      setLoading(false);
      ErrorToast('error', 'Error', 'Error while linking the QR code');
    } else {
      ErrorToast('success', 'Success', 'Qr Code Linked Successfully');
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
        <Text style={styles.heading}>Link Qr Code</Text>
        </View>
        <Divider style={styles.divider}/>
      <View style={{paddingHorizontal: 20, marginTop: 30}}>
      <TextInput
        placeholder="Link Qr Code"
        style={styles.input}
        placeholderTextColor={'#121212'}
        value={qrCode}
        onChangeText={(text) => setQrCode(text)}
      />
      <Button
        title="Link"
        onPress={() => handleLinkQrCode()}
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
