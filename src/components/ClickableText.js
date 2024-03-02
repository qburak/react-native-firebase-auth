import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const ClickableText = ({text, clickableText, onPress}) => {
    return (
        <View style={styles.signUpContainer}>
            <Text
                style={{ color: '#014351',fontWeight:'600'}} >
                {text}
            </Text>

            <Pressable onPress={() => onPress()}>
                <Text style={styles.signUpButton}>{clickableText}</Text>
            </Pressable>
        </View>
    )
}

export default ClickableText

const styles = StyleSheet.create({
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signUpButton: {
        color: '#fe374a',
        marginLeft: 2,
        fontWeight: '700'
    },
})