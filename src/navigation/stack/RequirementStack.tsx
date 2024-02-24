import { createStackNavigator } from "@react-navigation/stack";
import Header from '../../components/Requirement/createRequirements/Header';
import RequirementsView from "../../screens/requirements/RequirementsView";
import ProductDescription from "../../screens/requirements/createRequirement/ProductDescription";
import CustomizeYourPreferences from "../../screens/requirements/createRequirement/CustomizeYourPreferences";
import ProfileView from "../../screens/main/ProfileView";

const Stack = createStackNavigator();

export function RequirementStack() {
  return (
    <Stack.Navigator
      initialRouteName='RequirementsView'
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Stack.Screen
        name='RequirementsView'
        component={RequirementsView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ProductDescription'
        component={ProductDescription}
      />
      <Stack.Screen
        name='CustomizeYourPreferences'
        component={CustomizeYourPreferences}
      />
      <Stack.Screen
        name='ProfileView'
        component={ProfileView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
