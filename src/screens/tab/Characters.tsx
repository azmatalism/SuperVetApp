import React from "react";
import { SafeAreaView, ImageBackground, ScrollView, Text, View } from "react-native"
import { COLORS, Styles, dataTwo } from "../../constants/Theme";
import LinearGradient from "react-native-linear-gradient";
import FeaturedSuperGlobal from "../../components/FeaturedSuperGlobal";
import { IMGS, ROUTES } from "../../constants";


function Characters({ navigation }) {

  return (
    <SafeAreaView style={Styles.container}>
      <ImageBackground source={IMGS.background} style={Styles.container} resizeMode="cover">
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground source={IMGS.featuredSlider} style={Styles.featuredImg} resizeMode="cover">
            <LinearGradient
              style={Styles.featuredImg}
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 95)', '#53535300']}>
              <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                <Text style={Styles.description}>10 Super <Text style={Styles.dotColor}>Characters</Text></Text>
                <Text style={Styles.headingTitle}>SUPER <Text style={Styles.dotColor}>charaters</Text></Text>
                <Text style={Styles.description}>Lets Save The Animals Together !</Text>
              </View>
            </LinearGradient>
          </ImageBackground>
          <FeaturedSuperGlobal chaacterImage={true} linerColor={COLORS.dot} headingTitle={"FEATURED CHARACTERS"} />
          <FeaturedSuperGlobal chaacterImage={true} linerColor={COLORS.dot} headingTitle={"CHARACTERS LIST"} seeAll={true} onPress={() => navigation.navigate(ROUTES.CHARACTER_ALL)} />
          <FeaturedSuperGlobal chaacterImage={true} teamImage={true} linerColor={COLORS.dot} headingTitle={"TEAM LIST"} seeAll={true} onPress={() => navigation.navigate(ROUTES.CHARACTER_ALL)} />
          <FeaturedSuperGlobal chaacterImage={true} linerColor={COLORS.dot} headingTitle={"VILLAINS"} comesoon={true} seeAll={true} onPress={() => navigation.navigate(ROUTES.UNLIMITED_ALL_NEW, { data: dataTwo })} />
        </ScrollView>
      </ImageBackground>


    </SafeAreaView>
  )
}


export default Characters;