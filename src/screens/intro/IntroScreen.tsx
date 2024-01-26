import React, { useRef, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity, ImageBackground, ToastAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, Styles } from '../../constants/Theme';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    title: 'Welcome to \n supervet comics!',
    description: 'Super Vet’s ComicFi The New Trend Setters',
    image: require('../../assets/images/introLogo.png'),
  },
  {
    key: '2',
    title: 'Enjoy your reading \n with supervet',
    description: 'Earn Passive Income By Just Reading Comics',
    image: require('../../assets/images/introLogo.png'),
  },
  {
    key: '3',
    title: 'Get your volumes \n From Comic Marketplace',
    description: 'Lend Comics To Ascend Profits',
    image: require('../../assets/images/introLogo.png'),
  },
  {
    key: '4',
    title: 'Get your volumes \n From Comic Marketplace',
    description: 'Lend Comics To Ascend Profits',
    image: require('../../assets/images/introLogo.png'),
  },
];

function IntroScreen() {
  const flatListRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const keyExtractor = item => item.key;

  const renderItem = ({ item }) => {


    return (
      <SafeAreaView style={Styles.container}>
        <ImageBackground
          source={require("../../assets/images/introBackground.png")}
          style={styles.imageBG}
          resizeMode="cover"
        >
          <View style={styles.parentView}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
              <Image source={item.image} style={styles.image} resizeMode="contain" />
              <Text style={[Styles.headingTitle, styles.title]}>{item.title}</Text>
              <Text style={[Styles.description, styles.description]}>{item.description}</Text>

              {item.key === '1' && (
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => ToastAndroid.show('Super Intro Clicked 😉', ToastAndroid.SHORT)}
                >
                  <Text style={styles.btnText}>Super Intro</Text>
                </TouchableOpacity>
              )}
              {item.key === '2' && (
                <TouchableOpacity
                  style={styles.btnEmpty}
                  onPress={() => ToastAndroid.show('Super Intro Clicked 😉', ToastAndroid.SHORT)}
                >
                  {/* <Text style={styles.btnText}></Text> */}
                </TouchableOpacity>
              )}
              {item.key === '3' && (
                <TouchableOpacity
                  style={styles.btnEmpty}
                  onPress={() => ToastAndroid.show('Super Intro Clicked 😉', ToastAndroid.SHORT)}
                >
                  {/* <Text style={styles.btnText}></Text> */}
                </TouchableOpacity>
              )}
              {item.key === '4' && (
                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    style={[styles.btn, styles.secondBtn]}
                    onPress={() => ToastAndroid.show('Connect Wallet Clicked 😉', ToastAndroid.SHORT)}
                  >
                    <Text style={styles.btnText}>Connect Wallet</Text>
                  </TouchableOpacity>
                  <Text style={[Styles.description, styles.description]}>Connect Your  Metamask </Text>
                </View>
              )}

              <View style={styles.indicatorContainer}>
                {slides.map((_, index) => (
                  <View
                    key={index.toString()} // Use index as the key
                    style={[
                      styles.dot,
                      { backgroundColor: index === currentPage ? "#FDBC17" : "rgba(253, 188, 23, 0.5)" },
                    ]}
                  />
                ))}

              </View>
              {item.key === '1' && (
                <View style={styles.skipMainContainer}>
                  <View style={styles.skipcontainer}>
                    <TouchableOpacity
                      style={styles.skipBtn}
                      onPress={() => ToastAndroid.show('Skip Clicked 😉', ToastAndroid.SHORT)}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Text style={styles.skipText}>Skip</Text>
                        <Image
                          source={require("../../assets/images/arrowRight.png")}
                          style={styles.skipImg}
                          resizeMode="contain"
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

              )}
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );

  }




  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offsetX / width);
    setCurrentPage(currentIndex);
  };

  return (
    <View style={Styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={(item,) => renderItem(item)}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageBG: {
    flex: 1,
    width,
    height,
    justifyContent: 'space-between'
  },
  parentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: 174,
    height: 174,
    marginTop: 40
  },
  dotImage: {
    width: 45.72,
    height: 7,

  },
  title: {
    textAlign: "center",
    justifyContent: "center",
  },
  description: {
    textAlign: "center",
  },
  btnEmpty: {
    height: 45,
    width: 145,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  btn: {
    color: "rgba(13, 19, 167, 0.66)",
    height: 45,
    width: 145,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.dot,
    marginTop: 100,
  },
  secondBtn: {
    backgroundColor: COLORS.dot,
    marginBottom: 5,

  },
  btnText: {
    color: COLORS.white,
    // textAlign: "center",
    // fontSize: 15,
    // fontStyle: "normal",
    fontWeight: "400",
    // lineHeight: 15,
    // letterSpacing: 0.834,
  },

  skipMainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width,
    height,
  },
  skipcontainer: {
    flexDirection: "row",
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  skipText: {
    color: COLORS.popular,
    textAlign: 'center',
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 15,
    letterSpacing: 0.834,
  },
  skipImg: {
    width: 14,
    height: 14,
    flexShrink: 0,
  },
  skipBtn: {
    bottom: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  indicatorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'transparent',
  },

});

export default IntroScreen;
