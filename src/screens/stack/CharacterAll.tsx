import React from 'react'
import { FlatList, Alert, Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Styles, dataOne } from '../../constants/Theme';
import DrawerHeader from '../../components/DrawerHeader';
import LinearGradient from 'react-native-linear-gradient';
import { IMGS } from '../../constants';

function ShowAlert() {
    Alert.alert('CONNECT METAMASK', 'You must be connect wallet before you can download this book.', [
        {
            text: 'CANCEL',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        { text: 'METAMASK', onPress: () => console.warn('METAMASK Pressed') },
    ],
        { cancelable: false }
    );
}

function CharacterAll() {
    return (
        <SafeAreaView style={Styles.container}>
            <DrawerHeader search={true} downIcon={true} />
            <ImageBackground source={IMGS.background} style={Styles.container}>
                <ScrollView>
                    <ImageBackground source={IMGS.charaBG} style={Styles.featuredImg} resizeMode="cover">
                        <LinearGradient
                            style={Styles.featuredImg}
                            colors={['rgba(83, 83, 83, 0) 207.79%)', 'rgba(0, 0, 0, 0.85) 35.03%']}>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={Styles.description}>List Of <Text style={Styles.dotColor}>Character</Text></Text>
                                <Text style={[Styles.headingTitle, Styles.dotColor]}>super vet <Text style={Styles.headingTitle}>Characters</Text></Text>
                                <Text style={Styles.description}>Let’s Watch And Earn Rewards..!</Text>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </ScrollView>
                <FlatList
                    data={dataOne}
                    renderItem={({ item }) =>
                        <View >
                            <View style={{ flexDirection: "row", marginHorizontal: 20, marginVertical: 20 }}>
                                <View>
                                    <Image source={item.characterImage} style={Styles.characterImages} resizeMode="contain" />
                                </View>
                                <View style={{ marginLeft: 20, flex: 1 }}>
                                    <Text style={Styles.SecondTitle}>{item.characterName}</Text>
                                    <Text style={Styles.description}>{item.characterDescription}</Text>
                                    <TouchableOpacity
                                        style={Styles.btnVie}
                                        activeOpacity={0.4}
                                        onPress={ShowAlert}>
                                        <View style={Styles.SimpleBtn}>
                                            <Text style={[Styles.date, Styles.whiteColor]}>PROFILE</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={Styles.seperator} />
                        </View>
                    } />
            </ImageBackground>

        </SafeAreaView>
    )
}

export default CharacterAll;