import react from 'react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, Image, SafeAreaView } from 'react-native';
import { Title, TextInput, Button, List, Avatar, Card, Paragraph } from 'react-native-paper';

const getImage = (char) => {
    switch (char) {
        case 'a': return <Image source={require('../../assets/img/a.png')} />
        case 'b': return <Image source={require('../../assets/img/b.png')} />
        case 'c': return <Image source={require('../../assets/img/c.png')} />
        case 'd': return <Image source={require('../../assets/img/d.png')} />
        case 'i': return <Image source={require('../../assets/img/i.png')} />
        case 'p': return <Image source={require('../../assets/img/p.png')} />
        case 'q': return <Image source={require('../../assets/img/q.png')} />
        case 't': return <Image source={require('../../assets/img/t.png')} />
        case 'n': return <Image source={require('../../assets/img/n.png')} />
        case 'w': return <Image source={require('../../assets/img/w.png')} />
        case 'x': return <Image source={require('../../assets/img/x.png')} />
        case 'y': return <Image source={require('../../assets/img/y.png')} />
        case 'o': return <Image source={require('../../assets/img/o.png')} />
        case 'z': return <Image source={require('../../assets/img/z.png')} />
        case '1': return <Image source={require('../../assets/img/1.png')} />
        case '2': return <Image source={require('../../assets/img/2.png')} />
        case '4': return <Image source={require('../../assets/img/4.png')} />
        case '5': return <Image source={require('../../assets/img/5.png')} />
        case '7': return <Image source={require('../../assets/img/7.png')} />
        case '9': return <Image source={require('../../assets/img/9.png')} />
        case 'f': return <Image source={require('../../assets/img/f.png')} />
        case 'g': return <Image source={require('../../assets/img/g.png')} />
        case 'm': return <Image source={require('../../assets/img/m.png')} />
        default: return <Image style={{ height: 200, width: 200 }} source={require('../../assets/img/not-found.jpg')} />
    }
}

const getImageUri = (char) => {
    switch (char) {
        case 'a': return require('../../assets/img/a.png')
        case 'b': return require('../../assets/img/b.png')
        case 'c': return require('../../assets/img/c.png')
        case 'd': return require('../../assets/img/d.png')
        case 'i': return require('../../assets/img/i.png')
        case 'p': return require('../../assets/img/p.png')
        case 'q': return require('../../assets/img/q.png')
        case 't': return require('../../assets/img/t.png')
        case 'n': return require('../../assets/img/n.png')
        case 'w': return require('../../assets/img/w.png')
        case 'x': return require('../../assets/img/x.png')
        case 'y': return require('../../assets/img/y.png')
        case 'o': return require('../../assets/img/o.png')
        case 'z': return require('../../assets/img/z.png')
        case '1': return require('../../assets/img/1.png')
        case '2': return require('../../assets/img/2.png')
        case '4': return require('../../assets/img/4.png')
        case '5': return require('../../assets/img/5.png')
        case '7': return require('../../assets/img/7.png')
        case '9': return require('../../assets/img/9.png')
        case 'f': return require('../../assets/img/f.png')
        case 'g': return require('../../assets/img/g.png')
        case 'm': return require('../../assets/img/m.png')
        default: return require('../../assets/img/not-found.jpg')
    }
    return require('../../assets/img/not-found.jpg')
}


const CharCard = (props) => {
    console.log("props.item:", props.item);
    const getPath = (item) => {
        switch (item) {
            case 'a': return <Image source={require('../../assets/img/a.png')} />
            case 'b': return <Image source={require('../../assets/img/b.png')} />
            case 'c': return <Image source={require('../../assets/img/c.png')} />
            case 'd': return <Image source={require('../../assets/img/d.png')} />
            case 'i': return <Image source={require('../../assets/img/i.png')} />
            case 'p': return <Image source={require('../../assets/img/p.png')} />
            case 'q': return <Image source={require('../../assets/img/q.png')} />
            case 't': return <Image source={require('../../assets/img/t.png')} />
            case 'n': return <Image source={require('../../assets/img/n.png')} />
            case 'w': return <Image source={require('../../assets/img/w.png')} />
            case 'x': return <Image source={require('../../assets/img/x.png')} />
            case 'y': return <Image source={require('../../assets/img/y.png')} />
            case 'o': return <Image source={require('../../assets/img/o.png')} />
            case 'z': return <Image source={require('../../assets/img/z.png')} />
            case '1': return <Image source={require('../../assets/img/1.png')} />
            case '2': return <Image source={require('../../assets/img/2.png')} />
            case '4': return <Image source={require('../../assets/img/4.png')} />
            case '5': return <Image source={require('../../assets/img/5.png')} />
            case '7': return <Image source={require('../../assets/img/7.png')} />
            case '9': return <Image source={require('../../assets/img/9.png')} />
            case 'f': return <Image source={require('../../assets/img/f.png')} />
            case 'g': return <Image source={require('../../assets/img/g.png')} />
            case 'm': return <Image source={require('../../assets/img/m.png')} />
            default: return <Image style={{ height: 200, width: 200 }} source={require('../../assets/img/not-found.jpg')} />
        }
    }
    return (

        <Card>
            <Card.Title title={props.item} />
            <Card.Content>
                {getPath(props.item)}
            </Card.Content>
        </Card>

    );
}

import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/CarouselCardItem'

const CarouselCards = (props) => {
    const isCarousel = React.useRef(null);
    const [index, setIndex] = useState(0);

    return (
        <View style={styles.CarouselCardsContainer}>
            <Carousel
                layout="tinder"
                // layoutCardOffset={9}
                ref={isCarousel}
                data={props.data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
            />
            <Pagination
                dotsLength={props.data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                    // backgroundColor: '#ffbf80'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>
    )
}


const StringImages = (props) => {
    var arr = props.text.split('');

    const data = arr.map((val, index) => {
        return ({ char: val, index: index, imageComponent: getImage(val), imageUri: getImageUri(val) })
    })
    // console.log("data:", data);
    return (
        // <View>
        //     <FlatList
        //         data={arr}
        //         renderItem={CharCard}
        //     // key={count++}
        //     // keyExtractor={() => Math.floor((new Date()).getTime() / 1000 + count++)}
        //     />
        // </View>

        <View>
            {/* <SafeAreaView style={styles.container}> */}
            <CarouselCards data={data} />
            {/* </SafeAreaView > */}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#00ffcc", //Blue
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 50
    },
    CarouselCardsContainer: {
        // backgroundColor: "#ffbf80", //Yello
    },
    Carousel: {
        backgroundColor: "#00ffcc" //red
    }
});

export default StringImages;
