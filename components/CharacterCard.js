import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CharacterCard = ({ route, navigation }) => {

    const { character } = route.params;
    // console.log("IN CharacterCard: Character:", character);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Character Selected: {character}. Display character information here and option to capture pic </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#A94732',
    }
});

export default CharacterCard;