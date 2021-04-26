import react from 'react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  Title,
  TextInput,
  Button,
  List,
  Avatar,
  Card,
  Paragraph,
  Surface,
} from 'react-native-paper';

const getImage = (char) => {
  switch (char) {
    case 'a':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/a.png')}
        />
      );
    case 'b':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/b.png')}
        />
      );
    case 'c':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/c.png')}
        />
      );
    case 'd':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/d.png')}
        />
      );
    case 'i':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/i.png')}
        />
      );
    case 'p':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/p.png')}
        />
      );
    case 'q':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/q.png')}
        />
      );
    case 't':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/t.png')}
        />
      );
    case 'n':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/n.png')}
        />
      );
    case 'w':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/w.png')}
        />
      );
    case 'x':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/x.png')}
        />
      );
    case 'y':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/y.png')}
        />
      );
    case 'o':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/o.png')}
        />
      );
    case 'z':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/z.png')}
        />
      );
    case '1':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/1.png')}
        />
      );
    case '2':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/2.png')}
        />
      );
    case '4':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/4.png')}
        />
      );
    case '5':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/5.png')}
        />
      );
    case '7':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/7.png')}
        />
      );
    case '9':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/9.png')}
        />
      );
    case 'f':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/f.png')}
        />
      );
    case 'g':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/g.png')}
        />
      );
    case 'm':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/m.png')}
        />
      );
    default:
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/not-found.jpg')}
        />
      );
  }
};

const styles2 = StyleSheet.create({
  img: {
    margin: 20,
    height: 200,
    width: 200,
    borderRadius: 30,
  },
});

import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from '../components/CarouselCardItem';

const CarouselCards = (props) => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.CarouselCardsContainer}>
          <Carousel
            layout="tinder"
            layoutCardOffset={9}
            ref={isCarousel}
            data={props.data}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            onSnapToItem={(index) => setIndex(index)}
            useScrollView={true}
          />
        </View>
      <View>
        <Pagination
          dotsLength={props.data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            // backgroundColor: '#ffbf80'
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>

    </View>
  );
};

const StringImages = (props) => {
  var arr = props.text.split('');
  const data = arr.map((val, index) => {
    return { char: val, index: index, imageComponent: getImage(val) };
  });
  return (
    <View style={styles.container}>
      <CarouselCards data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  CarouselCardsContainer: {
    marginTop: 5,
    // paddingTop: 10,
    height: '80%',
  },
  pagination:{
    backgroundColor: '#8d5524'
  },
});

export default StringImages;
