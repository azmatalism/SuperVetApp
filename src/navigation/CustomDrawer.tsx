import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CONSTANT, Styles } from '../constants/Theme';
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props: any) => {
  const navigation = useNavigation();
  return <ImageBackground
    source={require('../assets/images/background.png')}
    style={styles.drawerBackground}>
    <DrawerContentScrollView {...props}>
      <View >
        <ImageBackground
          source={require('../assets/images/drawerHeader.png')}
          style={{ height: 150, width: "100%", justifyContent: "center" }}
          resizeMode='cover'>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", }}>
            <TouchableOpacity activeOpacity={0.7}
              onPress={() => navigation.navigate("ProfilePage")}>
              <Image source={require('../assets/images/drawerIcons.png')}
                style={{ width: 70, height: 70, borderRadius: 70 / 2 }} />
            </TouchableOpacity>
            <View>
              <Text style={Styles.SecondTitle}>Wasaam Qazi</Text>
              <Text style={Styles.published}>Joined May 25 2022</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  </ImageBackground>
};
export default CustomDrawer;

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

  container: {
    flex: 1,
  },
  drawerBackground: {
    flex: 1,
    // backgroundColor:"transparent",
    resizeMode: 'cover',
    opacity: 1,
  },
  drawerHeader: {
    padding: 16,

  },

});
