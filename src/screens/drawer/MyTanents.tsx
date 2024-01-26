import { View, Text, StyleSheet, ImageBackground, ScrollView, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import { COLORS, Styles } from '../../constants/Theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialIcons'
import DrawerHeader from '../../common/DrawerHeader'

const data = [
  {
    image: require("../../assets/images/p3.png"),
    name: "Dr.Steel Shot :",
    title: "The Young Boy (2022)",
    rental: "Harry J",
    rent: "300 SVET",
    duration: "3 Days 27 June - 30 June 2022",
  },
  {
    image: require("../../assets/images/p1.png"),
    name: "Sister Nina :",
    title: "The Saviour (2021)",
    rental: "Azmat Ahmed",
    rent: "500 SVET",
    duration: "10 Days 20 Jul - 30 June 2021",
  },
  {
    image: require("../../assets/images/p2.png"),
    name: "Dr.Wolf :",
    title: "The Jungle Boy (2020)",
    rental: "Umair Yaseen",
    rent: "500 SVET",
    duration: "11 Days 25 June - 30 jul 2023",
  },
  {
    image: require("../../assets/images/p4.png"),
    name: "Dr.Psycho :",
    title: "Who I Psycho ? (2022)",
    rental: "Yaseen Ahmed",
    rent: "500 SVET",
    duration: "15 Days 25 Oct - 25 June 2020",
  },
  {
    image: require("../../assets/images/p5.png"),
    name: "Dr.X :",
    title: "The Out Sider (2022)",
    rental: "Wasaam K",
    rent: "500 SVET",
    duration: "20 Days 15 Oct - 20 June 2018",
  },


]

export default function MyTanents() {

  return (
    <View style={Styles.container}>
      <DrawerHeader headerLogo={true} downIcon={true} />
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
            data.map((item, index) =>
              <View key={index} style={{ marginTop: 20 }}>
                <View style={{ flexDirection: "row", paddingLeft: 20, paddingRight: 20, }}>
                  <Image source={item.image} resizeMode="contain" />
                  <View style={{ marginLeft: 20 }}>
                    <Text style={Styles.SecondTitle}>{item.name}</Text>
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
                <View style={{ borderColor: COLORS.seperator, borderWidth: 1, }} />
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