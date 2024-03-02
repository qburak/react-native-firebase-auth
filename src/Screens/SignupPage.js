import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignupPage01, SignupPage02 } from './';

const Stack = createNativeStackNavigator();

const SignupPage = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='first' component={SignupPage01} options={{headerShown : false,headerStyle:{backgroundColor:'rgba(255, 0, 0, 0)'},title:''}} />
      <Stack.Screen name='second' component={SignupPage02} options={{headerShown : false,headerBackTitleVisible:false,headerTintColor:'black',headerStyle:{backgroundColor:'rgba(255, 0, 0, 0)'},title:''}} />

    </Stack.Navigator>
  )
}

export default SignupPage