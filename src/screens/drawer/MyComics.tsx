import { View, Text, StyleSheet, ImageBackground, ScrollView, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import DrawerHeader from '../../common/DrawerHeader'
import { COLORS, Styles } from '../../constants/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';




const data = [
  {
    image: require("../../assets/images/p1.png"),
    name: "Dr.X :",
    title: "The Out Sider (2022)",
    date: "May 25, 2022",
    writer: "Wasaam, Azmat, Ali, Usman",
  },
  {
    image: require("../../assets/images/p2.png"),
    name: "Sister Nina :",
    title: "The Saviour (2021)",
    date: "Jul 16, 2021",
    writer: "Azmat, Ali, Usman, Wasaam",
  },
  {
    image: require("../../assets/images/p3.png"),
    name: "Dr.Wolf :",
    title: "The Jungle Boy (2020)",
    date: "Mar 20, 2020",
    writer: " Ali, Usman",
  },
  {
    image: require("../../assets/images/p4.png"),
    name: "Dr.Psycho :",
    title: "Who I Psycho ? (2022)",
    date: "Sep 16, 2022",
    writer: "Ali, Usman, Wasaam, Azmat",
  },
  {
    image: require("../../assets/images/p5.png"),
    name: "Dr.X :",
    title: "The Out Sider (2022)",
    date: "Dec 10, 2022",
    writer: "Azmat, Ali, Usman",
  },


]

export default function MyComics() {
  const navigation = useNavigation();

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
            data.map((item, index) =>
              <View key={index} style={{ marginTop: 20, }}>
                <View style={[Styles.margin5,{ flexDirection: "row" }]}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("MyComicsProfile")}
                    activeOpacity={0.7}>

                    <Image source={item.image} resizeMode="contain" />
                  </TouchableOpacity>
                  <View style={{ marginLeft: 20 }}>
                    <Text style={Styles.SecondTitle}>{item.name}</Text>
                    <Text style={Styles.SecondTitle}>{item.title}</Text>
                    <Text style={Styles.published}>Published:</Text>
                    <Text style={Styles.date}>{item.date}</Text>
                    <Text style={Styles.published}>Writer:</Text>
                    <Text style={Styles.date}>{item.writer}</Text>
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