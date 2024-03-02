import { StyleSheet, Image, Text, View, TextInput, Dimensions, Pressable, ActivityIndicator, Alert } from 'react-native'
import { React, useState } from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import CustomTextInput from '../components/CustomTextInput'
import ClickableText from '../components/ClickableText'
import CustomButton from '../components/CustomButton'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/userSlice';
import { setIsLoading, setEmail, setPassword } from '../redux/userSlice';
import { customAlert } from '../utils/AlertUtils'

const LoginPage = ({ navigation }) => {

  const { isLoading, error, email, password } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const emailIsValid = email => /\S+@\S+\.\S+/.test(email)

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/login_image.png')} style={styles.logImage} />
      <CustomTextInput
        placeholder="email"
        onChangeText={(text) => dispatch(setEmail(text))}
        value={email}
        isSecure={false}
        inputMode='email'
      />
      <CustomTextInput
        placeholder="password"
        onChangeText={(password) => dispatch(setPassword(password))}
        value={password}
        isSecure={true}
        inputMode='text'
      />

      <CustomButton
        onPress={async () => {

          const actionResult = await dispatch(login({ email, password }));

          if (login.rejected.match(actionResult)) {

            const message = actionResult.error.message;
            if(message === 'Firebase: Error (auth/invalid-credential).') {
              customAlert('Bulunamadı', 'e-posta veya şifre yanlış.');
            } else {
              customAlert('Hata', 'Daha sonra tekrar deneyin.');
            }
          }
        }}
        
        value={isLoading}
        title="Giriş Yap"
        active={emailIsValid(email) && (password?.length ?? 0) > 5}
      />

      <ClickableText
        text="hesabın yok mu ?"
        clickableText=" kaydol"
        onPress={() => navigation.navigate('Signup')}
      />


    </View>
  )
}

export default LoginPage
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    textAlign: 'center'
  },
  logImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    textAlign: 'center'

  },

})