import { Image, ImageBackground, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { COLORS, Styles, dataOne } from '../../constants/Theme';
import DrawerHeader from '../../components/DrawerHeader';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FeaturedSuperGlobal from '../../components/FeaturedSuperGlobal';
import { IMGS, ROUTES } from '../../constants';

const ProfilePage = ({ navigation }) => {
    return (
        <SafeAreaView style={Styles.container}>
            <DrawerHeader headerLogo={true} downIcon={true} />
            <ImageBackground source={IMGS.background} style={Styles.container}>
                <ScrollView >
                    <ImageBackground source={IMGS.drawerHeader} style={Styles.featuredImg} >
                        <View style={{ flexDirection: "row", backgroundColor: COLORS.popular, justifyContent: "center", alignItems: "center", height: 30, width: "40%", alignSelf: "flex-end", top: 70, right: 20 }}>
                            <Ionicons name="camera" size={20} color="black" />
                            <Text style={[Styles.SecondTitle, { color: COLORS.black, marginLeft: 5 }]}>EDIT COVER PHOTO</Text>
                        </View>
                    </ImageBackground>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Image source={IMGS.drawerIcons}
                            style={{ width: 80, height: 80, borderRadius: 80 / 2, bottom: 40, left: 15 }} />
                        <View style={{ left: 20 }}>
                            <Text style={Styles.SecondTitle}>Wasaam Qazi</Text>
                            <Text style={Styles.published}>Joined May 25 2022</Text>
                        </View>
                    </View>
                    <FeaturedSuperGlobal linerColor={COLORS.dot} headingTitle={"MY COMICS"} seeAll={true} onPress={() => navigation.navigate(ROUTES.UNLIMITED_ALL_NEW, { data: dataOne, feat: true, btn: true })} />
                    <FeaturedSuperGlobal linerColor={COLORS.dot} headingTitle={"MY VIDEO COMICS"} play={true} seeAll={true} onPress={() => navigation.navigate(ROUTES.UNLIMITED_ALL_NEW, { data: dataOne, feat: true, play: true, btn: true })} />
                    <FeaturedSuperGlobal images={true} linerColor={COLORS.dot} headingTitle={"MY COMICS BUNDLES"} seeAll={true} onPress={() => navigation.navigate(ROUTES.UNLIMITED_ALL_NEW, { data: dataOne })} />
                    <FeaturedSuperGlobal linerColor={COLORS.dot} headingTitle={"MY RENTALS"} buyColor={true} />
                </ScrollView>
            </ImageBackground>

        </SafeAreaView>
    )
}

export default ProfilePage;