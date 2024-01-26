import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLORS } from "../constants/Theme";
import { useNavigation } from "@react-navigation/native";

const menu = require("../assets/images/menu.png");
const headerLogo = require("../assets/images/headerLogo.png");
const download = require("../assets/images/download.png");
const notification = require("../assets/images/notification.png");

function Header() {
const navigation = useNavigation();
const openD = ()=>{
    navigation.openDrawer()
}

    return (
        <View>

            <View style={styles.header}>
                <TouchableOpacity 
                style={{flex:1 , left:30}}
                onPress={openD}>
                <Image source={menu} resizeMode="contain" style={styles.menuIcon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9}
                 style={styles.headerLogoSection}>
                <Image source={headerLogo} />
                </TouchableOpacity>
               <View style={{flex:1,flexDirection:'row', justifyContent:'space-evenly'}}>
               <TouchableOpacity
                onPress={()=>navigation.navigate("Download")}>
                <Image source={download} resizeMode="contain" style={styles.download} />
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>navigation.navigate("Notification")}>
                <Image source={notification} resizeMode="contain" style={styles.notification} />
                </TouchableOpacity>
               </View>
                
            </View>

        </View>
    )
}



export default Header;

const styles = StyleSheet.create({
    header: {
     backgroundColor:COLORS.background,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    headerLogoSection: {
        flex:1, 
        alignItems:'center' , 
        justifyContent:'center'
    },
    menuIcon: {

    },
    headerLogo: {
        
    },
    download: {
        left: 20

    },
    notification: {

    },
})