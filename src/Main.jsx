import React, { useCallback, useEffect, useState } from 'react';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useColorScheme } from 'react-native-appearance';
import merge from 'deepmerge';

import PreferencesContext from './context/PreferencesContext';
import RootNavigator from './navigation/rootNavigator';

const CombinedDefaultTheme = merge(
  PaperDefaultTheme,
  NavigationDefaultTheme,
);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const Main = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const colorScheme = useColorScheme();
  const [isThemeDark, setIsThemeDark] = React.useState(
    colorScheme === 'dark',
  );

  const theme = isThemeDark
    ? CombinedDarkTheme
    : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );
  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 4000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <RootNavigator />
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

export default Main;
