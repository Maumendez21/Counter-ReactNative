import React from 'react'
import { Text, View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

export const DimensionesScreen = () => {

    // const {width, height} = Dimensions.get('window');

    const {width, height} = useWindowDimensions();

    return (

        <View>

            <View style={styles.container}>
                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.20

                }} >
                    {/* <Text>Dimensiones Screen</Text> */}

                </View>
                <View style={styles.cajaNaranje} ></View>
            </View>
                <Text style={styles.title} >W: {width}, H: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: '#5856d6',
        // width: '50%',
        height: '50%',
        bottom: 0
    },
    cajaNaranje: {
        backgroundColor: '#F0A23B',
        // height: 300
    },
    title: {
        fontSize: 15,
        textAlign: 'center'
    }
});