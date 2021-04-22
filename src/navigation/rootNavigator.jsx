import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper';

import { HomeTabNavigator } from './TabNavigators';
import DrawerContent from '../components/DrawerContent';
import { ContactStackScreen } from './StackNavigators';

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="home" component={HomeTabNavigator} />
        <Drawer.Screen
          name="contact-us"
          component={ContactStackScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
