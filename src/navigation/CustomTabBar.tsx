import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../constants/Theme';
import Header from '../common/Header';

const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={{backgroundColor: COLORS.background}}>
            <Header/>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tabContainer}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            style={styles.tabButton}>
                            <Text style={{
                                color: isFocused ? COLORS.dot : COLORS.white,
                                textAlign: "center",
                                fontSize: 12,
                                fontStyle: "normal",
                                fontWeight: "400",
                                textTransform: "uppercase",
                                lineHeight: 18,
                                letterSpacing: 0.834,
                            }}>
                                {label}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.background,
        elevation: 2,

    },
    tabButton: {
        padding: 10,
        // marginHorizontal: 4,
        alignItems: 'center',
    },
   
});

export default CustomTabBar;