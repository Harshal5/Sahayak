import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  QuizStackScreen,
  GestureRecognitionStackScreen,
  TextToGestureStackScreen,
} from './StackNavigators';
import { useTheme } from '@react-navigation/native';

const HomeTab = createMaterialBottomTabNavigator();

export const HomeTabNavigator = () => {
  const theme = useTheme();
  return (
    <HomeTab.Navigator
      shifting
      barStyle={{ backgroundColor: theme.colors.surface }}
      initialRouteName="GestureRecognition"
    >
      <HomeTab.Screen
        name="GestureRecognition"
        component={GestureRecognitionStackScreen}
        options={{
          tabBarLabel: 'Gesture',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="hand"
              color={color}
              size={22}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="TextToGesture"
        component={TextToGestureStackScreen}
        options={{
          tabBarLabel: 'Text',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-text-rotation-none"
              color={color}
              size={22}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="Quiz"
        component={QuizStackScreen}
        options={{
          tabBarLabel: 'Quiz',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="brain"
              color={color}
              size={22}
            />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
};

export default HomeTabNavigator;
