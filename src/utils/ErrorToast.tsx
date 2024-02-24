import Toast from 'react-native-toast-message';

export const ErrorToast = (type, text, message) => {
  return Toast.show({
    type: type,
    text1: text ? text : '',
    text2: message ? message : '',
    visibilityTime: 2000,
    autoHide: true,
    topOffset: 30,
  });
};
