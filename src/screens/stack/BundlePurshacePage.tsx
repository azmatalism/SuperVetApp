import React from 'react'
import { SafeAreaView, ImageBackground, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import DrawerHeader from '../../common/DrawerHeader'
import { COLORS, Styles } from '../../constants/Theme'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import FeaturedSuperGlobal from '../../components/FeaturedSuperGlobal'

function BundlePurshacePage({ route }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Styles.container}>
      <DrawerHeader headerLogo={true} downIcon={true} />
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={Styles.container}
        resizeMode="cover">
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground source={route.params.dataOne.faeturedImage} style={{ height: 250, width: '100%' }}
            resizeMode="cover">
              <LinearGradient
              style={{ height: 250, width: '100%' }}
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.99)']}>
            <View style={{ marginTop: 20, }}>
              <View style={{ flexDirection: "row", paddingLeft: 20, paddingRight: 20, }}>
                <View>
                  <Image source={route.params.dataOne.superImage} resizeMode="contain" />
                </View>
                <View style={{ marginLeft: 20 }}>
                  <Text style={Styles.SecondTitle}>{route.params.dataOne.title} (2022)</Text>
                  <Text style={Styles.published}>Published:</Text>
                  <Text style={[Styles.date, Styles.whiteColor]}>{route.params.dataOne.published}</Text>
                  <Text style={Styles.published}>Writer:</Text>
                  <Text style={[Styles.date, Styles.whiteColor]}>{route.params.dataOne.name}</Text>
                  <Text style={Styles.published}>Cover Artist:</Text>
                  <Text style={[Styles.date, Styles.whiteColor]}>{route.params.dataOne.artist}</Text>
                  <Text style={[Styles.date, Styles.whiteColor, { textAlign: "justify", width: "25%", }]}>{route.params.dataOne.description}
                    <Text style={Styles.redColor}>Read More</Text></Text>
                  <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>

                    <View style={Styles.btnVie}>
                      <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => console.warn("Clicked")}>
                        <View style={Styles.borderBtn}>
                          <Text style={[Styles.date,Styles.whiteColor]}>500 svet</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => console.warn("Download Start")}>
                        <View style={Styles.SimpleBtn}>
                          <Text style={[Styles.date,Styles.whiteColor]}>BUY NOW</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => console.warn("Clicked")}>
                        <View style={[Styles.SimpleBtn, { backgroundColor: COLORS.dot }]}>
                          <Text style={[Styles.date,Styles.whiteColor]}>METAMASK</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                  </View>

                </View>
              </View>

            </View>
            </LinearGradient>
          </ImageBackground>
          <FeaturedSuperGlobal  images={true} linerColor={COLORS.dot} headingTitle={"MORE DR.LVY"} comesoon={true} />
          <FeaturedSuperGlobal images={true} linerColor={COLORS.dot} headingTitle={"RECOMENDED VOL"} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default BundlePurshacePage;