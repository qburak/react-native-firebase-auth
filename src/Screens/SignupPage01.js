import { Pressable, StyleSheet, Text, View} from 'react-native'
import { React} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomTextInput, CustomButton } from '../components/index'
import { setEmail } from '../redux/userSlice';
import { FontAwesome5 } from '@expo/vector-icons';

const SignupPage01 = ({ navigation }) => {
    dispatch = useDispatch()
    const emailIsValid = email => /\S+@\S+\.\S+/.test(email)
    const { email } = useSelector((state) => state.user)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <Pressable onPress={() => navigation.goBack()}>
                <FontAwesome5 name="chevron-left" size={24} color="black" />
                </Pressable>
            </View>

            <View style={styles.secondContainer}>

                <Text style={styles.signUpTitle}>E-Mailinizi Girin</Text>

                <Text style={styles.signUpSubTitle}>Hesabını yaratıyoruz, aşağıdaki kutucuğa mailinizi girin...</Text>
                <CustomTextInput
                    placeholder={'e-mail'}
                    onChangeText={(text) => dispatch(setEmail(text))}
                    value={email}
                    isSecure={false}
                    inputMode={'text'}
                />
                <CustomButton
                    title="İleri"
                    onPress={() => {
                        if(emailIsValid(email)){
                            navigation.navigate('second', {email})
                        }
                        }}
                        active={emailIsValid(email)}
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
    secondContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width:'84%',

    },
    signUpTitle: {
        fontSize: 30,
        fontWeight: '700',
        opacity:0.7,
    }, signUpSubTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
        textAlign: 'center',
        marginVertical: 20,
        opacity:0.3,
    }, top: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom:25,
        opacity:0.7,
    }
})