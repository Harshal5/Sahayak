import react from 'react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import { Title, TextInput, Button, List, Avatar, Card, Paragraph, HelperText, Divider } from 'react-native-paper';
import StringImages from "../components/StringImages";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';



const FormTextInput = (props) => {
    const {
        field: { name, onBlur, onChange, value },
        form: { errors, touched, setFieldTouched },
        ...inputProps
    } = props;

    const error = errors[name];

    return (
        <View>
            <TextInput
                value={value}
                onChangeText={(text) => {
                    // console.log("testchange:", text);
                    onChange(name)(text);
                }}
                onBlur={() => {
                    setFieldTouched(name);
                    onBlur(name);
                }}
                error={error && touched}
                {...inputProps}
            />
            <HelperText type="error" visible={error && touched}>
                {error}
            </HelperText>
        </View>
    );
}




function TextToGestureScreen() {
    const [text, setText] = React.useState("");
    // Make this false
    const [showImages, setShowImages] = react.useState(true);
    const initialValues = { text: "" };

    const validationSchema = Yup.object({
        text: Yup.string()
            .required("Please enter the required field")
            .matches(/^[aA0-zZ9\s]+$/, "Only alphabets are allowed for this field ")
    })


    return (
        <View style={styles.container}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => {
                    console.log("values:", values.text);
                    setText(values.text);
                    setShowImages(true);
                }}
            >
                {({ handleSubmit }) => (
                    <View >
                        <Field
                            name="text"
                            label="text"
                            component={FormTextInput}
                            style={styles.TextInput}
                        />
                        <Button style={styles.btn} icon="send" mode="contained" onPress={handleSubmit}>
                            Submit
                    </Button>
                    </View>
                )}
            </Formik>
            <Divider style={styles.divider} />
            {showImages &&
                <View>
                    <StringImages text={text} />
                </View>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    StringImages: {
        // height: 400,
        backgroundColor: '#ffe6e6',
    },
    container: {
        height: '100%',
        backgroundColor: '#f2f2f2',
    },
    btn: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        shadowRadius: 2,
        backgroundColor: '#64e764'
    },
    TextInput: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
    },
    divider: {
        color: 'black',
        marginTop: 5,
        backgroundColor: '#64e764',
        fontSize: 100,
    }
})


export default TextToGestureScreen;
