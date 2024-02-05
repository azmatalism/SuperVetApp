import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants';
import {
  AllRentPage, BundlePurshacePage, CharacterAll, CharacterProfile, Download, MostDiscover,
  Notification, ProfilePage, PurchaseDownload, PurshacePage, UnlimitedAllNew
} from '../screens/screens';
import DrawerNavigator from './DrawerNavigator';


const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME} screenOptions={{ headerShown: false, }}>
      <Stack.Screen name={ROUTES.HOME} component={DrawerNavigator} 
      //Hide All Bottom Tab Screen Header
      options={{headerShown:false}}
      />
      {/* PurchaseDownload screen for AllRentPage and & BundlePurchacePage */}
      <Stack.Screen name={ROUTES.PURCHASE_DOWNLOAD} component={PurchaseDownload} />
      {/* Notification and Download screen for TabBar Header */}
      <Stack.Screen name={ROUTES.NOTIFICATION} component={Notification} />
      <Stack.Screen name={ROUTES.DOWNLOAD} component={Download} />
      {/* Drawer Navigator */}
      <Stack.Screen name={ROUTES.PROFILE_PAGE} component={ProfilePage} />
      {/* PurshacePage and AllRentPage screen for Featured */}
      <Stack.Screen name={ROUTES.PURSHACE_PAGE} component={PurshacePage} />
      <Stack.Screen name={ROUTES.ALL_RENT_PAGE} component={AllRentPage} />
      {/* BundlePurchacePage and UnlimitedAllNew screen for SuperUnlimited */}
      <Stack.Screen name={ROUTES.BUNDLE_PURSHACE_PAGE} component={BundlePurshacePage} />
      <Stack.Screen name={ROUTES.UNLIMITED_ALL_NEW} component={UnlimitedAllNew} />
      {/* CharacterProfile screen for Character */}
      <Stack.Screen name={ROUTES.CHARACTER_PROFILE} component={CharacterProfile} />
      <Stack.Screen name={ROUTES.CHARACTER_ALL} component={CharacterAll} />
      {/* MostDiscover screen for Discover screen */}
      <Stack.Screen name={ROUTES.MOST_DISCOVER} component={MostDiscover} />
    </Stack.Navigator>
  )
}

export default StackNavigator;

