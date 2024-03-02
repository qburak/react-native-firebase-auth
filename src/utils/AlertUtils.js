import { Alert } from 'react-native';

export const customAlert = (title, message) => {
  Alert.alert(title, message, [{ text: "Tamam" }], { cancelable: false });
};
export const customAlertAction = (title, message, action) => {
  Alert.alert(
    title, 
    message, 
    [
      { 
        text: "Tamam", 
        onPress: () => action(),
      }
    ], 
    { cancelable: false }
  );
};