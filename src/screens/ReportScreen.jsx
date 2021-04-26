import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { FormTextInput } from '../components/FormInput';
import API from '../services/api';

const TextToGestureScreen = () => {
  const initialValues = { subject: '', description: '' };
  const validationSchema = Yup.object({
    subject: Yup.string().required('Subject is required'),
    description: Yup.string(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        // console.log(values);
        try {
          const res = await API.post('/bug', values);
          console.log(res);
        } catch (error) {
          console.log(error);
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
          <Button icon="send" mode="contained" onPress={handleSubmit}>
            Report
          </Button>
        </View>
      )}
    </Formik>
  );
};

export default TextToGestureScreen;
