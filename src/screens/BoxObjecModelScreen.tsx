import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const BoxObjecModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Box Object NModel</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        
    },
    title: {
        fontSize: 20,
        // width: 100,
        marginBottom: 0,
        borderWidth: 5,
        paddingHorizontal: 100,
        paddingVertical: 100,
        margin: 20,
        marginLeft: 150
    }
});
