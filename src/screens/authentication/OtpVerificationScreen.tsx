import { useState } from 'react';
import { Text, StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import Colors from '../../utils/Colors';
import { globalStyles } from '../../styles/globalStyles';
import Button from '../../components/Button';
import { SCREEN_WIDTH } from '../../utils/Theme';
import { useNavigation } from '@react-navigation/native';

const OtpVerificationScreen = () => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  
  const handleSubmission = async () => {
    setLoading(true);
    navigation.navigate('UserRegistrationScreen')
    setLoading(false);
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/logins/verification.gif')}
            style={styles.image}
          />
        </View>
        <Text style={styles.otpText}>
          Enter OTP
        </Text>
        <Text style={styles.text}>
          Enter the verification code we have sent
        </Text>
        <OTPTextView
          tintColor={Colors.PRIMARY}
          handleTextChange={(text) => setOtp(text)}
          textInputStyle={styles.textInput}
          inputCount={4}
          keyboardType='numeric'
          containerStyle={{ marginBottom: 25, width: SCREEN_WIDTH * 0.85 }}
        />
        <Button
          title='Login'
          onPress={() => handleSubmission()}
          loading={loading}
          style={globalStyles.buttonSubmit}
          textStyle={globalStyles.btnText}
        />
      </View>
    </KeyboardAvoidingView>
  );
};


export default OtpVerificationScreen;
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 16,
  },
  textInput: {
    width: SCREEN_WIDTH / 4 - 40,
    backgroundColor: Colors.LIGHT_PINK_BG,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginRight: 5,
  },
  image: {
    width: SCREEN_WIDTH - 32,
    height: '80%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  imageContainer: {
    alignItems: 'center',
    flex: 0.8,
    justifyContent: 'center',
  },
  otpText: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: Colors.DARK_GRAY
  },
  text: {
    fontWeight: '500',
    marginBottom: 25,
    color: Colors.GREYISH,
    fontSize: 13,
  }
});
