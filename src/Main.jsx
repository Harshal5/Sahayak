import React, { useState } from 'react';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
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

const Main = () => {
  const colorScheme = useColorScheme();
  const [isThemeDark, setIsThemeDark] = useState(
    colorScheme === 'dark',
  );

  const [onBoarding, setOnBoarding] = useState(true);

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

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        {onBoarding ? (
          <OnBoardingScreen
            visibleOnboarding={() => setOnBoarding(false)}
          />
        ) : (
          <RootNavigator />
        )}
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

export default Main;
