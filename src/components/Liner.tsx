import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import LinearGradient from "react-native-linear-gradient";
import { COLORS, Styles } from '../constants/Theme';
import { useNavigation } from '@react-navigation/native';


export default function Liner({ linerColor, seeAll, headingTitle, onPress }) {
    const navigation = useNavigation();
    return (
        <View>
            <LinearGradient
                colors={[linerColor, 'rgba(0, 0, 0, 0.00)']}
                style={styles.liner}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <Text style={[Styles.headingTitle, {marginLeft: 15,}]}>{headingTitle}</Text>
                {
                    seeAll ?
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={onPress}>
                            <Text style={Styles.seeAll}>SEE ALL</Text>
                        </TouchableOpacity>
                        :
                        null
                }
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    marginLeft: {
        
    },
    liner: {
        height: 40,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

})