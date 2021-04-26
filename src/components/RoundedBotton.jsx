import React from 'react';
import { TouchableRipple, Text } from 'react-native-paper';

const RoundedButton = ({ label, onPress }) => (
  <TouchableRipple
    style={{ alignItems: 'center', justifyContent: 'center' }}
    onPress={onPress}
  >
    <Text
      style={{
        fontSize: 22,
        color: '#000',
        fontFamily: 'Montserrat-Bold',
      }}
    >
      {label}
    </Text>
  </TouchableRipple>
);

export default RoundedButton;
