import React from "react"
import { Image, ImageBackground, ScrollView} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, Styles, dataOne } from "../../constants/Theme";
import FeaturedSuperGlobal from "../../components/FeaturedSuperGlobal";
import { IMGS, ROUTES } from "../../constants";


function SuperUnlimited({ navigation }) {
  return (
    <SafeAreaView style={Styles.container}>

      <ImageBackground source={IMGS.background} resizeMode="cover">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={IMGS.sunlimited} style={Styles.featuredImg}  resizeMode="cover" />

          {/* NEW SUPER bundle */}
          <FeaturedSuperGlobal images={true} linerColor={COLORS.dot} headingTitle={"NEW SUPER BUNDLE"} newBadge={true} seeAll={true} onPress={() => navigation.navigate(ROUTES.UNLIMITED_ALL_NEW, { data: dataOne, newBadge:true })} />

          {/* NEW SUPER */}
          <FeaturedSuperGlobal images={true} linerColor={COLORS.dot} headingTitle={"NEW SUPER"} seeAll={true} onPress={() => navigation.navigate(ROUTES.UNLIMITED_ALL_NEW, { data: dataOne })} />

          {/* Dr.psycho */}
          <FeaturedSuperGlobal images={true} linerColor={COLORS.dot} headingTitle={"DR PSYCHO"} comesoon={true} />

          {/* NEW SUPER */}
          <FeaturedSuperGlobal images={true} linerColor={COLORS.dot} headingTitle={"DR WOLF"} comesoon={true} />

        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}


export default SuperUnlimited;