import { View, TextStyle, StyleSheet, TextInput } from 'react-native';
import React from 'react';

interface TextInputProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'visible-password'
    | any;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  style?: TextStyle | any;
  value?: string;
  editable?: boolean;
  maxLength?: number;
  secureTextEntry?: boolean;
  input_style?: TextStyle;
  returnKeyLabel?: string;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  onSubmitEditing?: () => void;
  handlePress?: () => void;
  defaultValue?: string;
  leftIcon?: boolean;
  leftIconComponent?: React.ReactNode;
  multiline?: boolean;
}

export default function CustomInput(props: TextInputProps) {
  const {
    placeholder,
    autoCapitalize,
    onChangeText,
    keyboardType,
    style,
    value,
    editable,
    maxLength,
    secureTextEntry,
    input_style,
    returnKeyLabel,
    returnKeyType,
    onSubmitEditing,
    handlePress,
    defaultValue,
    leftIcon,
    leftIconComponent,
    multiline,
  } = props;
  return (
    <View style={[styles.input_container, style]}>
      {leftIcon && <>{leftIconComponent}</>}
      <TextInput
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={editable}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#00000066"
        style={[styles.input, input_style]}
        onSubmitEditing={onSubmitEditing}
        returnKeyLabel={returnKeyLabel}
        returnKeyType={returnKeyType}
        onPressIn={handlePress}
        defaultValue={defaultValue}
        value={value}
        multiline={multiline}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    color: 'white',
    fontSize: 13,
    backgroundColor: 'white',
  },
  input_container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
