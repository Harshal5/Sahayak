import React, { useState } from 'react';
import * as Speech from 'expo-speech';
import { View, StyleSheet } from 'react-native';
import {
  Modal,
  Portal,
  Button,
  Snackbar,
  Headline,
  useTheme,
} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Camera from '../components/Camera';

const GestureRecognitionScreen = () => {
  const [prediction, setPrediction] = useState('');
  const [visible, setVisible] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const { colors } = useTheme();
  const numerics = '0123456789';

  const predict = (p) => {
    if (p === null) {
      Speech.speak('Internet Connection Unavailable');
      setSnackbar(true);
    } else {
      setPrediction(prediction + p);
      Speech.speak(p);
      setVisible(true);
    }
  };

  const hideModal = () => setVisible(false);

  return (
    <View style={{ flex: 1 }}>
      <Portal>
        <Modal
          visible={visible}
          contentContainerStyle={{
            ...styles.containerStyle,
            backgroundColor: colors.card,
          }}
          style={styles.modal}
        >
          <Headline style={{ color: colors.text }}>
            Prediction
          </Headline>
          <View style={{ height: 80, width: 80 }}>
            <LottieView
              autoPlay
              height={80}
              width={80}
              source={require('../../assets/animations/9944-ai-robot.json')}
            />
          </View>
          <MaterialCommunityIcons
            name={
              prediction
                ? `${
                    numerics.match(prediction[prediction.length - 1])
                      ? 'numeric'
                      : 'alpha'
                  }-${prediction[prediction.length - 1]}-box-outline`
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
          <Headline
            style={{
              textTransform: 'capitalize',
            }}
          >
            {prediction}
          </Headline>
          <Button
            mode="contained"
            onPress={() => {
              Speech.speak(prediction);
            }}
          >
            Read Aloud
          </Button>
          <View style={styles.btnGroup}>
            <Button
              mode="contained"
              style={styles.btn}
              onPress={() => {
                hideModal();
                setPrediction('');
              }}
            >
              Clear
            </Button>
            <Button
              mode="contained"
              style={styles.btn}
              onPress={hideModal}
            >
              Continue
            </Button>
          </View>
        </Modal>
      </Portal>
      <Camera predict={predict} />
      <Snackbar
        visible={snackbar}
        onDismiss={() => setSnackbar(false)}
        action={{
          label: 'Okay',
          onPress: () => {},
        }}
      >
        Internet Connection Unavailable
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnGroup: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  btn: {
    margin: 5,
    width: 115,
  },
});

export default GestureRecognitionScreen;
