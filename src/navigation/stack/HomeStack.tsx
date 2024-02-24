import { createStackNavigator } from '@react-navigation/stack';
import CartView from '../../screens/getEstimate/CartView';
import ProfileView from '../../screens/main/ProfileView';
import Home from '../../components/Bazaar/Home';
import NyakulBazaar from '../../components/Bazaar/NyakulBazaar';
import ProductDetails from '../../components/Bazaar/ProductDetails';
import ProductCartView from '../../screens/bazaar/ProductCartView';

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='HomeScreen'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ProductDetails'
        component={ProductDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='NyakulBazaar'
        component={NyakulBazaar}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name='Feed' component={Feed} /> */}
      {/* <Stack.Screen name='Offer' component={Offer} /> */}
      {/* <Stack.Screen name='GetEstimate' component={GetEstimateView} /> */}
      <Stack.Screen name='CartView' component={CartView} />
      {/* <Stack.Screen name='ReviewYourOrderView' component={ReviewYourOrderView} /> */}
      {/* <Stack.Screen name='BrowseProfileView' component={BrowseProfileView} /> */}
      {/* <Stack.Screen name='EditPostView' component={EditPostView} /> */}
      {/* <Stack.Screen name='SuccessScreen' component={SuccessScreen} /> */}
      <Stack.Screen name='ProfileView' component={ProfileView} />
      {/* <Stack.Screen name='ImageViewerView' component={ImageViewerView} /> */}
      {/* <Stack.Screen name='UserRegistrationScreen' component={UserRegistrationScreen} /> */}
      <Stack.Screen name='ProductCartView' component={ProductCartView} />
      {/* <Stack.Screen name='Transport' component={Transport}/> */}
    </Stack.Navigator>
  );
}
