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
import { TouchableRipple, Button } from 'react-native-paper';
import FormData from 'form-data';
import * as ImagePicker from 'expo-image-picker';
import API from '../services/api';

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
});

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          console.log(
            'Sorry, we need camera roll permissions to make this work!',
          );
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    // let result = await ImagePicker.launchCameraAsync({
    //   allowsEditing: true,
    //   aspect: [4, 3],
    // });
    //
    // if (result.cancelled) {
    //   return;
    // }
    //
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }

    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = result.uri;
    let filename = localUri.split('/').pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    formData.append('file', { uri: localUri, name: filename, type });

    try {
      const res = await API.post('/predict', formData, {
        'content-type': 'multipart/form-data',
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        style={{ backgroundColor: 'black' }}
        title="Pick an image from camera roll"
        onPress={pickImage}
      />
      {/* {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200 }}
        />
      )} */}
    </View>
  );
}

async function takeAndUploadPhotoAsync() {
  // Display the camera to the user and wait for them to take a photo or to cancel
  // the action
  let result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [4, 3],
  });

  if (result.cancelled) {
    return;
  }

  // ImagePicker saves the taken photo to disk and returns a local URI to it
  let localUri = result.uri;
  let filename = localUri.split('/').pop();

  // Infer the type of the image
  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  // Upload the image using the fetch and FormData APIs
  let formData = new FormData();
  // Assume "photo" is the name of the form field the server expects
  formData.append('photo', { uri: localUri, name: filename, type });

  return await fetch(YOUR_SERVER_URL, {
    method: 'POST',
    body: formData,
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
}

// export default function CameraScreen() {
//   let camera;
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);
//
//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);
//
//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View style={styles.container}>
//       <Camera
//         style={styles.camera}
//         type={type}
//         ref={(r) => {
//           camera = r;
//         }}
//       >
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => {
//               setType(
//                 type === Camera.Constants.Type.back
//                   ? Camera.Constants.Type.front
//                   : Camera.Constants.Type.back,
//               );
//             }}
//           >
//             <Text style={styles.text}> Flip </Text>
//           </TouchableOpacity>
//           <TouchableRipple
//             style={{
//               width: 70,
//               height: 70,
//               right: -100,
//               bottom: -530,
//               borderRadius: 50,
//               backgroundColor: '#fff',
//               overflow: 'hidden',
//             }}
//             centered
//             rippleColor="rgba(0, 0, 0, .32)"
//             onPress={async () => {
//               try {
//                 const photo = await camera.takePictureAsync();
//                 console.log(photo);
//                 const formData = new FormData();
//                 formData.append('file', photo.uri);
//                 console.log(formData);
//                 const res = await API.post('/predict', formData, {
//                   headers: { 'Content-Type': 'multipart/form-data' },
//                 });
//                 // const res = await API.get('/test');
//                 console.log(res.data);
//               } catch (error) {
//                 console.log(error);
//               }
//             }}
//           >
//             <Text>Click</Text>
//           </TouchableRipple>
//         </View>
//       </Camera>
//     </View>
//   );
// }

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Alert,
//   ImageBackground,
//   Image,
// } from 'react-native';
// import { Camera } from 'expo-camera';

// let camera;
// export default function App() {
//   const [startCamera, setStartCamera] = React.useState(false);
//   const [previewVisible, setPreviewVisible] = React.useState(false);
//   const [capturedImage, setCapturedImage] = React.useState(null);
//   const [cameraType, setCameraType] = React.useState(
//     Camera.Constants.Type.back,
//   );
//   const [flashMode, setFlashMode] = React.useState('off');

//   const __startCamera = async () => {
//     const { status } = await Camera.requestPermissionsAsync();
//     console.log(status);
//     if (status === 'granted') {
//       setStartCamera(true);
//     } else {
//       Alert.alert('Access denied');
//     }
//   };
//   const __takePicture = async () => {
//     const photo = await camera.takePictureAsync();
//     console.log(photo);
//     setPreviewVisible(true);
//     //setStartCamera(false)
//     setCapturedImage(photo);
//   };
//   const __savePhoto = () => {};
//   const __retakePicture = () => {
//     setCapturedImage(null);
//     setPreviewVisible(false);
//     __startCamera();
//   };
//   const __handleFlashMode = () => {
//     if (flashMode === 'on') {
//       setFlashMode('off');
//     } else if (flashMode === 'off') {
//       setFlashMode('on');
//     } else {
//       setFlashMode('auto');
//     }
//   };
//   const __switchCamera = () => {
//     if (cameraType === 'back') {
//       setCameraType('front');
//     } else {
//       setCameraType('back');
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           flex: 1,
//           width: '100%',
//         }}
//       >
//         {previewVisible && capturedImage ? (
//           <CameraPreview
//             photo={capturedImage}
//             savePhoto={__savePhoto}
//             retakePicture={__retakePicture}
//           />
//         ) : (
//           <Camera
//             type={cameraType}
//             flashMode={flashMode}
//             style={{ flex: 1 }}
//             ref={(r) => {
//               camera = r;
//             }}
//           >
//             <View
//               style={{
//                 flex: 1,
//                 width: '100%',
//                 backgroundColor: 'transparent',
//                 flexDirection: 'row',
//               }}
//             >
//               <View
//                 style={{
//                   position: 'absolute',
//                   left: '5%',
//                   top: '10%',
//                   flexDirection: 'column',
//                   justifyContent: 'space-between',
//                 }}
//               >
//                 <TouchableOpacity
//                   onPress={__handleFlashMode}
//                   style={{
//                     backgroundColor:
//                       flashMode === 'off' ? '#000' : '#fff',
//                     borderRadius: '50%',
//                     height: 25,
//                     width: 25,
//                   }}
//                 >
//                   <Text
//                     style={{
//                       fontSize: 20,
//                     }}
//                   >
//                     ⚡️
//                   </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={__switchCamera}
//                   style={{
//                     marginTop: 20,
//                     borderRadius: '50%',
//                     height: 25,
//                     width: 25,
//                   }}
//                 >
//                   <Text
//                     style={{
//                       fontSize: 20,
//                     }}
//                   >
//                     {cameraType === 'front' ? '🤳' : '📷'}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//               <View
//                 style={{
//                   position: 'absolute',
//                   bottom: 0,
//                   flexDirection: 'row',
//                   flex: 1,
//                   width: '100%',
//                   padding: 20,
//                   justifyContent: 'space-between',
//                 }}
//               >
//                 <View
//                   style={{
//                     alignSelf: 'center',
//                     flex: 1,
//                     alignItems: 'center',
//                   }}
//                 >
//                   <TouchableOpacity
//                     onPress={__takePicture}
//                     style={{
//                       width: 70,
//                       height: 70,
//                       bottom: 0,
//                       borderRadius: 50,
//                       backgroundColor: '#fff',
//                     }}
//                   />
//                 </View>
//               </View>
//             </View>
//           </Camera>
//         )}
//       </View>
//       }
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// const CameraPreview = ({ photo, retakePicture, savePhoto }: any) => {
//   console.log('sdsfds', photo);
//   return (
//     <View
//       style={{
//         backgroundColor: 'transparent',
//         flex: 1,
//         width: '100%',
//         height: '100%',
//       }}
//     >
//       <ImageBackground
//         source={{ uri: photo && photo.uri }}
//         style={{
//           flex: 1,
//         }}
//       >
//         <View
//           style={{
//             flex: 1,
//             flexDirection: 'column',
//             padding: 15,
//             justifyContent: 'flex-end',
//           }}
//         >
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//             }}
//           >
//             <TouchableOpacity
//               onPress={retakePicture}
//               style={{
//                 width: 130,
//                 height: 40,

//                 alignItems: 'center',
//                 borderRadius: 4,
//               }}
//             >
//               <Text
//                 style={{
//                   color: '#fff',
//                   fontSize: 20,
//                 }}
//               >
//                 Re-take
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={savePhoto}
//               style={{
//                 width: 130,
//                 height: 40,

//                 alignItems: 'center',
//                 borderRadius: 4,
//               }}
//             >
//               <Text
//                 style={{
//                   color: '#fff',
//                   fontSize: 20,
//                 }}
//               >
//                 save photo
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };
