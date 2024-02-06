import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { COLORS } from "../constants/Theme";
import { useNavigation } from "@react-navigation/native";
import { IMGS, ROUTES } from "../constants";

function Header() {
    const navigation = useNavigation();
    const openD = () => {
        navigation.openDrawer()
    }

    return (
        <View>

            <View style={styles.header}>
                <TouchableOpacity style={{ flex: 1, left: 30 }} onPress={openD}>
                    <Image source={IMGS.menu} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={styles.headerLogoSection}>
                    <Image source={IMGS.headerLogo} />
                </TouchableOpacity>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.DOWNLOAD)}>
                        <Image source={IMGS.download} resizeMode="contain" style={styles.download} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.NOTIFICATION)}>
                        <Image source={IMGS.notification} resizeMode="contain" />
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}



export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.background,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    headerLogoSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    download: {
        left: 20

    },
})