import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import { Camera } from 'expo-camera';
import {
  TouchableRipple,
  Button,
  ActivityIndicator,
} from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import FormData from 'form-data';
import API from '../services/api';
import CameraPreview from './CameraPreview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function CameraScreen({ predict }) {
  let camera;
  const [hasPermission, setHasPermission] = useState(null);
  const [startCamera, setStartCamera] = React.useState(false);
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const [capturedImage, setCapturedImage] = React.useState(null);
  const [loading, setLoading] = useState(false);
  const [cameraType, setCameraType] = React.useState(
    Camera.Constants.Type.back,
  );
  const isFocused = useIsFocused();
  const [flashMode, setFlashMode] = React.useState('off');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    try {
      setLoading(true);
      const photo = await camera.takePictureAsync();
      setCapturedImage(photo);
      // setPreviewVisible(true);
      console.log(photo);
      const localUri = photo.uri;
      const filename = localUri.split('/').pop();

      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      let formData = new FormData();
      formData.append('file', {
        uri: localUri,
        name: filename,
        type,
      });
      const res = await API.post('/predict', formData, {
        'content-type': 'multipart/form-data',
      });
      console.log(res.data);
      setLoading(false);
      predict(res.data.prediction);
      setPreviewVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  const flipCamera = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    );
  };

  if (hasPermission === null || !isFocused) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {previewVisible && capturedImage ? (
        <CameraPreview photo={capturedImage} />
      ) : (
        <Camera
          style={styles.camera}
          type={cameraType}
          useCamera2Api
          ref={(r) => {
            camera = r;
          }}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={flipCamera}
              disabled={loading}
            >
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
            <TouchableRipple
              style={{
                width: 70,
                height: 70,
                right: -100,
                bottom: -530,
                borderRadius: 50,
                backgroundColor: '#fff',
                overflow: 'hidden',
              }}
              centered
              rippleColor="rgba(0, 0, 0, .32)"
              onPress={takePicture}
              disabled={loading}
            >
              <Text>Click</Text>
            </TouchableRipple>
          </View>
          {loading && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" animating />
            </View>
          )}
        </Camera>
      )}
    </View>
  );
}
