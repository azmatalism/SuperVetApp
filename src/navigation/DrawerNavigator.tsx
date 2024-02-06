import React from 'react'
import {StyleSheet,} from 'react-native'
import { COLORS,  CONSTANT } from '../constants/Theme';
import { ROUTES } from '../constants';
import { ArchivedBook, MyComics, MyTanents, WishList } from '../screens/screens';
import CustomDrawer from './CustomDrawer';
import TabNavigator from './TabNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/Entypo'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import Icon5 from 'react-native-vector-icons/FontAwesome6'

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
                <Icon1 name="home" size={22} color={COLORS.white} />
              )
            }}
            component={TabNavigator} />
          <Drawers.Screen name={ROUTES.MY_COMICS}
            options={{
              drawerActiveTintColor: COLORS.dot,
              drawerInactiveTintColor: COLORS.white,
              drawerIcon: () => (
                <Icon2 name="book" size={22} color={COLORS.white} />
              )
            }}
            component={MyComics}
          />
          <Drawers.Screen name={ROUTES.MY_TANENTS}
            options={{
              drawerActiveTintColor: COLORS.dot,
              drawerInactiveTintColor: COLORS.white,
              drawerIcon: () => (
                <Icon5 name="handshake-simple" size={22} color={COLORS.white} />
              )
            }}
            component={MyTanents} />
          <Drawers.Screen name={ROUTES.ARCHIVED_BOOK}
            options={{
              drawerActiveTintColor: COLORS.dot,
              drawerInactiveTintColor: COLORS.white,
              drawerIcon: () => (
                <Icon3 name="open-book" size={22} color={COLORS.white} />
              )
            }}
            component={ArchivedBook} />
          <Drawers.Screen name={ROUTES.WISH_LIST}
            options={{
              drawerActiveTintColor: COLORS.dot,
              drawerInactiveTintColor: COLORS.white,
              drawerIcon: () => (
                <Icon4 name="format-list-bulleted-add" size={22} color={COLORS.white} />
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