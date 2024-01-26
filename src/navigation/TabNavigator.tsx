import React from 'react'
import {} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomTabBar from './CustomTabBar';
import SuperUnlimited from '../screens/tab/SuperUnlimited';
import Characters from '../screens/tab/Characters';
import Popular from '../screens/tab/Popular';
import Discover from '../screens/tab/Discover';
import StackNavigator from './StackNavigator';


const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
        <Tab.Screen name="Featured" component={StackNavigator} />
        <Tab.Screen name="Super Unlimited" component={SuperUnlimited} />
        <Tab.Screen name="Characters" component={Characters} />
        <Tab.Screen name="Popular" component={Popular} />
        <Tab.Screen name="Discover" component={Discover} />
        {/* <Tab.Screen name="cover" options={{tabBarShowLabel:false}} component={StackNavigator} /> */}

        {/* Add screens for other tabs */}
      </Tab.Navigator>
  )
}