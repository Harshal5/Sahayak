import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Modal,
  Portal,
  Button,
  Provider,
  Headline,
  Surface,
  TouchableRipple,
} from 'react-native-paper';

const QuizScreen = (props) => {
  const [visible, setVisible] = React.useState(true);
  const [letter, setLetter] = React.useState('a');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const numerics = '0123456789';
  const letters = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const generateRandom = () =>
    setLetter(letters.charAt(Math.random() * letters.length));

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          contentContainerStyle={styles.containerStyle}
          style={styles.modal}
        >
          <Headline>Welcome To Quiz</Headline>
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
            color="black"
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
                  onPress={() => props.navigation.navigate('Guess')}
                >
                  Start
                </Button>
              </View>
            </TouchableRipple>
          </View>
        </Surface>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  containerStyle: { backgroundColor: 'white', padding: 20 },
  modal: {
    flex: 1,
    padding: 20,
    borderRadius: 15,
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
  button: { padding: 10 },
});

export default QuizScreen;
