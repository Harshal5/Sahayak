import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

const CameraPreview = ({ photo }) => (
  <View
    style={{
      // backgroundColor: 'transparent',
      opacity: 0.1,
      backgroundColor: 'black',
      flex: 1,
      width: '100%',
      height: '100%',
    }}
  >
    <ImageBackground
      source={{ uri: photo && photo.uri }}
      style={{
        flex: 1,
      }}
    />
  </View>
);

export default CameraPreview;
