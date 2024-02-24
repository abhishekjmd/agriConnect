import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';

type buttonProps = {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
  loading?: boolean;
};

export default function Button(props: buttonProps) {
  const { title, onPress, style, textStyle, loading } = props;
  return (
    <TouchableOpacity
      disabled={loading}
      style={[styles.button, style]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color="white" size={'small'} />
      ) : (
        <Text style={[styles.btnText, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 36,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});
