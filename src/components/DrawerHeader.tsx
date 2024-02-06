import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { COLORS } from "../constants/Theme";
import { useNavigation } from "@react-navigation/native";
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { IMGS, ROUTES } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons'

function DrawerHeader({ headerLogo, search, downIcon }) {
    const navigation = useNavigation();
    return (
        <View style={styles.header}> 
            <TouchableOpacity activeOpacity={0.9}  onPress={navigation.goBack} style={{ flexDirection: "row",marginLeft:10 }}>
                <Icon name="arrow-back" size={22} color={COLORS.white} />
                <Text style={styles.titleBack}>BACK</Text>
            </TouchableOpacity>
            {
                headerLogo ?
                    <Image source={IMGS.headerLogo} style={styles.HeaderLogo} resizeMode="contain" />
                    : null
            }

            {
                search ?
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="Search..." placeholderTextColor={COLORS.white} />
                        <EvilIcons name="search" size={15} color={COLORS.white} />
                    </View>
                    : null
            }

            {
                downIcon ?
                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.DOWNLOAD)}>
                        <Image source={IMGS.download} resizeMode="contain" style={styles.download} />
                    </TouchableOpacity>
                    : null
            }

        </View>


    )
}

export default DrawerHeader;

const styles = StyleSheet.create({
    header: {
        height: 60,
        width: "100%",
        backgroundColor: COLORS.background,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    HeaderLogo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center"
    },
    titleBack: {
        color: COLORS.white,
        marginLeft: 10,
        fontWeight: "400"
    },
    inputContainer: {
        width: 170,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        padding: 8,
        borderColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 20,
        marginRight: 10
    },
    input: {
        flex: 1,
        height: 40,
        color: COLORS.white,

    },
    download: {
        marginRight: 20
    },

})