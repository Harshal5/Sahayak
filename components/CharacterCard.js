import { TestScheduler } from '@jest/core';
import React from 'react';
import { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, Image, StyleSheet, AsyncStorage } from 'react-native';
import { images } from "./images";

class CharacterCard extends Component {

    constructor(props) {
        super(props);
        // console.log("In CharacterCard constructor");
        const { character } = props.route.params;
        console.log("IN CharacterCard: props.route.params:", props.route.params);
        this.state = {
            character: props.route.params.character,
            uri: null,
            loading: true,
        }
    }

    async componentDidMount() {
        const item = images.filter(x => {
            return x.character == this.state.character;
        })
        console.log("item[0]:", item[0]);
        if (!item[0]) {
            this.setState({
                uri: null,
                loading: false
            })
        } else {
            this.setState({
                uri: item[0].uri,
                loading: false
            })
        }

        console.log("componentDidMount done: this.state:", this.state);
    }

    render() {
        if (this.state.loading == true) {
            return <Text>Wait...</Text>
        }
        let image;
        console.log("this.state:", this.state);
        if (this.state.uri != null) {
            if (this.state.uri == undefined) {
                console.log("Image is undefined");
                image = <Image style={styles.img} source={require('./img/not-found.jpg')} />
            } else {
                console.log("Image is defined");
                image = <Image style={styles.img} source={this.state.uri} />
            }

        } else {
            image = <Image style={styles.img} source={require('./img/not-found.jpg')} />
        }
        return (
            <View style={styles.container} >
                <Text style={styles.title}>Character Selected: {this.state.character}. Display character information here and option to capture pic </Text>
                {image}

            </View >
        )
    };
}




const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#A94732',
    },
    img: {
        height: 200,
        width: 200,
        borderRadius: 5,
    }
});

export default CharacterCard;