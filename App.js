import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Alert, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import uuid from 'react-native-uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import TutorialMode from './components/TutorialMode';
import CharacterCard from './components/CharacterCard';

const App = () => {

  const [items, setItems] = useState([
    { id: 1, text: "Milk" },
    { id: 2, text: "Bread" },
    { id: 3, text: "Eggs" },
    { id: 4, text: "juice" },
  ]);

  const goToCamera = () => {
    console.log("goToCamera");
  }

  const deleteItem = (id) => {
    console.log("In detelte Item");
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert(
        'No item entered',
        'Please enter an item when adding to your shopping list',
        [
          {
            text: 'Okay',
            style: 'cancel',
          },
          { cancelable: true },
        ],
      );
    } else {
      setItems(prevItems => {
        return [{ id: uuid.v4(), text: text }, ...prevItems]
      });
    }

  };

  const DetailScreen = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }

  const RealTimeDetection = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Real Time Detection Screen</Text>
      </View>
    );
  }

  // const TutorialMode = () => {
  //   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <Text>Tutorial Mode</Text>
  //     </View>
  //   );
  // }

  const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Header />
        {/* <AddItem addItem={addItem} /> */}
        {/* <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item}
          deleteItem={deleteItem}
        />}
        keyExtractor={item => item.id}
      /> */}
        <TouchableOpacity style={styles.btn}
          onPress={() => { navigation.navigate('RealTimeDetection') }}
        >
          <Text style={styles.btnText}>Take Photo</Text>
          <Icon name="plus" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}
          onPress={() => { navigation.navigate('TutorialMode') }}
        >
          <Text style={styles.btnText}>Tutorial Mode</Text>
          <Icon style={styles.icon} name="plus" size={20} />
        </TouchableOpacity>
      </View>
    );
  }



  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="RealTimeDetection" component={RealTimeDetection} />
        <Stack.Screen name="TutorialMode" component={TutorialMode} options={{ title: "My Tutorial" }} />
        <Stack.Screen
          name="CharacterCard"
          component={CharacterCard}
          options={({ route }) => ({ title: `Learning: ${route.params.character}` })}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    backgroundColor: 'darkslateblue',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnText: {
    color: '#fff',
    fontSize: 20
  },
  icon: {

  }
});

// color: '#fff',
//   fontSize: 23,
//     textAlign: 'center'

export default App;