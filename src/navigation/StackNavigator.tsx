import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notification from '../screens/stack/Notification';
import Featured from '../screens/tab/Featured';
import Download from '../screens/stack/Download';
import PurshacePage from '../screens/stack/PurshacePage';
import AllRentPage from '../screens/stack/AllRentPage';
import BundlePurshacePage from '../screens/stack/BundlePurshacePage';
import UnlimitedAllNew from '../screens/stack/UnlimitedAllNew';
import MostDiscover from '../screens/stack/MostDiscover';
import CharacterProfile from '../screens/stack/CharacterProfile';
import CharacterAll from '../screens/stack/CharacterAll';
import ProfilePage from '../screens/stack/ProfilePage';
import PurchaseDownload from '../common/PurchaseDownload';

const Stack = createNativeStackNavigator();

function StackNavigator () {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,}}>
      <Stack.Screen name="as" component={Featured} />
        {/* PurchaseDownload screen for AllRentPage and & BundlePurchacePage */}
        <Stack.Screen  name="PurchaseDownload" component={PurchaseDownload} />
        {/* Notification and Download screen for TabBar Header */}
        <Stack.Screen  name="Notification" component={Notification} />
        <Stack.Screen  name="Download" component={Download} />
        {/* Drawer Navigator */}
        {/* MyComicsProfile screen for MyComics */}
        {/* <Stack.Screen  name="MyComicsProfile" component={MyComicsProfile} /> */}
        <Stack.Screen  name="ProfilePage" component={ProfilePage} />
        {/* PurshacePage and AllRentPage screen for Featured */}
        <Stack.Screen  name="PurshacePage" component={PurshacePage} />
        <Stack.Screen  name="AllRentPage" component={AllRentPage} />
        {/* BundlePurchacePage and UnlimitedAllNew screen for SuperUnlimited */}
        <Stack.Screen  name="BundlePurchacePage" component={BundlePurshacePage} />
        <Stack.Screen  name="UnlimitedAllNew" component={UnlimitedAllNew} />
        {/* CharacterProfile screen for Character */}
        <Stack.Screen  name="CharacterProfile" component={CharacterProfile} />
        <Stack.Screen  name="CharacterAll" component={CharacterAll} />
        {/* MostDiscover screen for Discover screen */}
        <Stack.Screen  name="MostDiscover" component={MostDiscover} />
    </Stack.Navigator>
  )
}

export default StackNavigator;

