import React from 'react'
import { Image, StyleSheet,} from 'react-native'
import { COLORS,  CONSTANT } from '../constants/Theme';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyComics from '../screens/drawer/MyComics';
import MyTanents from '../screens/drawer/MyTanents';
import ArchivedBook from '../screens/drawer/ArchivedBook';
import WishList from '../screens/drawer/WishList';
import TabNavigator from './TabNavigator';
import CustomDrawer from './CustomDrawer';



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

          {/* {ScreensArray.map((item, index) => {
            return (
              <Drawers.Screen key={index} name={item.route} component={item.component}
                options={{
                  item,
                  drawerIcon: ({ color, size, focused }) => (
                    <Icon type={item.type} name={item.icon} size={size} color={color} />
                  )
                }}
              />
            )
          })} */}

          {/* <Drawers.Screen name="Metamask" component={Metamask} /> */}

          <Drawers.Screen name="Home"
            options={{
              drawerActiveTintColor: COLORS.dot,
              drawerInactiveTintColor: COLORS.white,
              drawerIcon: () => (
                <Image source={require('../assets/images/drawer2.png')} style={{ height: 30, width: 30 }} resizeMode='contain' />
              )
            }}
            component={TabNavigator} />
          <Drawers.Screen name="My Comics"
            options={{
              drawerActiveTintColor: COLORS.dot,
              drawerInactiveTintColor: COLORS.white,
              drawerIcon: () => (
                <Image source={require('../assets/images/drawer3.png')} style={{ height: 30, width: 30 }} resizeMode='contain' />
              )
            }}
            component={MyComics}
          />

          <Drawers.Screen name="My Tanents"
            options={{
              drawerActiveTintColor: COLORS.dot,
              drawerInactiveTintColor: COLORS.white,
              drawerIcon: () => (
                <Image source={require('../assets/images/drawer4.png')} style={{ height: 30, width: 30 }} resizeMode='contain' />
              )
            }}
            component={MyTanents} />

          {/* <Drawers.Screen name="Svet Rewards" component={SvetRewards} /> */}

          <Drawers.Screen name="Archived Book"
            options={{
              drawerActiveTintColor: COLORS.dot,
              drawerInactiveTintColor: COLORS.white,
              drawerIcon: () => (
                <Image source={require('../assets/images/drawer6.png')} style={{ height: 30, width: 30 }} resizeMode='contain' />
              )
            }}
            component={ArchivedBook} />
          <Drawers.Screen name="Wish List"
            options={{
              drawerActiveTintColor: COLORS.dot,
              drawerInactiveTintColor: COLORS.white,
              drawerIcon: () => (
                <Image source={require('../assets/images/drawer7.png')} style={{ height: 30, width: 30 }} resizeMode='contain' />
              )
            }}
            component={WishList} />

          {/* <Drawers.Screen name="Stats" component={Stats} /> */}
          {/* <Drawers.Screen name="About" component={About} /> */}
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