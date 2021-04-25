/* eslint-disable react/prop-types */
import React from 'react';
import { Appbar, IconButton, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = (props) => {
  const theme = useTheme();
  console.log(props);
  const { scene, previous, navigation } = props;
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <SafeAreaView>
      <Appbar.Header>
        {previous ? (
          <Appbar.BackAction onPress={() => navigation.goBack()} />
        ) : (
          <Appbar.Action
            icon="menu"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        )}
        <Appbar.Content title={title} />
      </Appbar.Header>
    </SafeAreaView>
  );
};

export default Header;
