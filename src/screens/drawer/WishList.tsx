import React from 'react'
import { View, Text, StyleSheet, ImageBackground, FlatList, Image,  } from 'react-native'
import { COLORS, Styles } from '../../constants/Theme'
import DrawerHeader from '../../common/DrawerHeader'

const data = [
  {
    image: require("../../assets/images/p1.png"),
    name: "Dr.X :",
    published: "(May 25,2022)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis commodo duis velit maecenas nibh.dolor sit amet, consectetur adipiscing elit...",
    time: "4d ago.",
    date: "Monday 11:30 AM - Jul 2022",
  },
  {
    image: require("../../assets/images/p2.png"),
    name: "Sister Nina :",
    published: "(May 25,2022)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis commodo duis velit maecenas nibh.dolor sit amet, consectetur adipiscing elit...",
    time: "4d ago.",
    date: "Monday 11:30 AM - Jul 2022",
  },
  {
    image: require("../../assets/images/p3.png"),
    name: "Dr.Wolf :",
    published: "(May 25,2022)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis commodo duis velit maecenas nibh.dolor sit amet, consectetur adipiscing elit...",
    time: "4d ago.",
    date: "Monday 11:30 AM - Jul 2022",
  },
  {
    image: require("../../assets/images/p4.png"),
    name: "Dr.Psycho :",
    published: "(May 25,2022)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis commodo duis velit maecenas nibh.dolor sit amet, consectetur adipiscing elit...",
    time: "4d ago.",
    date: "Monday 11:30 AM - Jul 2022",
  },
  {
    image: require("../../assets/images/p5.png"),
    name: "Dr.X :",
    published: "(May 25,2022)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis commodo duis velit maecenas nibh.dolor sit amet, consectetur adipiscing elit...",
    time: "4d ago.",
    date: "Monday 11:30 AM - Jul 2022",
  },
  {
    image: require("../../assets/images/p4.png"),
    name: "Dr.Psycho :",
    published: "(May 25,2022)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis commodo duis velit maecenas nibh.dolor sit amet, consectetur adipiscing elit...",
    time: "4d ago.",
    date: "Monday 11:30 AM - Jul 2022",
  },


]

export default function WishList() {

  return (
    <View style={Styles.container}>
      <DrawerHeader headerLogo={true} downIcon={true} />
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={Styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <View style={{  marginTop: 20, }}>
              <View style={{ flexDirection: "row", paddingLeft: 20, paddingRight: 20, }}>
                <Image source={item.image} resizeMode="contain" />
                <View style={{ marginLeft: 20 }}>
                  <Text style={Styles.SecondTitle}>{item.name}</Text>
                  <Text style={Styles.date}>Published: {item.published}</Text>
                  <Text style={Styles.longDesc}>{item.description}<Text style={[Styles.description, Styles.redColor]}>Read More</Text></Text>
                  <Text style={[Styles.date, Styles.greenColor]}>{item.time}</Text>

                </View>
              </View>
              <View style={Styles.btnView}>
                <Text style={[Styles.date,]}>{item.date}</Text>
              </View>
              <View style={{ borderColor: COLORS.seperator, borderWidth: 1,  }} />
            </View>
          } />
      </ImageBackground>

    </View>
  )
}
