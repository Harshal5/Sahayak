import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import Constants from 'expo-constants';
import * as SplashScreen from 'expo-splash-screen';
import { Animated, StyleSheet, View } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { AppearanceProvider } from 'react-native-appearance';

import Main from './src/Main';

SplashScreen.preventAutoHideAsync().catch(() => {
  // reloading the app might trigger some race conditions, ignore them.
});

const customFonts = {
  'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
  'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
};

export default function App() {
  return (
    <AnimatedAppLoader image={require('./assets/splash.png')}>
      <MainScreen />
    </AnimatedAppLoader>
  );
}

function MainScreen() {
  return (
    <AppearanceProvider>
      <Main />
    </AppearanceProvider>
  );
}

function AnimatedAppLoader({ children, image }) {
  const [isSplashReady, setSplashReady] = React.useState(false);
  const [fontsLoaded] = useFonts(customFonts);

  const startAsync = React.useMemo(
    () => () => Asset.fromModule(image).downloadAsync(),
    [image],
  );

  const onFinish = React.useMemo(() => setSplashReady(true), []);

  if (!isSplashReady && !fontsLoaded) {
    return (
      <AppLoading
        autoHideSplash={false}
        startAsync={startAsync}
        onError={console.error}
        onFinish={onFinish}
      />
    );
  }

  return (
    <AnimatedSplashScreen image={image}>
      {children}
    </AnimatedSplashScreen>
  );
}

function AnimatedSplashScreen({ children, image }) {
  const animation = React.useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = React.useState(false);
  const [
    isSplashAnimationComplete,
    setAnimationComplete,
  ] = React.useState(false);

  React.useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady]);

  const onImageLoaded = React.useMemo(() => async () => {
    try {
      await SplashScreen.hideAsync();
      await Promise.all([]);
    } catch (e) {
      console.log(e);
    } finally {
      setAppReady(true);
    }
  });

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor:
                Constants.manifest.splash.backgroundColor,
              opacity: animation,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode:
                Constants.manifest.splash.resizeMode || 'contain',
              transform: [
                {
                  scale: animation,
                },
              ],
            }}
            source={image}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}
