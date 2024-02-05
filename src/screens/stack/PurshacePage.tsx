import React from 'react'
import { SafeAreaView, ImageBackground, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import DrawerHeader from '../../components/DrawerHeader'
import { COLORS, Styles, dataOne } from '../../constants/Theme'
import LinearGradient from 'react-native-linear-gradient'
import FeaturedSuperGlobal from '../../components/FeaturedSuperGlobal'
import { ROUTES } from '../../constants'

function PurshacePage({ route, navigation }) { 
  // const {dataOne,dataTwo}=route.params
  // const navigation = useNavigation();
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
                    <Image source={route.params.dataOne.faeturedImage} resizeMode="contain" />
                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text style={Styles.SecondTitle}>{route.params.dataOne.title} (2022)</Text>
                    <Text style={Styles.published}>Published:</Text>
                    <Text style={[Styles.date, Styles.whiteColor]}>{route.params.dataOne.published}</Text>
                    <Text style={Styles.published}>Writer:</Text>
                    <Text style={[Styles.date, Styles.whiteColor]}>{route.params.dataOne.name}</Text>
                    <Text style={Styles.published}>Cover Artist:</Text>
                    <Text style={[Styles.date, Styles.whiteColor]}>Zohaib</Text>
                    <Text style={[Styles.date, { textAlign: "justify", width: "30%", }, Styles.whiteColor]}>{route.params.dataOne.description}
                      <Text style={[Styles.description, Styles.redColor]}>Read More</Text></Text>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
                      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15, }}>
                        <TouchableOpacity
                          activeOpacity={0.4}
                          onPress={() => console.warn("Clicked")}>
                          <View style={Styles.borderBtn}>
                            <Text style={[Styles.date, Styles.whiteColor]}>500 svet</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          activeOpacity={0.4}
                          onPress={() => console.warn("Clicked")}>
                          <View style={Styles.SimpleBtn}>
                            <Text style={[Styles.date, Styles.uppercase, Styles.whiteColor]}>Buy Now</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          activeOpacity={0.4}
                          onPress={() => navigation.navigate(ROUTES.ALL_RENT_PAGE)}>
                          <View style={[Styles.SimpleBtn, { backgroundColor: COLORS.buy }]}>
                            <Text style={[Styles.date, Styles.uppercase, Styles.whiteColor]}>on RENT</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          activeOpacity={0.4}
                          onPress={() => console.warn("Clicked")}>
                          <View style={[Styles.SimpleBtn, { backgroundColor: COLORS.dot }]}>
                            <Text style={[Styles.date, Styles.uppercase, Styles.whiteColor]}>metamask</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
          <FeaturedSuperGlobal linerColor={COLORS.dot} headingTitle={"MORE DR.PSYCHO"} comesoon={true} />
          <FeaturedSuperGlobal linerColor={COLORS.dot} headingTitle={"RECOMENDED"} seeAll={true} onPress={() => navigation.navigate(ROUTES.UNLIMITED_ALL_NEW, { data: dataOne, feat: true, })} />
          <FeaturedSuperGlobal linerColor={COLORS.dot} headingTitle={"PSYCHO VIDEOS"} play={true} seeAll={true} onPress={() => navigation.navigate(ROUTES.UNLIMITED_ALL_NEW, { data: dataOne, feat: true, play: true })} />
        </ScrollView>
      </ImageBackground>

    </SafeAreaView>

  )
}

export default PurshacePage;