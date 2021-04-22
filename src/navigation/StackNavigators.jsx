import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import { ThemeProvider, useTheme } from '@react-navigation/native';

import GestureRecognitionScreen from '../screens/GestureRecognitionScreen';
import TextToGestureScreen from '../screens/TextToGestureScreen';
import QuizScreen from '../screens/QuizScreen';
import ContactScreen from '../screens/ContactScreen';
import QuizGestureRecognitionScreen from '../screens/QuizGestureRecognitionScreen';

const GestureRecognitionStack = createStackNavigator();
const TextToGestureStack = createStackNavigator();
const QuizStack = createStackNavigator();
const ContactStack = createStackNavigator();

const defaultStackOptions = (theme, navigation) => ({
  headerStyle: {
    backgroundColor: theme.dark
      ? theme.colors.card
      : theme.colors.primary,
  },
  headerTintColor: theme.dark
    ? theme.colors.text
    : theme.colors.background,
  headerLeft: () => (
    <IconButton
      onPress={() => navigation.openDrawer()}
      color={theme.dark ? theme.colors.text : theme.colors.background}
      icon="menu"
    />
  ),
});

export const GestureRecognitionStackScreen = () => {
  const theme = useTheme();
  return (
    <GestureRecognitionStack.Navigator
      screenOptions={(props) =>
        defaultStackOptions(theme, props.navigation)
      }
    >
      <GestureRecognitionStack.Screen
        name="Gesture Recognition"
        component={GestureRecognitionScreen}
      />
    </GestureRecognitionStack.Navigator>
  );
};

export const TextToGestureStackScreen = () => {
  const theme = useTheme();
  return (
    <TextToGestureStack.Navigator
      screenOptions={(props) =>
        defaultStackOptions(theme, props.navigation)
      }
    >
      <TextToGestureStack.Screen
        name="Text To Gesture"
        component={TextToGestureScreen}
      />
    </TextToGestureStack.Navigator>
  );
};

export const QuizStackScreen = () => {
  const theme = useTheme();
  return (
    <QuizStack.Navigator
      screenOptions={(props) =>
        defaultStackOptions(theme, props.navigation)
      }
    >
      <QuizStack.Screen name="Quiz" component={QuizScreen} />
      <QuizStack.Screen
        name="Guess"
        component={QuizGestureRecognitionScreen}
      />
    </QuizStack.Navigator>
  );
};

export const ContactStackScreen = () => {
  const theme = useTheme();
  return (
    <ContactStack.Navigator
      screenOptions={(props) =>
        defaultStackOptions(theme, props.navigation)
      }
    >
      <ContactStack.Screen name="Contact" component={ContactScreen} />
    </ContactStack.Navigator>
  );
};
