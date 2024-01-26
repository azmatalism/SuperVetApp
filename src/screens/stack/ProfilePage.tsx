import { Image, ImageBackground, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { COLORS, Styles, dataOne } from '../../constants/Theme';
import DrawerHeader from '../../common/DrawerHeader';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FeaturedSuperGlobal from '../../components/FeaturedSuperGlobal';

const ProfilePage = ({ navigation }) => {
    return (
        <SafeAreaView style={Styles.container}>
            <DrawerHeader headerLogo={true} downIcon={true} />
            <ImageBackground
                source={require("../../assets/images/background.png")}
                style={Styles.container}>
                <ScrollView >
                    <ImageBackground source={require("../../assets/images/drawerHeader.png")}
                        style={Styles.featuredImg} >
                        <View style={{ flexDirection: "row", backgroundColor: COLORS.popular, justifyContent: "center", alignItems: "center", height: 30, width: "40%", alignSelf: "flex-end", top: 70, right: 20 }}>
                            <Ionicons name="camera" size={20} color="black" />
                            <Text style={[Styles.SecondTitle, { color: COLORS.black, marginLeft: 5 }]}>EDIT COVER PHOTO</Text>
                        </View>
                    </ImageBackground>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Image source={require('../../assets/images/drawerIcons.png')}
                            style={{ width: 80, height: 80, borderRadius: 80 / 2, bottom: 40, left: 15 }} />
                        <View style={{ left: 20 }}>
                            <Text style={Styles.SecondTitle}>Wasaam Qazi</Text>
                            <Text style={Styles.published}>Joined May 25 2022</Text>
                        </View>
                    </View>
                    <FeaturedSuperGlobal linerColor={COLORS.dot} headingTitle={"MY COMICS"} seeAll={true} onPress={() => navigation.navigate("UnlimitedAllNew", { data: dataOne, feat: true, btn: true })} />
                    <FeaturedSuperGlobal linerColor={COLORS.dot} headingTitle={"MY VIDEO COMICS"} play={true} seeAll={true} onPress={() => navigation.navigate("UnlimitedAllNew", { data: dataOne, feat: true, play: true, btn: true })} />
                    <FeaturedSuperGlobal images={true} linerColor={COLORS.dot} headingTitle={"MY COMICS BUNDLES"} seeAll={true} onPress={() => navigation.navigate("UnlimitedAllNew", { data: dataOne })} />
                    <FeaturedSuperGlobal linerColor={COLORS.dot} headingTitle={"MY RENTALS"} buyColor={true} />
                </ScrollView>
            </ImageBackground>

        </SafeAreaView>
    )
}

export default ProfilePage;