import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginPage,SignupPage} from '../Screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name = 'Login' component={LoginPage} options={{headerShown : false}}/>
        <Stack.Screen name = 'Signup' component={SignupPage} options={{headerShown : false}}/> 
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})