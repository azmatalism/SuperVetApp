import React from 'react'
import { SafeAreaView, ImageBackground, ScrollView, Text, View, Image } from 'react-native'
import { COLORS, Styles, dataOne } from "../../constants/Theme";
import Liner from '../../common/Liner';
import CharactersGlobal from '../../components/CharactersGlobal';
import DrawerHeader from '../../common/DrawerHeader';
import FeaturedSuperGlobal from '../../components/FeaturedSuperGlobal';


function CharacterProfile({navigation, route }) {
    
    return (
        <SafeAreaView style={Styles.container}>
            <DrawerHeader search={true} downIcon={true} />
            <ImageBackground
                source={require("../../assets/images/background.png")}
                style={Styles.container}
                resizeMode="cover">
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ImageBackground source={require("../../assets/images/charBG.png")}
                        style={Styles.featuredImg} >
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <View style={{ width: "60%" }}>
                                <Text style={Styles.headingTitle}>{route.params.dataOne.characterName}</Text>
                                <Text style={Styles.description}>{route.params.dataOne.characterDescription}, </Text>
                            </View>
                            <Image source={route.params.dataOne.characterImage} style={{ marginLeft: 20, marginRight: 20, }} />
                        </View>
                    </ImageBackground>
                    <Liner linerColor={COLORS.dot} headingTitle={"DR.BRUCE ABILITIES"} />
                    <View style={{ marginTop: 10, marginLeft: 15, marginRight: "30%", marginBottom: "5%" }}>
                        <Text style={Styles.headingTitle}>Super hearing</Text>
                        <View style={{ width: "20%", borderColor: COLORS.dot, borderWidth: 1 }} />
                        <Text style={Styles.description}>Super Vet Is a Metaverse Concept game where the super heroes recue the animals with their unique super power given by anonymus . Bruce is one of them his super ability are SUPER HEARING. Bruce here voices of diffirent kind of animals and reach them to rescue them.</Text>
                    </View>
                    <FeaturedSuperGlobal linerColor={COLORS.dot} headingTitle={"DR.BRUCE COMICS"} comesoon={true} seeAll={true} onPress={()=> navigation.navigate("UnlimitedAllNew", { data: dataOne})}/>
                    <FeaturedSuperGlobal linerColor={COLORS.dot} headingTitle={"DR.BRUCE VIDEO COMICS"} play={true} seeAll={true} onPress={()=> navigation.navigate("UnlimitedAllNew", { data: dataOne})}/>
                    <CharactersGlobal linerColor={COLORS.dot} headingTitle={"CONNECTIONS"} />
                    <CharactersGlobal linerColor={COLORS.dot} headingTitle={"ENEMIES"} flatlist={true} />
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default CharacterProfile;