import React from 'react';
import {
  createStackNavigator,
  TransitionSpecs,
} from '@react-navigation/stack';
import GestureRecognitionScreen from '../screens/GestureRecognitionScreen';
import TextToGestureScreen from '../screens/TextToGestureScreen';
import QuizScreen from '../screens/QuizScreen';
import ContactScreen from '../screens/ReportScreen';
import QuizGestureRecognitionScreen from '../screens/QuizGestureRecognitionScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import Appbar from '../components/Appbar';

const GestureRecognitionStack = createStackNavigator();
const TextToGestureStack = createStackNavigator();
const QuizStack = createStackNavigator();
const ContactStack = createStackNavigator();
const AboutStack = createStackNavigator();
const OnBoardingStack = createStackNavigator();

// const defaultStackOptions = (theme, navigation) => ({
//   headerStyle: {
//     backgroundColor: theme.dark
//       ? theme.colors.card
//       : theme.colors.primary,
//   },
//   headerTintColor: theme.dark
//     ? theme.colors.text
//     : theme.colors.background,
//   headerLeft: () => (
//     <IconButton
//       onPress={() => navigation.openDrawer()}
//       color={theme.dark ? theme.colors.text : theme.colors.background}
//       icon="menu"
//     />
//   ),
//   transitionSpec: {
//     open: { animation: 'spring' },
//     close: { animation: 'spring' },
//   },
// });

const defaultStackOptions = {
  header: (props) => <Appbar {...props} />,
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
};

export const GestureRecognitionStackScreen = () => (
  <GestureRecognitionStack.Navigator
    screenOptions={defaultStackOptions}
  >
    <GestureRecognitionStack.Screen
      name="Gesture Recognition"
      component={GestureRecognitionScreen}
    />
  </GestureRecognitionStack.Navigator>
);

export const TextToGestureStackScreen = () => (
  <TextToGestureStack.Navigator screenOptions={defaultStackOptions}>
    <TextToGestureStack.Screen
      name="Text To Gesture"
      component={TextToGestureScreen}
    />
  </TextToGestureStack.Navigator>
);

export const QuizStackScreen = () => (
  <QuizStack.Navigator screenOptions={defaultStackOptions}>
    <QuizStack.Screen name="Quiz" component={QuizScreen} />
    <QuizStack.Screen
      name="Guess"
      component={QuizGestureRecognitionScreen}
    />
  </QuizStack.Navigator>
);

export const ReportStackScreen = () => (
  <ContactStack.Navigator screenOptions={defaultStackOptions}>
    <ContactStack.Screen
      name="Report Bug"
      component={ContactScreen}
    />
  </ContactStack.Navigator>
);

export const AboutStackScreen = () => (
  <AboutStack.Navigator screenOptions={defaultStackOptions}>
    <AboutStack.Screen name="About Us" component={AboutUsScreen} />
  </AboutStack.Navigator>
);

export const OnBoardingStackScreen = () => (
  <OnBoardingStack.Navigator screenOptions={defaultStackOptions}>
    <OnBoardingStack.Screen
      name="onboarding"
      component={OnBoardingScreen}
    />
  </OnBoardingStack.Navigator>
);
