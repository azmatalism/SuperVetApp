import React from 'react'
import { View, Text, ImageBackground, FlatList, Image, } from 'react-native'
import { COLORS, Styles } from '../../constants/Theme'
import DrawerHeader from '../../components/DrawerHeader'
import { IMGS } from '../../constants'

const data = [
    {
        image: IMGS.notification1,
        name: "Sara Wiliams",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis commodo duis velit maecenas nibh.dolor sit amet, consectetur adipiscing elit...",
        time: "1m ago.",
        date: "Monday 11:30 AM - Jul 2022",
        noti: "12",
    },
    {
        image: IMGS.notification2,
        name: "Patrik Dj",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis commodo duis velit maecenas nibh.dolor sit amet, consectetur adipiscing elit...",
        time: "2h ago.",
        date: "Monday 11:30 AM - Jul 2022",
        noti: "3",
    },
    {
        image: IMGS.notification3,
        name: "David",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis commodo duis velit maecenas nibh.dolor sit amet, consectetur adipiscing elit...",
        time: "3h ago.",
        date: "Monday 11:30 AM - Jul 2022",
        noti: "5",
    },
    {
        image: IMGS.notification4,
        name: "Miyam",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis commodo duis velit maecenas nibh.dolor sit amet, consectetur adipiscing elit...",
        time: "1d ago.",
        date: "Monday 11:30 AM - Jul 2022",
        noti: "6",
    },
    {
        image: IMGS.notification5,
        name: "Taylor Jane",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis commodo duis velit maecenas nibh.dolor sit amet, consectetur adipiscing elit...",
        time: "1d ago.",
        date: "Monday 11:30 AM - Jul 2022",
        noti: "2",
    },
    {
        image: IMGS.notification6,
        name: "Ravinder Thakur",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis commodo duis velit maecenas nibh.dolor sit amet, consectetur adipiscing elit...",
        time: "2d ago.",
        date: "Monday 11:30 AM - Jul 2022",
        noti: "8",
    },
    {
        image: IMGS.notification7,
        name: "Dean Jones",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis commodo duis velit maecenas nibh.dolor sit amet, consectetur adipiscing elit...",
        time: "2d ago.",
        date: "Monday 11:30 AM - Jul 2022",
        noti: "5",
    },
    {
        image: IMGS.notification8,
        name: "Monica Jay",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis commodo duis velit maecenas nibh.dolor sit amet, consectetur adipiscing elit...",
        time: "2d ago.",
        date: "Monday 11:30 AM - Jul 2022",
        noti: "2",
    },
    {
        image: IMGS.notification9,
        name: "PapaJones",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis commodo duis velit maecenas nibh.dolor sit amet, consectetur adipiscing elit...",
        time: "3d ago.",
        date: "Monday 11:30 AM - Jul 2022",
        noti: "47",
    },


]

function Notification() {
    return (
        <View style={Styles.container}>
            <DrawerHeader search={true} />
            <ImageBackground source={IMGS.drawerbg} style={Styles.container}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <View style={{}}>
                            <View style={{ alignSelf: "flex-end", marginRight: 20, marginTop: 10 }}>
                                <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: COLORS.rent, justifyContent: "center", alignItems: "center", }}>
                                    <Text style={Styles.SecondTitle}>{item.noti}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: 20 }}>
                                <Image source={item.image} resizeMode="contain" />
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={Styles.SecondTitle}>{item.name}</Text>
                                    <Text style={[Styles.description, { width: "37%" }]}>{item.description}<Text style={[Styles.title, Styles.redColor]}>Read More</Text></Text>
                                    <Text style={[Styles.date, Styles.greenColor]}>{item.time}</Text>

                                </View>
                            </View>
                            <View style={{ alignSelf: "flex-end", marginRight: 20, marginBottom: 5 }}>
                                <View style={{ alignItems: "flex-end", }}>
                                    <Text style={[Styles.date, Styles.whiteColor]}>{item.date}</Text>
                                </View>
                            </View>
                            <View style={{ borderColor: "rgba(217, 217, 217, 0.2)", borderWidth: 1, }} />
                        </View>
                    } />
            </ImageBackground>

        </View>
    )
}

export default Notification;