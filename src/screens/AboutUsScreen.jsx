import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import {
  Button,
  Subheading,
  Title,
  Paragraph,
  useTheme,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AboutUsScreen = () => {
  const { colors } = useTheme();
  const loadInBrowser = () => {
    // console.log('SDi');
    Linking.openURL('https://gitlab.com/kanhaiya38/sahayak/');
  };

  return (
    <View style={styles.surface}>
      <MaterialCommunityIcons
        name="alpha-s-box-outline"
        size={150}
        color={colors.text}
      />
      <Title>Sahayak</Title>
      <Subheading>An Indian Sign Language Translator</Subheading>
      <Paragraph style={styles.paragraph}>
        Communication is one of the basic requirements for survival in
        society. Deaf and dumb people communicate among themselves
        using sign language but normal people find it difficult to
        understand their language.
      </Paragraph>
      <Paragraph style={styles.paragraph}>
        This project aims toward developing a platform that reduces
        the communication barrier between normal and hearing-impaired
        people.
      </Paragraph>
      <Paragraph style={styles.paragraph}>
        Feel free to contribute. For major changes, please open an
        issue first to discuss what you would like to change :
      </Paragraph>
      <Button
        style={styles.button}
        mode="outlined"
        onPress={() => {
          Linking.openURL('https://gitlab.com/kanhaiya38/sahayak/');
        }}
      >
        GitLab &nbsp;
        <MaterialCommunityIcons name="open-in-new" size={16} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  surface: {
    alignItems: 'center',
    elevation: 4,
    overflow: 'hidden',
    // backgroundColor: '#fff',
    paddingTop: 25,
    paddingBottom: 100,
  },
  title: {
    textAlign: 'center',
  },
  subheading: {
    textAlign: 'center',
  },
  paragraph: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
  },
  button: {
    color: 'blue',
    margin: 10,
    padding: 5,
  },
});

export default AboutUsScreen;
