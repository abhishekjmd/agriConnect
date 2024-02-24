import {
  Image,
  KeyboardAvoidingView,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input';
import Button from '../../components/Button';
import { SCREEN_WIDTH } from '../../utils/Theme';
import { globalStyles } from '../../styles/globalStyles';

const SignInScreen = () => {
  const phoneInput = useRef(null);
  const [number, setNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSubmission = async () => {
    setLoading(true);
    navigation.navigate('OtpVerificationScreen');
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={'height'}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/logins/login.gif')}
            style={styles.image}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.title}>Signup / Login</Text>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/whatsApp.png')}
            />
            <Text style={styles.whatsAppText}>Enter Your Whatsapp Number</Text>
          </View>
          <PhoneInput
            containerStyle={{ width: '100%', marginTop: 12 }}
            ref={phoneInput}
            defaultValue={number}
            defaultCode='IN'
            layout='first'
            onChangeText={(text) => setNumber(text)}
            onChangeFormattedText={(text) => setFormattedValue(text)}
            withShadow
            autoFocus
          />
          <Button
            title='Send OTP'
            style={[
              globalStyles.buttonSubmit,
              {
                width: '100%',
              },
            ]}
            loading={loading}
            onPress={() => handleSubmission()}
            textStyle={globalStyles.btnText}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    flex: 0.8,
    justifyContent: 'center',
  },
  image: {
    width: SCREEN_WIDTH - 32,
    height: '80%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#31A05F',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  whatsAppText: { fontSize: 13, fontWeight: '500', marginLeft: 4 },
  privacyText: {
    color: '#00000099',
    fontWeight: '600',
    fontSize: 13,
    textAlign: 'center',
  },
  privacyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
});
