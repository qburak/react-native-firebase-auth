import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage} from '../Screens';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name = 'Homepage' component={HomePage}/>
    </Stack.Navigator>
  )
}

export default UserStack

const styles = StyleSheet.create({})