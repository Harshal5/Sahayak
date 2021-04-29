import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

const data = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

const ListSingleItem = ({ item, characterSelected }) => (
  <TouchableOpacity
    style={styles.listItem}
    onPress={() => {
      characterSelected(item);
    }}
  >
    <View style={styles.listItemView}>
      <Text style={styles.listItemText}>{item}</Text>
    </View>
  </TouchableOpacity>
);

const TutorialMode = ({ navigation }) => {
  const characterSelected = (character) => {
    ToastAndroid.show(
      `You selected ${character}..`,
      ToastAndroid.SHORT,
    );
    navigation.navigate('CharacterCard', {
      character,
    });
  };

  return (
    <View>
      <Text style={styles.text}>Tutorial Mode</Text>
      <Text>Select Character</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListSingleItem
            item={item}
            characterSelected={characterSelected}
          />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#F8F8F8F8',
    borderBottomWidth: 1,
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
    color: '#A94732',
  },
});

export default TutorialMode;
