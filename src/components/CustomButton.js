import { StyleSheet, Text, Pressable, ActivityIndicator,Dimensions } from 'react-native'
import React from 'react'
const {width,height} = Dimensions.get('window')
const CustomButton = ({ onPress, value, title,active }) => {
    return (
        <Pressable style={[{
         backgroundColor: active ? '#fe374a' : 'lightgray'
        }, styles.senderButton]}
            onPress={() => onPress()}>
            {
                value ? <ActivityIndicator color={'white'} /> : <Text style={styles.senderButtonText}>{title}</Text>
            }
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    senderButtonText: {
        textAlign: 'center',
        color: '#fff'
    },
    senderButton: {
        width: '100%',
        height: height / 22,
        justifyContent: 'center',
        borderRadius: 10,
        margin: 20
    },
})