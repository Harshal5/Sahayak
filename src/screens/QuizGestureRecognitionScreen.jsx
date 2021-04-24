import React, { useState } from 'react';
import * as Speech from 'expo-speech';
import { View, StyleSheet } from 'react-native';
import {
  Modal,
  Portal,
  Button,
  Provider,
  Headline,
  useTheme,
} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Camera from '../components/Camera';

const GestureRecognitionScreen = ({ route, navigation }) => {
  const { letter } = route.params;
  const [prediction, setPrediction] = useState('');
  const { colors } = useTheme();
  const numerics = '0123456789';

  const predict = (p) => {
    setPrediction(p);
    Speech.speak(letter === p ? 'Correct' : 'Wrong');
  };

  const hideModal = () => {
    setPrediction('');
    navigation.goBack();
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={prediction}
          contentContainerStyle={{
            ...styles.containerStyle,
            backgroundColor: colors.card,
          }}
          style={styles.modal}
        >
          <Headline style={{ color: colors.text }}>
            {letter === prediction ? 'Correct' : 'Wrong'}
          </Headline>
          <View style={{ height: 80, width: 80 }}>
            <LottieView
              autoPlay
              loop={false}
              height={80}
              width={80}
              source={
                letter === prediction
                  ? require('../../assets/animations/41793-correct.json')
                  : require('../../assets/animations/41791-loading-wrong.json')
              }
            />
          </View>
          <MaterialCommunityIcons
            name={
              prediction
                ? `${
                    numerics.match(prediction) ? 'numeric' : 'alpha'
                  }-${prediction}-box-outline`
                : 'checkbox-blank-outline'
            }
            size={120}
            color="black"
            style={{
              alignSelf: 'center',
              paddingBottom: 10,
              color: colors.text,
            }}
          />
          <Button mode="contained" onPress={hideModal}>
            Next
          </Button>
        </Modal>
      </Portal>
      <Camera predict={predict} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default GestureRecognitionScreen;
