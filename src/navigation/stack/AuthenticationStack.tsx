import { createStackNavigator } from '@react-navigation/stack'
import SignInScreen from '../../screens/authentication/SignInScreen';
import OtpVerificationScreen from '../../screens/authentication/OtpVerificationScreen';
import SplashScreen from '../../screens/authentication/SplashScreen';
import UserRegistrationScreen from '../../screens/authentication/UserDetailsInputView';
import MainBottomTabNavigator from '../tab/MainBottomTab';

const AuthenticationStack = () => {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator 
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen 
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen 
        name="SignInScreen"
        component={SignInScreen}
      />
      <Stack.Screen 
        name="OtpVerificationScreen"
        component={OtpVerificationScreen}
      />
      <Stack.Screen
        name="UserRegistrationScreen"
        component={UserRegistrationScreen}
      />
      <Stack.Screen
        name="MainBottomTabNavigator"
        component={MainBottomTabNavigator}
      />
    </Stack.Navigator>
  )
}

export default AuthenticationStack