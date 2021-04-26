import React from 'react';
import { TouchableRipple, Text } from 'react-native-paper';

const RoundedButton = ({ label, onPress }) => {
  return (
    <TouchableRipple
      style={{ alignItems: 'center', justifyContent: 'center' }}
      onPress={onPress}
    >
      <Text
        style={{ fontSize: 22, color: '#000', fontWeight: 'bold' }}
      >
        {label}
      </Text>
    </TouchableRipple>
  );
};

export default RoundedButton;
