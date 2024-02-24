import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../../utils/Colors';

interface ErrorViewProps {
  text: string;
}

export const ErrorView = (props: ErrorViewProps) => {
  const { text } = props;
  return (
    <View style={styles.error_container}>
      <Text style={styles.errorMessage}>{text}</Text>
    </View>
  );
};

interface EditProfileCustomInputProps {
  placeholder: string;
  leftIconComponent: React.ReactNode;
  showConnectingLine: boolean;
  value: string;
  onChangeText: (text: string) => void;
  errorText: string;
}

const EditProfileCustomInput = (props: EditProfileCustomInputProps) => {
  const {
    placeholder,
    leftIconComponent,
    showConnectingLine,
    value,
    onChangeText,
    errorText,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.custom_details_main_container}>
      <View style={styles.custom_details_image_container}>
        {<>{leftIconComponent}</>}
      </View>
      <View>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor='#00000080'
          style={[
            styles.custom_details_textinput,
            {
              borderBottomColor: isFocused ? Colors.PRIMARY : '#000000B2',
              borderBottomWidth: isFocused ? 2 : 1,
            },
          ]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          selectionColor='#CB375E'
          onChangeText={onChangeText}
        />
        {errorText && errorText ? <ErrorView text={errorText} /> : null}
      </View>
      {showConnectingLine && (
        <View style={styles.custom_details_connecting_lines} />
      )}
    </View>
  );
};

export default EditProfileCustomInput;

const styles = StyleSheet.create({
  custom_details_main_container: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  custom_details_image_container: {
    width: 45,
    height: 45,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.71,
    borderColor: '#000000E5',
    marginRight: 10,
  },
  custom_details_textinput: {
    width: 290,
    height: 40,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 15,
  },
  custom_details_connecting_lines: {
    position: 'absolute',
    left: 55,
    top: 57,
    width: 1,
    height: 25,
    backgroundColor: '#747474',
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
  error_container: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
