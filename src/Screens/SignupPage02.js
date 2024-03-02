import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import { AsyncThunk } from '@reduxjs/toolkit'
import { React, useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomTextInput, CustomButton } from '../components/index'
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { signUp } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setIsRegist, setPassword } from '../redux/userSlice'
import { AlertUtils } from '../utils';
import { customAlert, customAlertAction } from '../utils/AlertUtils'

const SignupPage01 = ({ navigation, route }) => {


    const { isLoading, password} = useSelector((state) => state.user)
    const [isSecure, setIsSecure] = useState(true)
    const email = route.params?.email; // Düzeltme yapıldı
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <Pressable onPress={() => navigation.goBack()}>
                <FontAwesome5 name="chevron-left" size={24} color="black" />
                </Pressable>
                <Pressable onPress={() => {setIsSecure( isSecure ? false : true)}}>
                     <FontAwesome5 name= {isSecure ? 'eye-slash' : 'eye'} size={24} color="black" />
                </Pressable>
            </View>
            <View style={styles.secondContainer}>
                <Text style={styles.signUpTitle}>Şifrenizi Yaratın</Text>
                <Text style={styles.signUpSubTitle}>Hesabını yaratıyoruz, aşağıdaki kutucuğa şifrenizi girin...</Text>
                <CustomTextInput
                    placeholder={'şifre'}
                    onChangeText={(password) => dispatch(setPassword(password))}
                    value={password}
                    isSecure={isSecure}
                    inputMode={'text'}
                    isCounter={true}
                    counter={6 - (password?.length ?? 0)}
                    />

                <CustomButton
                    title="kayıt ol"
                    onPress={async () => {
                        if ((password?.length ?? 0) > 5) {
                            
                            const actionResult = await dispatch(signUp({ email, password }));
                            if(signUp.fulfilled.match(actionResult)){
                                customAlertAction('Hoşgeldin','kayıt başarıyla yapıldı.', () => {navigation.navigate('Login')})
                            }
                            else if(signUp.rejected.match(actionResult)){
                                const message = actionResult.error.message;
                             if (message === 'Firebase: Error (auth/email-already-in-use).') {
                                customAlertAction('Hata','bu e-posta zaten kayıtlı', () => {navigation.goBack()})
                             }else{
                                customAlert('Hata','Beklenmeyen bir hata oluştu, daha sonra tekrar deneyin.')
                             }
                            }
                        }
                    }}
                    value={isLoading}
                    active={(password?.length ?? 0) > 5}
                />
            </View>
        </SafeAreaView>
    )
}

export default SignupPage01

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        
    },
    secondContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '84%',

    },
    signUpTitle: {
        opacity:0.7,
        fontSize: 30,
        fontWeight: '700'
    }, signUpSubTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
        opacity:0.3,
        textAlign: 'center',
        marginVertical: 20
    }, top: {
        width: '95%',
        opacity:0.7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
        marginHorizontal:20,
    }
})