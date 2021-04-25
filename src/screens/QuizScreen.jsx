import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Modal,
  Portal,
  Button,
  Headline,
  Surface,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import LottieView from 'lottie-react-native';

const QuizScreen = (props) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const [visible, setVisible] = React.useState(true);
  const { colors } = useTheme();
  // const [letter, setLetter] = React.useState(
  //   letters.charAt(Math.random() * letters.length),
  // );
  const [letter, setLetter] = React.useState('a');

  const hideModal = () => setVisible(false);
  const numerics = '0123456789';

  const generateRandom = () =>
    setLetter(letters.charAt(Math.random() * letters.length));

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
          <Headline>Welcome To Quiz</Headline>
          <View height={150} width={150}>
            <LottieView
              autoPlay
              height={150}
              width={150}
              source={require('../../assets/animations/30856-quickest.json')}
            />
          </View>
          <Button mode="contained" onPress={hideModal}>
            Start
          </Button>
        </Modal>
      </Portal>
      <View style={styles.quiz}>
        <Surface style={styles.surface}>
          <MaterialCommunityIcons
            name={`${
              numerics.match(letter) ? 'numeric' : 'alpha'
            }-${letter}-box-outline`}
            size={150}
            color={colors.text}
            style={{
              alignSelf: 'center',
            }}
          />
          <View style={styles.buttonGroup}>
            <TouchableRipple
              onPress={generateRandom}
              style={styles.button}
            >
              <View>
                <Button mode="contained">Skip</Button>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}} style={styles.button}>
              <View>
                <Button
                  mode="contained"
                  onPress={() => {
                    props.navigation.navigate('Guess', {
                      letter,
                    });
                    setTimeout(generateRandom, 1000);
                  }}
                >
                  Start
                </Button>
              </View>
            </TouchableRipple>
          </View>
        </Surface>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    // backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  modal: {
    // flex: 1,
    // padding: 20,
    // borderRadius: 15,
  },
  quiz: {
    flex: 1,
    justifyContent: 'center',
  },
  surface: {
    alignItems: 'center',
    elevation: 4,
    borderRadius: 10,
    overflow: 'hidden',
    paddingVertical: 40,
    margin: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: { padding: 10, width: 100 },
});

export default QuizScreen;
