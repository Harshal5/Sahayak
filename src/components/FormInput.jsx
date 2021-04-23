import React from 'react';
import { View } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

export const FormTextInput = (props) => {
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
        onChangeText={(text) => onChange(name)(text)}
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
};

export const FormInput = () => {};
