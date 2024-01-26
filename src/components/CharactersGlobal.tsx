import React from "react"
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { Styles, dataOne, dataTwo, } from "../constants/Theme";
import Liner from "../common/Liner";

function CharactersGlobal({ navigation, linerColor, headingTitle, flatlist, seeAll, team, onPress }) {
    const renderItem = ({ item }) => (
        <View style={{ marginTop: 10, }}>
            <TouchableOpacity activeOpacity={0.7}
                onPress={() => navigation.navigate("CharacterProfile", { dataOne: item }, { dataTwo: item })}>
                <Image source={team ? item.teamImage : item.characterImage} style={Styles.characterImages} />
            </TouchableOpacity>
            <Text style={[Styles.title, { marginLeft: 10, marginTop: 5, textAlign: "center" }]}>{team ? item.teamName : item.characterName}</Text>
        </View>
    );
    return (
        <View style={[Styles.container, { marginBottom: 6 }]}>
            <Liner linerColor={linerColor} seeAll={seeAll} headingTitle={headingTitle} onPress={onPress} />
            {
                flatlist ?
                    <FlatList
                        data={dataTwo}
                        renderItem={renderItem}
                        horizontal={true} />
                    :
                    <FlatList
                        data={dataOne}
                        renderItem={renderItem}
                        horizontal={true} />
            }
        </View>
    )
}

export default CharactersGlobal;