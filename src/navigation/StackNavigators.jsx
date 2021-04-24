import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import { ThemeProvider, useTheme } from '@react-navigation/native';

import GestureRecognitionScreen from '../screens/GestureRecognitionScreen';
import TextToGestureScreen from '../screens/TextToGestureScreen';
import QuizScreen from '../screens/QuizScreen';
import ContactScreen from '../screens/ReportScreen';
import QuizGestureRecognitionScreen from '../screens/QuizGestureRecognitionScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';

const GestureRecognitionStack = createStackNavigator();
const TextToGestureStack = createStackNavigator();
const QuizStack = createStackNavigator();
const ContactStack = createStackNavigator();
const AboutStack = createStackNavigator();
const OnBoardingStack = createStackNavigator();

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
  transitionSpec: {
    open: { animation: 'spring' },
    close: { animation: 'spring' },
  },
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

export const ReportStackScreen = () => {
  const theme = useTheme();
  return (
    <ContactStack.Navigator
      screenOptions={(props) =>
        defaultStackOptions(theme, props.navigation)
      }
    >
      <ContactStack.Screen
        name="Report Bug"
        component={ContactScreen}
      />
    </ContactStack.Navigator>
  );
};

export const AboutStackScreen = () => {
  const theme = useTheme();
  return (
    <AboutStack.Navigator
      screenOptions={(props) =>
        defaultStackOptions(theme, props.navigation)
      }
    >
      <AboutStack.Screen name="About Us" component={AboutUsScreen} />
    </AboutStack.Navigator>
  );
};

export const OnBoardingStackScreen = () => {
  const theme = useTheme();
  return (
    <OnBoardingStack.Navigator
      screenOptions={(props) =>
        defaultStackOptions(theme, props.navigation)
      }
    >
      <OnBoardingStack.Screen
        name="onboarding"
        component={OnBoardingScreen}
      />
    </OnBoardingStack.Navigator>
  );
};
