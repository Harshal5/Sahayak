import React from 'react';
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

const CombinedDefaultTheme = merge(
  PaperDefaultTheme,
  NavigationDefaultTheme,
);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const Main = () => {
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

  //   return (
  //     <PreferencesContext.Provider value={preferences}>
  //       <PaperProvider theme={theme}>
  //         <NavigationContainer theme={theme}>
  //           <Drawer.Navigator
  //             drawerContent={DrawerContent}
  //             initialRouteName="Home"
  //           >
  //             <Drawer.Screen
  //               name="Home"
  //               component={HomeTabScreen}
  //               options={{
  //                 drawerLabel: 'Home',
  //                 drawerIcon: ({ color }) => (
  //                   <MaterialCommunityIcons
  //                     name="home"
  //                     color={color}
  //                     size={22}
  //                   />
  //                 ),
  //               }}
  //             />
  //             <Drawer.Screen
  //               name="Contact Us"
  //               component={ContactStackScreen}
  //               options={{
  //                 drawerLabel: 'Contact Us',
  //                 drawerIcon: ({ color }) => (
  //                   <MaterialCommunityIcons
  //                     name="email"
  //                     color={color}
  //                     size={22}
  //                   />
  //                 ),
  //               }}
  //             />
  //             <Drawer.Screen
  //               name="Settings"
  //               component={SettingsStackScreen}
  //               options={{
  //                 drawerLabel: 'Settings',
  //                 drawerIcon: ({ color }) => (
  //                   <MaterialCommunityIcons
  //                     name="cog"
  //                     color={color}
  //                     size={22}
  //                   />
  //                 ),
  //               }}
  //             />
  //           </Drawer.Navigator>
  //         </NavigationContainer>
  //       </PaperProvider>
  //     </PreferencesContext.Provider>
  //   );
  // };
  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <RootNavigator />
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

export default Main;
