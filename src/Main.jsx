import React, { useState } from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native-appearance';
import merge from 'deepmerge';

import PreferencesContext from './context/PreferencesContext';
import RootNavigator from './navigation/rootNavigator';

import OnBoardingScreen from './screens/OnBoardingScreen';

const CombinedDefaultTheme = merge(
  PaperDefaultTheme,
  NavigationDefaultTheme,
);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const DefaultTheme = {
  ...CombinedDefaultTheme,
  roundness: 16,
  colors: {
    ...CombinedDefaultTheme.colors,
    background: '#f4f5f7',
    primary: '#5664d2',
    // card: ''
    accent: '#5961a3',
    surface: '#ffffff',
    text: '#172b4d',
  },
};

const DarkTheme = {
  ...CombinedDarkTheme,
  roundness: 16,
  colors: {
    ...CombinedDarkTheme.colors,
    background: '#12161d',
    primary: '#62aaff',
    accent: '#0d235c',
    surface: '#1b222b',
    text: '#aba398',
  },
};

const Main = () => {
  const colorScheme = useColorScheme();
  const [isThemeDark, setIsThemeDark] = useState(
    colorScheme === 'dark',
  );

  const [onBoarding, setOnBoarding] = useState(true);

  const theme = isThemeDark ? DarkTheme : DefaultTheme;

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

  return (
    <PreferencesContext.Provider value={preferences}>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            {onBoarding ? (
              <OnBoardingScreen
                visibleOnboarding={() => setOnBoarding(false)}
              />
            ) : (
              <RootNavigator />
            )}
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </PreferencesContext.Provider>
  );
};

export default Main;
