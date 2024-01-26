import React from "react"
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { Styles, dataOne, dataTwo } from "../constants/Theme";
import Liner from "../common/Liner";
import { useNavigation } from "@react-navigation/native";

// Global Component for Featured Screen
function FeaturedSuperGlobal({ newBadge, images, chaacterImage, teamImage, seeAll, linerColor, headingTitle, play, buyColor, comesoon, onPress }) {
    const navigation = useNavigation();
    return (
        <View style={Styles.container}>
            <Liner linerColor={linerColor} seeAll={seeAll} headingTitle={headingTitle} onPress={onPress} />
            <FlatList
                data={comesoon ? dataTwo : dataOne}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item }) =>
                    <View style={{ marginTop: 10, marginBottom: 6 }}> 
                        {
                            chaacterImage ?
                                <TouchableOpacity activeOpacity={0.7}
                                    onPress={() => navigation.navigate("CharacterProfile", { dataOne: item, dataTwo: item })}>
                                    <Image source={teamImage ? item.teamImage : item.characterImage} style={Styles.characterImages} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity activeOpacity={0.7}
                                    onPress={() => navigation.navigate("PurshacePage", { dataOne: item, dataTwo: item})}>
                                    <Image source={images ? item.superImage : item.faeturedImage} style={Styles.margin5} />
                                </TouchableOpacity>
                        }



                        {/* <TouchableOpacity activeOpacity={0.7}
                            onPress={() => navigation.navigate("PurshacePage", { dataOne: item, dataTwo: item })}>
                            {
                                chaacterImage ?
                                    <Image source={teamImage ? item.teamImage : item.characterImage} style={Styles.characterImages} /> :
                                    <Image source={images ? item.superImage : item.faeturedImage} style={Styles.margin5} />


                            }
                        </TouchableOpacity> */}
                        
                        { newBadge ? <View style={Styles.newBadge}><Text style={Styles.description}>NEW</Text></View> : null
                        }

                        { play ?
                            <Image source={item.play} style={{ position: 'absolute', alignSelf: 'center', top: 60 }} />
                            :
                            null
                        }
                        { chaacterImage ?
                                <Text style={[Styles.title, Styles.charTeamText]}>{teamImage ? item.teamName : item.characterName}</Text> :
                                <View>
                                    <Text style={Styles.title}>{item.title}</Text>
                                    <Text style={Styles.name}>{item.name}</Text>
                                    <Text style={Styles.price}>{item.price} -<Text style={buyColor ? Styles.redColor : Styles.greenColor}> BUY</Text></Text>
                                </View>
                        }
                    </View>
                } />
        </View>
    )
}

export default FeaturedSuperGlobal;