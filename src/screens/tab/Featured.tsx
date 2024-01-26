import React from "react";
import { SafeAreaView, ImageBackground, ScrollView} from "react-native"
import FeaturedSlider from "../../components/FeaturedSlider";
import { COLORS, Styles, dataOne } from "../../constants/Theme";
import FeaturedSuperGlobal from "../../components/FeaturedSuperGlobal";


function Featured({ navigation }) {
  return (
    <SafeAreaView style={Styles.container}>
      {/* Background */}
      <ImageBackground
        source={require("../../assets/images/background.png")}
        resizeMode="cover">

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Featured Slider */}
          <FeaturedSlider />

          {/* New Super Comics */}
          <FeaturedSuperGlobal linerColor={COLORS.dot} headingTitle={"NEW SUPER COMICS"} seeAll={true} newBadge={true} onPress={() => navigation.navigate("UnlimitedAllNew",{data:dataOne, feat:true, newBadge:true})} />

          {/* Super Comics */}
          <FeaturedSuperGlobal linerColor={COLORS.dot} headingTitle={"SUPER COMICS"} seeAll={true} onPress={() => navigation.navigate("UnlimitedAllNew",{data:dataOne, feat:true})} />

          {/* Video Comics */}
          <FeaturedSuperGlobal linerColor={COLORS.dot} headingTitle={"VIDEO COMICS"} newBadge={true} play={true} seeAll={true} onPress={() => navigation.navigate("UnlimitedAllNew",{data:dataOne, feat:true, play:true,newBadge:true})}  />

          {/* Dr psycho */}
          <FeaturedSuperGlobal linerColor={COLORS.dot} headingTitle={"DR WOLF"} comesoon={true} />

          {/* Dr wolf */}
          <FeaturedSuperGlobal linerColor={COLORS.dot} headingTitle={"DR WOLF"} comesoon={true} />

          {/* Rented */}
          <FeaturedSuperGlobal linerColor={COLORS.rent} headingTitle={"RENTAL COMICS"} buyColor={true} seeAll={true} onPress={() => navigation.navigate("AllRentPage")} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}


export default Featured;