import React from 'react'
import { SafeAreaView, ImageBackground, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import DrawerHeader from '../../components/DrawerHeader'
import { COLORS, Styles } from '../../constants/Theme'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import FeaturedSuperGlobal from '../../components/FeaturedSuperGlobal'
import { IMGS, ROUTES } from '../../constants'

function BundlePurshacePage({ navigation, route }) {
  // const navigation = useNavigation();
  return (
    <SafeAreaView style={Styles.container}>
      <DrawerHeader headerLogo={true} downIcon={true} />
      <ImageBackground source={IMGS.background} style={Styles.container} resizeMode="cover">
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground source={route.params.dataOne.faeturedImage} style={{ height: 250, width: '100%' }} resizeMode="cover">
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
                      {/************** Button **************/}
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, marginTop: 10 }}>
                      <TouchableOpacity activeOpacity={0.4} style={Styles.borderBtn}
                        onPress={() => console.warn("500 svet")}>
                        <Text style={[Styles.date, Styles.whiteColor]}>{"500 svet"}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.4} style={Styles.SimpleBtn}
                        onPress={() => navigation.navigate(ROUTES.START_DOWNLOAD)}>
                        <Text style={[Styles.date, Styles.whiteColor]}>{"BUY NOW"}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.4} style={[Styles.SimpleBtn, { backgroundColor: COLORS.dot }]}
                        onPress={() => console.warn("METAMASK")}>
                        <Text style={[Styles.date, Styles.whiteColor]}>{"METAMASK"}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

              </View>
            </LinearGradient>
          </ImageBackground>
          <FeaturedSuperGlobal images={true} linerColor={COLORS.dot} headingTitle={"MORE DR.LVY"} comesoon={true} />
          <FeaturedSuperGlobal images={true} linerColor={COLORS.dot} headingTitle={"RECOMENDED VOL"} />
          <FeaturedSuperGlobal images={true} linerColor={COLORS.dot} headingTitle={"MORE DR.PSYCHO"}  />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default BundlePurshacePage;