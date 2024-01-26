import React from 'react'
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Styles } from '../constants/Theme';
import LinearGradient from 'react-native-linear-gradient';

function PurchaseDownload() {
    
    return (
        <SafeAreaView style={Styles.container}>
            <ImageBackground source={require("../assets/images/background.png")} resizeMode="cover" style={Styles.container}>
                <ImageBackground source={require("../assets/images/background2.png")} resizeMode="cover" style={[Styles.container, { opacity: 0.9 }]}>
                <ImageBackground source={require("../assets/images/background3.png")} resizeMode="cover" style={[Styles.container, { opacity: 0.9 }]}>
                    <LinearGradient style={Styles.container} colors={['rgba(13, 19, 167, 0.39) 0%', 'rgba(1, 9, 29, 0.5) 100%']}>
                        <Image style={{position:"absolute", bottom:0, }} source={require("../assets/images/purchace.png")} />
                        <Image style={{position:"absolute", left:50, top:50 }} source={require("../assets/images/loderbg.png")} />
                        <Text style={[Styles.headingTitle, Styles.greenColor,{textAlign:"center", top:90, right:50}]}>SUCCESSFULLY{"\n"}PURCHASE{"\n"}ON RENT</Text>
                       

                    </LinearGradient>
                    </ImageBackground>
                </ImageBackground>

            </ImageBackground>
        </SafeAreaView>
    )
}

export default PurchaseDownload;

const styles = StyleSheet.create({})