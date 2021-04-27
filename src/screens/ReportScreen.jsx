import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import LottieView from 'lottie-react-native';
import { FormTextInput } from '../components/FormInput';
import API from '../services/api';

const TextToGestureScreen = () => {
  const initialValues = { subject: '', description: '' };
  const [snackbar, setSnackbar] = useState('');
  const validationSchema = Yup.object({
    subject: Yup.string().required('Subject is required'),
    description: Yup.string(),
  });

  return (
    <View>
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <View height={100} width={100}>
          <LottieView
            autoPlay
            height={100}
            width={100}
            source={require('../../assets/animations/31626-e-mail.json')}
          />
        </View>
      </View>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          // console.log(values);
          try {
            const res = await API.post('/bug', values);
            console.log(res);
            setSnackbar('Report Submitted');
          } catch (error) {
            console.log(error);
            setSnackbar('Error Submitting Report');
          }
        }}
      >
        {({ handleSubmit }) => (
          <View style={{ margin: 10, padding: 10 }}>
            <Field
              component={FormTextInput}
              label="Subject"
              name="subject"
            />
            <Field
              component={FormTextInput}
              name="description"
              label="Description"
              multiline
              numberOfLines={10}
            />
            <Button
              icon="send"
              mode="contained"
              onPress={handleSubmit}
            >
              Report
            </Button>
          </View>
        )}
      </Formik>
      <Snackbar
        visible={snackbar !== ''}
        onDismiss={() => setSnackbar('')}
        action={{
          label: 'Okay',
          onPress: () => {
            setSnackbar('');
          },
        }}
      >
        {snackbar}
      </Snackbar>
    </View>
  );
};

export default TextToGestureScreen;
