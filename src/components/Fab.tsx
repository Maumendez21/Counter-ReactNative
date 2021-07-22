import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void; 
}

export const Fab = ({title, onPress, position = 'br'}: props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                onPress={onPress}
                activeOpacity = { 0.8 }
                style={ [
                    styles.fabLocation,
                    (position == 'bl') ? styles.left: styles.right
                ]} 
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const android = () => {
        return (

            <View
                style={ [
                    styles.fabLocation,
                    (position == 'bl') ? styles.left: styles.right
                ]} 
            >
                <TouchableNativeFeedback 
                    background = {TouchableNativeFeedback.Ripple('black', false, 30)}
                    onPress={onPress}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS == 'ios') ? ios(): android();
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 30
    },  
    right: {
        right: 30
    },
    left: {
        left: 30
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 30,
        left: 30
    },  
    fab: {
        backgroundColor: '#5856d6',
        width: 60, 
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})