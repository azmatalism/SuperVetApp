import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, FlatList, View, Text, Dimensions, Image, } from 'react-native';
import { COLORS, Styles } from '../constants/Theme';

const { width } = Dimensions.get('window');



const slides = [
    {
        id: '1',
        image: require("../assets/images/featuredSlider.png"),
        title: 'READ SUPER COMICS',
        subtitle: 'WANT TO EARN?',

    },
    {
        id: '2',
        image: require("../assets/images/featuredSlider2.png"),
        title: 'READ SUPER COMICS',
        subtitle: 'WANT TO EARN?',

    },
    {
        id: '3',
        image: require("../assets/images/featuredSlider1.png"),
        title: 'READ SUPER COMICS',
        subtitle: 'WANT TO EARN?',

    },
    {
        id: '4',
        image: require("../assets/images/featuredSlider3.png"),
        title: 'READ SUPER COMICS',
        subtitle: 'WANT TO EARN?',

    },
];

const Slide = ({ item, screenWidth }) => {
    return (
      <View style={{ width: screenWidth }}>
        <Image source={item?.image} resizeMode='cover' style={{ height: 200, width: screenWidth }} />
        <View style={{ bottom: 50, position: 'absolute' }}>
          <Text style={[Styles.description, styles.subtitle]}>{item?.subtitle}</Text>
          <Text style={[Styles.headingTitle, styles.title]}>{item?.title}</Text>
        </View>
      </View>
    );
  };
  
  function FeaturedSlider() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef();
    const [screenWidth, setScreenWidth] = useState(width);
  
    const onScroll = (event) => {
      const contentOffsetX = event.nativeEvent.contentOffset.x;
      const currentIndex = Math.round(contentOffsetX / screenWidth);
      setCurrentSlideIndex(currentIndex);
    };
  
    const onLayout = () => {
      setScreenWidth(Dimensions.get('window').width);
    };
  
    useEffect(() => {
      const autoScroll = setInterval(() => {
        // Increment the current slide index
        const newIndex = (currentSlideIndex + 1) % slides.length;
        ref.current.scrollToIndex({ index: newIndex, animated: true });
      }, 2000); // Adjust the interval (in milliseconds) as needed
  
      return () => clearInterval(autoScroll); // Clear the interval on component unmount
    }, [currentSlideIndex]);
  
    return (
      <View onLayout={onLayout}>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={onScroll}
          onScroll={onScroll} // Add this line
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={({ item }) => <Slide item={item} screenWidth={screenWidth} />}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: index === currentSlideIndex ? COLORS.dot : 'rgba(253, 188, 23, 0.5)' },
              ]}
            />
          ))}
        </View>
      </View>
    );
  }
  


const styles = StyleSheet.create({
    title: {
        marginTop: 2,
        textAlign: "left",
        marginLeft: 30
    },
    subtitle: {
        marginTop: 10,
        textAlign: "left",
        textTransform: "uppercase",
        marginLeft: 30
    },
    indicatorContainer: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: "center",
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },

});

export default FeaturedSlider;
