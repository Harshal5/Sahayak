import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from './CarouselCardItem';

const getImage = (char) => {
  const styles2 = StyleSheet.create({
    img: {
      margin: 20,
      height: 200,
      // width: 2:0,
      padding: 5,
      borderRadius: 15,
      borderColor: 'white',
      borderWidth: 5,
    },
  });
  switch (char) {
    case 'a':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/a.jpg')}
        />
      );
    case 'b':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/b.jpg')}
        />
      );
    case 'c':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/c.jpg')}
        />
      );
    case 'd':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/d.jpg')}
        />
      );
    case 'e':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/e.jpg')}
        />
      );
    case 'f':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/f.jpg')}
        />
      );
    case 'g':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/g.jpg')}
        />
      );
    case 'h':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/h.jpg')}
        />
      );
    case 'i':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/i.jpg')}
        />
      );
    case 'j':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/j.jpg')}
        />
      );
    case 'k':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/k.jpg')}
        />
      );
    case 'l':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/l.jpg')}
        />
      );
    case 'm':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/m.jpg')}
        />
      );
    case 'n':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/n.jpg')}
        />
      );
    case 'o':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/o.jpg')}
        />
      );
    case 'p':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/p.jpg')}
        />
      );
    case 'q':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/q.jpg')}
        />
      );
    case 'r':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/r.jpg')}
        />
      );
    case 's':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/s.jpg')}
        />
      );
    case 't':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/t.jpg')}
        />
      );
    case 'u':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/u.jpg')}
        />
      );
    case 'v':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/v.jpg')}
        />
      );
    case 'w':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/w.jpg')}
        />
      );
    case 'x':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/x.jpg')}
        />
      );
    case 'y':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/y.jpg')}
        />
      );
    case 'z':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/z.jpg')}
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
    case '3':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/3.png')}
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
    case '6':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/6.png')}
        />
      );
    case '7':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/7.png')}
        />
      );
    case '8':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/8.png')}
        />
      );
    case '9':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/9.png')}
        />
      );
    case '0':
      return (
        <Image
          style={styles2.img}
          source={require('../../assets/img/0.png')}
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
          useScrollView
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
          tappableDots
        />
      </View>
    </View>
  );
};

const StringImages = (props) => {
  const arr = props.text.split('');
  const data = arr.map((val, index) => ({
    char: val,
    index,
    imageComponent: getImage(val),
  }));
  return (
    <View style={styles.container}>
      <CarouselCards data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  CarouselCardsContainer: {
    marginTop: 5,
    // paddingTop: 10,
    height: '80%',
  },
  pagination: {
    backgroundColor: '#8d5524',
  },
});

export default StringImages;
