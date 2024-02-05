import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ProgressBarAndroidBase, ProgressBarAndroid } from 'react-native'
import { COLORS } from '../constants/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons'

const progressProps = {
    styleAttr: "Horizontal",
    indeterminate: false,
}

function ProgressBar({ progress }) {
    // const [progress, setProgress] = useState(0);


    return (
        <View style={styles.container}>
            <View style={styles.progress}>
                {/* <Text style={styles.progressText}>{Math.round(progress*100)}%</Text> */}
                {/* <ProgressBarAndroidBase {...progressProps} progress={progress} style={styles.progress}/> */}
                {
                    progress ?
                        <View style={styles.progress}>
                            <Text style={{ color: COLORS.buy, fontSize: 8 }}>Download!</Text>
                            <Text style={{ color: COLORS.popular, fontSize: 8 }}>Monday 11:30 AM - Jul 2022</Text>
                        </View>

                        :
                        <View style={styles.progress}>
                            <Ionicons name="pause-circle" size={20} color="white" />
                            <ProgressBarAndroid styleAttr="Horizontal" color="#64FF05" indeterminate={false} progress={0.8} />
                        </View>

                }


            </View>
        </View>
    )
}

export default ProgressBar

const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        justifyContent: 'center',
    },
    progress: {
        width: 250,
        alignItems: "flex-end",

    },
    progressText: {
        fontSize: 20,
        textAlign: "center",
    },
});