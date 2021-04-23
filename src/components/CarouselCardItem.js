import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Button } from "react-native"

// export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            {/* <Image
                source={{ uri: item.imageUri }}
                // source={require(item.imageUri)}
                style={styles.image}
            /> */}
            {item.imageComponent}


            <Text style={styles.header}>{item.char}</Text>
            {/* <Text style={styles.body}>{item.index}</Text> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // alignContent: 'center',
        alignItems: 'center',
        // alignSelf: 'center',
        // justifyContent: 'center',
        backgroundColor: "#ff4d4d",
        // alignContent: 'center',
        // alignSelf: 'stretch',
        // borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginHorizontal: 0,
    },
    image: {
        width: ITEM_WIDTH,
        height: 300,
    },
    header: {
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
        // paddingLeft: 20,
        paddingTop: 20,
        justifyContent: 'center',
    },
    body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20
    }
})

export default CarouselCardItem