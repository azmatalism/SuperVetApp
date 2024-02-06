import { View, Text, StyleSheet, ImageBackground, ScrollView, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import { COLORS, Styles, dataOne } from '../../constants/Theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialIcons'
import DrawerHeader from '../../components/DrawerHeader'
import { IMGS } from '../../constants'



export default function MyTanents() {

  return (
    <View style={Styles.container}>
      <DrawerHeader headerLogo={true} downIcon={true} />
      <ImageBackground source={IMGS.background}style={Styles.container}>
        <ScrollView >
          <ImageBackground source={IMGS.drawerHeader}
            style={Styles.featuredImg} >
            <View style={{ flexDirection: "row", backgroundColor: COLORS.popular, justifyContent: "center", alignItems: "center", height: 30, width: "40%", alignSelf: "flex-end", top: 70, right: 20 }}>
              <Ionicons name="camera" size={20} color="black" />
              <Text style={[Styles.SecondTitle, {color:COLORS.black, marginLeft:5}]}>EDIT COVER PHOTO</Text>
            </View>
          </ImageBackground>
          <View style={{ flexDirection: "row", alignItems: "center", }}>
            <Image source={IMGS.drawerIcons}
              style={{ width: 80, height: 80, borderRadius: 80 / 2, bottom: 40, left: 15 }} />
            <View style={{ left: 20 }}>
              <Text style={Styles.SecondTitle}>Wasaam Qazi</Text>
              <Text style={Styles.published}>Joined May 25 2022</Text>
            </View>
          </View>
          {
            dataOne.map((item, index) =>
              <View key={index} style={{ marginTop: 20 }}>
                <View style={{ flexDirection: "row", paddingLeft: 20, paddingRight: 20, }}>
                  <Image source={item.faeturedImage} resizeMode="contain" />
                  <View style={{ marginLeft: 20 }}>
                    <Text style={Styles.SecondTitle}>{item.artist}</Text>
                    <Text style={Styles.SecondTitle}>{item.title}</Text>
                    <Text style={[Styles.published, Styles.dotColor]}>Rental : <Text style={[Styles.published, {color:COLORS.white}]}>{item.rental}</Text></Text>
                    <Text style={[Styles.published, Styles.redColor]}>Rent : <Text style={[Styles.published, {color:COLORS.white}]}>{item.rent}</Text></Text>
                    <Text style={[Styles.published, {color:COLORS.white}]}>Duration :</Text>
                    <Text style={Styles.date}>{item.duration}</Text>
                  </View>
                </View>
                <View style={styles.btnView}>
                  <TouchableOpacity activeOpacity={0.4}
                    onPress={() => console.warn("Clicked")}>
                      <Icons name="delete" size={30} color="white" />
                  </TouchableOpacity>
                </View>
                <View style={Styles.seperator}/>
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