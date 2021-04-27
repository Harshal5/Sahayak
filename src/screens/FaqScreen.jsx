import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Surface, List } from 'react-native-paper';
import LottieView from 'lottie-react-native';

const faq = [
  {
    index: 1,
    que: 'How to use Gesture Recognition',
    ans:
      'Go to Gesture Recognition Screen which is the first tab on home screen and click the camera button, and you will get the prediction',
  },
  {
    index: 2,
    que: 'How to use Text to Gesture',
    ans:
      'Go to Text to Gesture Screen which is the second tab on home screen, enter any word and submit. It will now show you images for the gesture of the corresponding letters in your word',
  },
  {
    index: 3,
    que: 'How to play Quiz',
    ans:
      'Go to Quiz Screen which is the third tab on home screen and start the quiz. Now you will get a word you can skip the word or click on start to capture your gesture. Perform the gesture and then it will display the result on your screen',
  },
  {
    index: 4,
    que: 'How can I report a problem',
    ans:
      'In the drawer menu click on mail to email us directly or you can go to Report Screen to report it directly from the app',
  },
];

const FaqItem = ({ item }) => (
  <List.Item
    title={`Q. ${item.que} ?`}
    description={`Ans. ${item.ans}.`}
    descriptionNumberOfLines={10}
  />
);

const FaqScreen = () => (
  <Surface style={styles.surface}>
    <View style={{ alignItems: 'center', marginVertical: 10 }}>
      <View height={100} width={100}>
        <LottieView
          autoPlay
          height={100}
          width={100}
          source={require('../../assets/animations/10625-questions-and-answer.json')}
        />
      </View>
    </View>
    <FlatList
      data={faq}
      renderItem={FaqItem}
      keyExtractor={(item) => item.index}
    />
    {/* {faq.map(({ index, que, ans }) => (
      <FaqItem key={index} index={index} que={que} ans={ans} />
    ))} */}
  </Surface>
);

const styles = StyleSheet.create({
  surface: {
    flex: 1,
    elevation: 4,
    overflow: 'hidden',
    justifyContent: 'center',
    margin: 20,
  },
});

export default FaqScreen;
