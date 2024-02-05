import React from 'react'
import { Image, StyleSheet,} from 'react-native'
import { COLORS,  CONSTANT } from '../constants/Theme';
import { ROUTES } from '../constants';
import { ArchivedBook, MyComics, MyTanents, WishList } from '../screens/screens';
import CustomDrawer from './CustomDrawer';
import TabNavigator from './TabNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawers = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawers.Navigator drawerContent={(props) => <CustomDrawer {...props} />}
          screenOptions={{
            headerShown: false,
            drawerStyle: styles.drawerStyle,
            drawerItemStyle: styles.drawerItemStyles,
            drawerLabelStyle: styles.drawerLabelStyles,
          }}>
          <Drawers.Screen name={ROUTES.HOME_DRAWER}
            options={{
              headerShown:false,
              drawerActiveTintColor: COLORS.dot,
              drawerInactiveTintColor: COLORS.white,
              drawerIcon: () => (
                <Image source={require('../assets/images/drawer2.png')} style={{ height: 30, width: 30 }} resizeMode='contain' />
              )
            }}
            component={TabNavigator} />
          <Drawers.Screen name={ROUTES.MY_COMICS}
            options={{
              drawerActiveTintColor: COLORS.dot,
              drawerInactiveTintColor: COLORS.white,
              drawerIcon: () => (
                <Image source={require('../assets/images/drawer3.png')} style={{ height: 30, width: 30 }} resizeMode='contain' />
              )
            }}
            component={MyComics}
          />
          <Drawers.Screen name={ROUTES.MY_TANENTS}
            options={{
              drawerActiveTintColor: COLORS.dot,
              drawerInactiveTintColor: COLORS.white,
              drawerIcon: () => (
                <Image source={require('../assets/images/drawer4.png')} style={{ height: 30, width: 30 }} resizeMode='contain' />
              )
            }}
            component={MyTanents} />
          <Drawers.Screen name={ROUTES.ARCHIVED_BOOK}
            options={{
              drawerActiveTintColor: COLORS.dot,
              drawerInactiveTintColor: COLORS.white,
              drawerIcon: () => (
                <Image source={require('../assets/images/drawer6.png')} style={{ height: 30, width: 30 }} resizeMode='contain' />
              )
            }}
            component={ArchivedBook} />
          <Drawers.Screen name={ROUTES.WISH_LIST}
            options={{
              drawerActiveTintColor: COLORS.dot,
              drawerInactiveTintColor: COLORS.white,
              drawerIcon: () => (
                <Image source={require('../assets/images/drawer7.png')} style={{ height: 30, width: 30 }} resizeMode='contain' />
              )
            }}
            component={WishList} />
        </Drawers.Navigator>
  )
}

export default DrawerNavigator;

const styles = StyleSheet.create({
  drawerStyle: {
    height: "80%"
  },
  drawerItemStyles: {
    borderRadius: CONSTANT.borderRadius,
  },
  drawerLabelStyles: {
    fontSize: CONSTANT.textFontSize,
    marginHorizontal: -CONSTANT.SPACING,
  },

});