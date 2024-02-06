import { SafeAreaView, Image, ImageBackground, ScrollView, Text, View, } from 'react-native'
import React from 'react'
import DrawerHeader from '../../components/DrawerHeader'
import { COLORS, Styles, dataOne } from '../../constants/Theme'
import Liner from '../../components/Liner'
import { FlatList } from 'react-native'
import { IMGS } from '../../constants'

const MostDiscover = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <DrawerHeader downIcon={true} />
            <ImageBackground source={IMGS.background} style={Styles.container}>
                <ScrollView>
                    <Image source={IMGS.discoverhead} style={{ width: "100%" }} resizeMode="cover" />
                    <View>
                        <Text style={[Styles.SecondTitle, { marginHorizontal: 20, }]}>Super Vet : The First Show</Text>
                        <Text style={[Styles.description, { marginHorizontal: 20, }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius pulvinar tincidunt faucibus eu amet. Praesent praesent purus magnis viverra. Ultrices enim, nisl mattis quis habitasse semper auctor. Iaculis ut neque iaculis odio. A nascetur et gravida aenean id condimentum
                            sed eget.</Text>
                    </View>
                    <Liner linerColor={COLORS.dot} headingTitle={"EVENT READING ORDER"} />

                    <FlatList
                        data={dataOne}
                        numColumns={2}
                        renderItem={({ item }) =>
                            <View style={{ marginVertical: 10, }}>
                                <Image source={item.faeturedImage} style={{ height: 200, width: 200 }} resizeMode="contain" />
                                <View style={{ marginHorizontal: 28 }}>
                                    <Text style={[Styles.title, { width: "100%" }]}>{item.title}</Text>
                                    <Text style={Styles.name}>{item.name}</Text>
                                    <Text style={Styles.price}>{item.price}</Text>
                                </View>
                            </View>
                        } />
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default MostDiscover;