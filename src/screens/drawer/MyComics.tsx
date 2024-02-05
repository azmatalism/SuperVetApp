import { View, Text, StyleSheet, ImageBackground, ScrollView, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import DrawerHeader from '../../components/DrawerHeader'
import { COLORS, Styles, dataOne } from '../../constants/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ROUTES } from '../../constants';

export default function MyComics({navigation}) {

  return (
    <View style={Styles.container}>
      <DrawerHeader search={true} downIcon={true} />
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={Styles.container}>
        <ScrollView >
          <ImageBackground source={require("../../assets/images/drawerHeader.png")}
            style={Styles.featuredImg} >
            <View style={{ flexDirection: "row", backgroundColor: COLORS.popular, justifyContent: "center", alignItems: "center", height: 30, width: "40%", alignSelf: "flex-end", top: 70, right: 20 }}>
              <Ionicons name="camera" size={20} color="black" />
              <Text style={[Styles.SecondTitle, {color:COLORS.black, marginLeft:5}]}>EDIT COVER PHOTO</Text>
            </View>
          </ImageBackground>
          <View style={{ flexDirection: "row", alignItems: "center", }}>
            <Image source={require('../../assets/images/drawerIcons.png')}
              style={{ width: 80, height: 80, borderRadius: 80 / 2, bottom: 40, left: 15 }} />
            <View style={{ left: 20 }}>
              <Text style={Styles.SecondTitle}>Wasaam Qazi</Text>
              <Text style={Styles.published}>Joined May 25 2022</Text>
            </View>
          </View>
          {
            dataOne.map((item, index) =>
              <View key={index} style={{ marginTop: 20, }}>
                <View style={[Styles.margin5,{ flexDirection: "row" }]}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(ROUTES.PURSHACE_PAGE, { dataOne: item})}
                    activeOpacity={0.7}>

                    <Image source={item.faeturedImage} resizeMode="contain" />
                  </TouchableOpacity>
                  <View style={{ marginLeft: 20 }}>
                    <Text style={Styles.SecondTitle}>{item.artist}</Text>
                    <Text style={Styles.SecondTitle}>{item.title}</Text>
                    <Text style={Styles.published}>Published:</Text>
                    <Text style={Styles.date}>{item.published}</Text>
                    <Text style={Styles.published}>Writer:</Text>
                    <Text style={Styles.date}>{item.name}</Text>
                  </View>
                </View>
                <View style={styles.btnView}>
                  <TouchableOpacity
                    activeOpacity={0.4}
                    onPress={() => console.warn("Clicked")}>
                    <View style={Styles.SimpleBtn}>
                      <Text style={[Styles.date, Styles.uppercase]}>Read now</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={Styles.seperator} />
              </View>
            )
          }
        </ScrollView>
      </ImageBackground>

    </View>
  )
}
const styles = StyleSheet.create({
  btnView: {
    alignSelf: "flex-end",
    left: -40,
    bottom: 30
  },
})