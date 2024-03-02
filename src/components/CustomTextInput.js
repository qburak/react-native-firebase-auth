import { StyleSheet, TextInput, Dimensions, View, Text } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('screen')
const CustomTextInput = ({ placeholder, onChangeText, value, isSecure, inputMode, isCounter, counter }) => {
    const safeValueLength = value?.length ?? 0;

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.loginInput}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={isSecure}
                inputMode={inputMode}
            />
            {
                 isCounter && (
                    <Text style={styles.inputCounter}> {safeValueLength < 7 ? counter : '0'} </Text>
                )
            }
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputContainer: {
        borderColor: 'lightgray',
        borderWidth: 0.5,
        borderRadius: 8,
        backgroundColor: 'white',
        margin: 10,
        width: '100%',
        height: height / 22,
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center'

    },
    inputCounter: {
        margin: 4,
        fontWeight: '700',
        fontSize:18,
        color: 'lightgray'
    },
    loginInput: {
        textAlign: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: '90%',
        height: '100%',
        flexDirection: 'row'
    },
})