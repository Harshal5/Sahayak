import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Button } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            {item.imageComponent}

            <View style={styles.textBox}>
                <Text style={styles.header}>{item.char}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#d9d9d9", // WHITE
        width: ITEM_WIDTH,
        borderRadius: 20,
        width: '100%',
        height: 300,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 5.29,
        shadowRadius: 5.65,
        elevation: 7,
    },
    image: {
    },
    header: {
        color: "#ffffff",
        fontSize: 28,
        fontWeight: "bold",
        justifyContent: 'center',
    },
    textBox: {
        alignItems: 'center',
        backgroundColor: "#b0b0b0",
        height: 40,
        width: '75%',
        borderBottomEndRadius: 30,
        borderTopEndRadius: 30,
        borderBottomStartRadius: 30,
        borderTopLeftRadius: 30,

    }


})

export default CarouselCardItem