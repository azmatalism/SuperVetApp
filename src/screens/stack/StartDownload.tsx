import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS, Styles } from '../../constants/Theme';
import LinearGradient from 'react-native-linear-gradient';
import { IMGS } from '../../constants';

function StartDownload ({ navigation }) {

    const [isLoading, setIsLoading] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const indicatorTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    const goBackTimer = setTimeout(() => {
      navigation.goBack();
    }, 2000);

    return () => {
      clearTimeout(indicatorTimer);
      clearTimeout(textTimer);
      clearTimeout(goBackTimer);
    };
  }, []);


  return (
    <SafeAreaView style={Styles.container}>
      <ImageBackground source={IMGS.background} resizeMode="cover" style={Styles.container}>
        <ImageBackground source={IMGS.background2} resizeMode="cover" style={[Styles.container, { opacity: 0.9 }]}>
          <ImageBackground source={IMGS.background3} resizeMode="cover" style={[Styles.container, { opacity: 0.9 }]}>
            <LinearGradient style={Styles.container} colors={['rgba(13, 19, 167, 0.39) 0%', 'rgba(1, 9, 29, 0.5) 100%']}>
              <Image style={{ position: "absolute", bottom: 0, right:0 }} source={IMGS.down} />
              <Image style={{ position: "absolute", left: 50, top: 50 }} source={IMGS.loder2} />
              {isLoading &&
                <TouchableOpacity style={{ position: "absolute", left: 110, top: 70 }} >
                  <ActivityIndicator size={80} color={COLORS.dot} />
                </TouchableOpacity>
              }
              {showText &&
                <Text style={[Styles.headingTitle, Styles.greenColor, {transform: [{ scaleY: 1.2 }], textAlign: "center", top: 90, right: 60 }]}>
                  {"DOWNLOADING\nSTART"}
                </Text>
              }
            </LinearGradient>
          </ImageBackground>
        </ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default StartDownload;