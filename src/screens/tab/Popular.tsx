import React, {} from "react";
import { FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View, Alert} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles, dataThree } from "../../constants/Theme";
import LinearGradient from "react-native-linear-gradient";

// const data = [
//   {
//     image: require("../../assets/images/p1.png"),
//     name: "Dr.X :",
//     title: "The Out Sider (2022)",
//     date: "May 25, 2022",
//     writer: "Wasaam, Azmat, Ali, Usman",
//     rating: "(222)",
//   },
//   {
//     image: require("../../assets/images/p2.png"),
//     name: "Sister Nina :",
//     title: "The Saviour (2021)",
//     date: "Jul 16, 2021",
//     writer: "Azmat, Ali, Usman, Wasaam",
//     rating: "(94)",
//   },
//   {
//     image: require("../../assets/images/p3.png"),
//     name: "Dr.Wolf :",
//     title: "The Jungle Boy (2020)",
//     date: "Mar 20, 2020",
//     writer: " Ali, Usman",
//     rating: "(150)",
//   },
//   {
//     image: require("../../assets/images/p4.png"),
//     name: "Dr.Psycho :",
//     title: "Who I Psycho ? (2022)",
//     date: "Sep 16, 2022",
//     writer: "Ali, Usman, Wasaam, Azmat",
//     rating: "(88)",
//   },
//   {
//     image: require("../../assets/images/p5.png"),
//     name: "Dr.X :",
//     title: "The Out Sider (2022)",
//     date: "Dec 10, 2022",
//     writer: "Azmat, Ali, Usman",
//     rating: "(100)",
//   },
//   {
//     image: require("../../assets/images/p1.png"),
//     name: "Dr.X :",
//     title: "The Out Sider (2022)",
//     date: "May 25, 2022",
//     writer: "Wasaam, Azmat, Ali, Usman",
//     rating: "(222)",
//   },
//   {
//     image: require("../../assets/images/p2.png"),
//     name: "Sister Nina :",
//     title: "The Saviour (2021)",
//     date: "Jul 16, 2021",
//     writer: "Azmat, Ali, Usman, Wasaam",
//     rating: "(94)",
//   },


// ]

function ShowAlert() {
  Alert.alert('CONNECT METAMASK', 'You must be connect wallet before you can download this book.', [
    {
      text: 'CANCEL',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'METAMASK', onPress: () => console.warn('METAMASK Pressed') },
  ],
    { cancelable: false }
  );
}


function Popular() {

  return (
    <SafeAreaView style={Styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={Styles.container}>
        <ScrollView >
          <ImageBackground source={require("../../assets/images/featuredSlider.png")}
            style={Styles.featuredImg} resizeMode="cover">
            <LinearGradient
              style={Styles.featuredImg}
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 95)']}>
              <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                <Text style={Styles.description}>High on <Text style={Styles.dotColor}>Demand</Text></Text>
                <Text style={Styles.headingTitle}> most<Text style={Styles.dotColor}> Popular</Text></Text>
                <Text style={Styles.description}>Now Read Most Popular!</Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        </ScrollView>
        <FlatList
          data={dataThree}
          renderItem={({ item }) =>
            <View style={{ marginTop: 20, }}>
              <View style={{ flexDirection: "row", paddingLeft: 20, paddingRight: 20, }}>
                <View>
                  <Image source={item.image} resizeMode="contain" />
                </View>
                <View style={{ marginLeft: 20, flex: 1 }}>
                  <Text style={Styles.SecondTitle}>{item.name}</Text>
                  <Text style={Styles.SecondTitle}>{item.title}</Text>
                  <Text style={Styles.published}>Published:</Text>
                  <Text style={[Styles.date, Styles.whiteColor]}>{item.date}</Text>
                  <Text style={Styles.published}>Writer:</Text>
                  <Text style={[Styles.date, Styles.whiteColor]}>{item.writer}</Text>
                  <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
                    <Image source={require("../../assets/images/rating.png")} />
                    <Text style={[Styles.date, Styles.whiteColor]}>   {item.rating}</Text>

                    <View style={Styles.btnVie}>
                      <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => console.warn("Clicked")}>
                        <View style={Styles.borderBtn}>
                          <Text style={[Styles.date, Styles.whiteColor]}>500 svet</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={ShowAlert}>
                        <View style={Styles.SimpleBtn}>
                          <Text style={[Styles.date, Styles.whiteColor]}>BUY NOW</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View style={Styles.seperator} />
            </View>
          } />
      </ImageBackground>
    </SafeAreaView >
  )
}


export default Popular;
