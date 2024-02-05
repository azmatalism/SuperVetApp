import React from "react";
import { SafeAreaView, FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View, } from "react-native"
import { Styles, dataOne } from "../../constants/Theme";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import { ROUTES } from "../../constants";

function Discover() {
  const navigation = useNavigation();
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
                <Text style={[Styles.headingTitle, Styles.dotColor]}>Discioer<Text style={Styles.headingTitle}> Series</Text></Text>
                <Text style={Styles.description}>Now Read Most Popular!</Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        </ScrollView>
        <FlatList
          data={dataOne}
          renderItem={({ item }) =>
            <View >
              <View style={{ flexDirection: "row", margin: 20 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate(ROUTES.MOST_DISCOVER)}
                  activeOpacity={0.6}>
                  <Image source={item.discoverImage} resizeMode="contain" />
                </TouchableOpacity>
                <View style={{ marginLeft: 40, marginRight: 20, justifyContent: "center" }}>
                  <Text style={Styles.SecondTitle}>{item.title}</Text>
                  <Text style={Styles.published}>{item.book}</Text>
                </View>
              </View>
              <View style={Styles.seperator} />
            </View>
          } />
      </ImageBackground>
    </SafeAreaView >
  )
}


export default Discover;