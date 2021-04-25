import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Headline,
  useTheme,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PreferencesContext from '../context/PreferencesContext';

const DrawerContent = ({ navigation, ...props }) => {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(
    PreferencesContext,
  );
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <Drawer.Section style={styles.drawerSection}>
          <View style={styles.userInfoSection}>
            <MaterialCommunityIcons
              name="alpha-s-box-outline"
              size={40}
              style={{ paddingBottom: 8 }}
              color={theme.colors.text}
            />
            <Headline>Sahayak</Headline>
          </View>
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
              />
            )}
            label="Home"
            onPress={() => {
              navigation.navigate('home');
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="bug-outline"
                color={color}
                size={size}
              />
            )}
            label="Report Bug"
            onPress={() => {
              navigation.navigate('report');
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="About Us"
            onPress={() => {
              navigation.navigate('about');
            }}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View>
                <Switch
                  value={isThemeDark}
                  onValueChange={toggleTheme}
                />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
