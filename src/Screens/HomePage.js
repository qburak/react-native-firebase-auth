import { StyleSheet, Text, View } from 'react-native'
import { React, useState } from 'react'
import { collection, addDoc, getDocs, doc, updateDoc, deleteField,deleteDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import { CustomButton } from '../components'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
const HomePage = () => {
  
  return (
    <View style={styles.container}>
      <Text style = {{fontWeight:'900',margin:50}}>WELCOME</Text>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    alignContent:'center',
  }
})