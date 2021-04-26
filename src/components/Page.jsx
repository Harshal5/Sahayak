import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const Page = ({ title, info1, info2 }) => {
  return (
    <View>
      <Text style={styles.text1}>{title}</Text>
      <Text style={styles.text2}>{info1}</Text>
      <Text style={styles.text3}>{info2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    justifyContent: 'center',
    fontSize: 28,
    fontFamily: 'Montserrat-Bold',
    color: '#555555',
    textAlign: 'center',
  },
  text2: {
    marginTop: 75,
    fontSize: 20,
    color: '#6D6D64',
    textAlign: 'center',
  },
  text3: {
    paddingTop: 18,
    fontSize: 20,
    padding: 10,
    color: '#6D6D64',
    textAlign: 'center',
  },
});

export default Page;
