import react from 'react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import { Title, TextInput, Button, List, Avatar, Card, Paragraph, HelperText } from 'react-native-paper';
import StringImages from "../components/StringImages";
var count = 0;

// const CharCard = (props) => {
//     console.log("props.item:", props.item);
//     const getPath = (item) => {
//         switch (item) {
//             case 'a': return <Image source={require('../../assets/img/a.png')} />
//             case 'b': return <Image source={require('../../assets/img/b.png')} />
//             case 'c': return <Image source={require('../../assets/img/c.png')} />
//             case 'd': return <Image source={require('../../assets/img/d.png')} />
//             case 'i': return <Image source={require('../../assets/img/i.png')} />
//             case 'p': return <Image source={require('../../assets/img/p.png')} />
//             case 'q': return <Image source={require('../../assets/img/q.png')} />
//             case 't': return <Image source={require('../../assets/img/t.png')} />
//             case 'n': return <Image source={require('../../assets/img/n.png')} />
//             case 'w': return <Image source={require('../../assets/img/w.png')} />
//             case 'x': return <Image source={require('../../assets/img/x.png')} />
//             case 'y': return <Image source={require('../../assets/img/y.png')} />
//             case 'o': return <Image source={require('../../assets/img/o.png')} />
//             case 'z': return <Image source={require('../../assets/img/z.png')} />
//             case '1': return <Image source={require('../../assets/img/1.png')} />
//             case '2': return <Image source={require('../../assets/img/2.png')} />
//             case '4': return <Image source={require('../../assets/img/4.png')} />
//             case '5': return <Image source={require('../../assets/img/5.png')} />
//             case '7': return <Image source={require('../../assets/img/7.png')} />
//             case '9': return <Image source={require('../../assets/img/9.png')} />
//             case 'f': return <Image source={require('../../assets/img/f.png')} />
//             case 'g': return <Image source={require('../../assets/img/g.png')} />
//             case 'm': return <Image source={require('../../assets/img/m.png')} />
//             default: return <Image style={{ height: 200, width: 200 }} source={require('../../assets/img/not-found.jpg')} />
//         }
//     }
//     return (

//         <Card>
//             <Card.Title title={props.item} />
//             <Card.Content>
//                 {getPath(props.item)}
//             </Card.Content>
//         </Card>

//     );
// }

// const StringImages = (props) => {
//     var arr = props.text.split('');
//     return (
//         <View>
//             <FlatList
//                 data={arr}
//                 renderItem={CharCard}
//             // key={count++}
//             // keyExtractor={() => Math.floor((new Date()).getTime() / 1000 + count++)}
//             />
//         </View>
//     );
// }


import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


// function validateText(value) {
//     let error;
//     if (!value) {
//         error = 'Required';
//     } else if (!/^[a-z]|^[0-9]/i.test(value)) {
//         error = 'Invalid String';
//     }
//     return error;
// }

const FormTextInput = (props) => {
    const {
        field: { name, onBlur, onChange, value },
        form: { errors, touched, setFieldTouched },
        ...inputProps
    } = props;



    const error = errors[name];
    // console.log("name:", name);
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
    const [text, setText] = React.useState('');
    const [showImages, setShowImages] = react.useState(false);

    const initialValues = { text: "" };

    return (
        <View>
            <Formik
                initialValues={initialValues}
                // validationSchema={validateText}
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
                        />
                        <Button icon="send" mode="contained" onPress={handleSubmit}>
                            Submit
                    </Button>
                    </View>
                )}
            </Formik>

            {showImages &&
                <StringImages text={text} />

            }

        </View>
    );
}


// function TextToGestureScreen() {
//     const [text, setText] = React.useState('');
//     const [showImages, setShowImages] = react.useState(false);

//     const styles = StyleSheet.create({
//         container: {
//             flex: 1,
//         },
//         textInput: {
//             marginHorizontal: 5,
//         }
//     });


//     const submitText = (text) => {
//         console.log("Sending request to server: text:", text);
//         setShowImages(true);
//     }

//     return (
//         <View style={styles.container}>
//             <Title>Text To Gesture</Title>
//             <TextInput
//                 label="Enter String Here"
//                 value={text}
//                 onChangeText={text => setText(text)}
//             />
//             <Button mode="contained" onPress={() => submitText(text)}>
//                 Press Me
//             </Button>
//             {showImages &&
//                 <StringImages text={text} />
//             }
//         </View>
//     );
// }

export default TextToGestureScreen;
