import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Divider, Provider } from 'react-native-paper';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { FormTextInput } from '../components/FormInput';
import StringImages from '../components/StringImages';

function TextToGestureScreen() {
  const [text, setText] = React.useState('');
  // Make this false
  const [showImages, setShowImages] = React.useState(true);
  const initialValues = { text: '' };

  const validationSchema = Yup.object({
    text: Yup.string()
      .required('Please enter the required field')
      .matches(
        /^[aA0-zZ9\s]+$/,
        'Only alphabets are allowed for this field ',
      ),
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('values:', values.text);
          setText(values.text);
          setShowImages(true);
        }}
      >
        {({ handleSubmit }) => (
          <View style={{ margin: 10, padding: 10 }}>
            <Field
              name="text"
              label="Text"
              component={FormTextInput}
              //   style={styles.TextInput}
            />
            <Button
              //   style={styles.btn}
              icon="send"
              mode="contained"
              onPress={handleSubmit}
            >
              Submit
            </Button>
          </View>
        )}
      </Formik>
      <Divider style={styles.divider} />
      {showImages && (
        <View>
          <StringImages text={text} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  StringImages: {
    // height: 400,
    // backgroundColor: '#ffe6e6',
  },
  container: {
    flex: 1,
    // backgroundColor: '#f2f2f2',
  },
  TextInput: {
    marginTop: 20,
  },
  divider: {
    // color: 'black',
    margin: 5,

    // backgroundColor: '#64e764',
    // fontSize: 100,
  },
});

export default TextToGestureScreen;
