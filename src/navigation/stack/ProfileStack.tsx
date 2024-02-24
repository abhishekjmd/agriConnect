import { createStackNavigator } from "@react-navigation/stack";
import ProfileView from "../../screens/main/ProfileView";
import EditProfileView from '../../screens/profile/EditProfileView';

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName='ProfileView'>
      <Stack.Screen
        name='ProfileView'
        component={ProfileView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='EditProfileView'
        component={EditProfileView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}