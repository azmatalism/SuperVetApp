import React from 'react'
import { SafeAreaView, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View, Alert, } from 'react-native'
import { Styles } from '../../constants/Theme';
import DrawerHeader from '../../components/DrawerHeader';
import LinearGradient from 'react-native-linear-gradient';


function ShowAlert() {
    Alert.alert('CONNECT METAMASK', 'You must be connect wallet before you can download this book.', [
        {
            text: 'CANCEL',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        { text: 'METAMASK', onPress: () => console.warn('METAMASK') },
    ],
        { cancelable: false }
    );
}

function UnlimitedAllNew({ route }) {
    const data = route.params?.data ?? null
    const feat = route.params?.feat ?? null
    const play = route.params?.play ?? null
    const btn = route.params?.btn ?? null
    const newBadge = route.params?.newBadge ?? null
    return (
        <SafeAreaView style={Styles.container}>
            <DrawerHeader search={true} downIcon={true} />
            <ImageBackground
                source={require("../../assets/images/background.png")}
                style={Styles.container}>
                <ScrollView >
                    <ImageBackground source={require("../../assets/images/featuredSlider.png")}
                        style={Styles.featuredImg} resizeMode="cover">
                        <LinearGradient
                            style={Styles.featuredImg}
                            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 95)', '#53535300']}>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={Styles.description}>High on <Text style={Styles.dotColor}>Demand</Text></Text>
                                <Text style={[Styles.headingTitle, Styles.dotColor]}>unlimited <Text style={Styles.headingTitle}>new bundles</Text></Text>
                                <Text style={Styles.description}>Now Read Most Popular!</Text>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                    {
                        data.map((item, index) =>
                            <View key={index}>
                                <View style={{ flexDirection: "row", margin: 20 }}>
                                    <View>
                                        <Image source={feat ? item.faeturedImage : item.superImage} resizeMode="contain" />
                                        {
                                            play ? <Image source={item.play} style={{ position: 'absolute', alignSelf: 'center', top: 60 }} />
                                                : null
                                        }
                                        {
                                            newBadge ? <View style={Styles.newBadge}><Text style={Styles.description}>NEW</Text></View> : null
                                        }
                                    </View>
                                    <View style={{ marginLeft: 20, flex: 1 }}>
                                        <Text style={Styles.SecondTitle}>{item.characterName}</Text>
                                        <Text style={Styles.SecondTitle}>{item.title}</Text>
                                        <Text style={Styles.published}>Published:</Text>
                                        <Text style={[Styles.date, Styles.whiteColor]}>{item.published}</Text>
                                        <Text style={Styles.published}>Writer:</Text>
                                        <Text style={[Styles.date, Styles.whiteColor]}>{item.name}</Text>
                                        <View style={Styles.btnVie}>
                                            {
                                                btn ? null :
                                                    <TouchableOpacity
                                                        activeOpacity={0.4}
                                                        onPress={() => console.warn("Clicked")}>
                                                        <View style={Styles.borderBtn}>
                                                            <Text style={[Styles.date, Styles.whiteColor]}>500 svet</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                            }
                                            <TouchableOpacity
                                                activeOpacity={0.4}
                                                onPress={ShowAlert}>
                                                <View style={Styles.SimpleBtn}>
                                                    <Text style={[Styles.date, Styles.whiteColor, Styles.uppercase]}>Buy Now</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={Styles.seperator} />
                            </View>
                        )
                    }
                </ScrollView>
            </ImageBackground>
        </SafeAreaView >
    )
}


export default UnlimitedAllNew;
