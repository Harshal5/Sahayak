import React, { useRef } from 'react';
import { View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import LottieView from 'lottie-react-native';

import Page from '../components/Page';
import Footer from '../components/Footer';

const OnBoardingScreen = (props) => {
  const pagerRef = useRef(null);

  const handlePageChange = (pageNumber) => {
    pagerRef.current.setPage(pageNumber);
  };

  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <View key="1">
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffc93c',
            }}
          >
            <View height={200} width={200}>
              <LottieView
                autoPlay
                height={200}
                width={200}
                source={require('../../assets/animations/6542-handup.json')}
              />
            </View>
            <Page
              backgroundColor="#ffc93c"
              title="Gesture Recognition"
              info1="Got no idea about Indian Sign Language?"
              info2="No worries!! We have got your back here!"
              icon="../../assets/animations/6542-handup.json"
            />
          </View>
          <Footer
            backgroundColor="#ffc93c"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(1);
            }}
          />
        </View>
        <View key="2">
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#89c4f4',
            }}
          >
            <View height={200} width={200}>
              <LottieView
                autoPlay
                height={200}
                width={200}
                source={require('../../assets/animations/58002-using-mobile-phone.json')}
              />
            </View>
            <Page
              backgroundColor="#89c4f4"
              title="Text to Gesture"
              info1="Communication made easy !!"
              info2="Easily get the Indian Sign Language conversion for your text"
            />
          </View>
          <Footer
            backgroundColor="#89c4f4"
            leftButtonLabel="Back"
            leftButtonPress={() => {
              handlePageChange(0);
            }}
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(2);
            }}
          />
        </View>
        <View key="3">
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#7befb2',
            }}
          >
            <View height={200} width={200}>
              <LottieView
                autoPlay
                height={200}
                width={200}
                source={require('../../assets/animations/30884-online-tutorials-online-work.json')}
              />
            </View>
            <Page
              title="Huh, Sign Language seems pretty tough?"
              info1="NOT AT ALL !!"
              info2="Quiz yourself and bring the best out of your learnings !!"
            />
          </View>
          <Footer
            backgroundColor="#7befb2"
            leftButtonLabel="Back"
            leftButtonPress={() => {
              handlePageChange(1);
            }}
            rightButtonLabel="Continue"
            rightButtonPress={props.visibleOnboarding}
          />
        </View>
      </ViewPager>
    </View>
  );
};

export default OnBoardingScreen;
