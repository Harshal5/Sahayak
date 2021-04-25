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
  roundness: 20,
  colors: {
    ...CombinedDefaultTheme.colors,
    background: '#ffffff',
    primary: '#007bff',
    // card: ''
    accent: '#201aa2dd',
    text: '#6c757d',
  },
};

const DarkTheme = {
  ...CombinedDarkTheme,
  roundness: 2,
  colors: {
    ...CombinedDarkTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
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
            {/* {onBoarding ? (
              <OnBoardingScreen
                visibleOnboarding={() => setOnBoarding(false)}
              />
            ) : ( */}
            <RootNavigator />
            {/* )} */}
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </PreferencesContext.Provider>
  );
};

export default Main;
