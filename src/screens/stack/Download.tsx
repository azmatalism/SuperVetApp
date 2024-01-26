import React from 'react'
import { SafeAreaView, FlatList, Image, ImageBackground, Text, View, } from 'react-native'
import { Styles, dataOne } from '../../constants/Theme'
import ProgressBar from '../../common/ProgressBar'
import DrawerHeader from '../../common/DrawerHeader'

function Download() {
    return (
        <SafeAreaView style={Styles.container}>
            <DrawerHeader />
            <ImageBackground
                source={require("../../assets/images/background.png")}
                style={Styles.container}>
                <FlatList
                    data={dataOne}
                    renderItem={({ item }) =>
                        <View>
                            <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20, marginBottom: 20 }}>
                                <View>
                                    <Image source={item.faeturedImage} resizeMode="contain" />
                                </View>
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={Styles.SecondTitle}>{item.name}</Text>
                                    <ProgressBar progress={item.complete} />
                                    <Text style={Styles.published}>Published:</Text>
                                    <Text style={Styles.date}>{item.published}</Text>
                                    <Text style={Styles.published}>Writer:</Text>
                                    <Text style={Styles.date}>{item.name}</Text>
                                </View>
                            </View>
                            <View style={Styles.seperator} />
                        </View>
                    } />
            </ImageBackground>
        </SafeAreaView >
    )
}

export default Download;