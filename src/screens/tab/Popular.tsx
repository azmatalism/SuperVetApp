import React, {} from "react";
import { FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View, Alert} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles, dataThree } from "../../constants/Theme";
import LinearGradient from "react-native-linear-gradient";
import { IMGS } from "../../constants";

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
      <ImageBackground source={IMGS.background} style={Styles.container}>
        <ScrollView >
          <ImageBackground source={IMGS.featuredSlider} style={Styles.featuredImg} resizeMode="cover">
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
                    <Image source={IMGS.rating} />
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
