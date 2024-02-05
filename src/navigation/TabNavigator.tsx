import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomTabBar from './CustomTabBar';
import { ROUTES } from '../constants';
import { Characters, Discover, Featured, Popular, SuperUnlimited } from '../screens/screens';


const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name={ROUTES.HOME_TAB} component={Featured} />
      <Tab.Screen name={ROUTES.SUPER_UNLIMITED} component={SuperUnlimited} />
      <Tab.Screen name={ROUTES.CHARACTER} component={Characters} />
      <Tab.Screen name={ROUTES.POPULAR} component={Popular} />
      <Tab.Screen name={ROUTES.DISCOVER} component={Discover} />
    </Tab.Navigator>
  )
}