import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import UserStack from './UserStack';
import AuthStack from './AuthStack';

import { UseSelector,useDispatch, useSelector } from 'react-redux'
import { setEmail, setIsLoading, setPassword } from '../redux/userSlice'
import app from '../../firebaseConfig';

const rootNavigation = () => {
    const {isAuth} = useSelector((state) => state.user)
    const dispatch = useDispatch()
   // const isAuth = true
    return (
        <NavigationContainer>
            {
                !isAuth ? <AuthStack /> : <UserStack />
            }
        </NavigationContainer>
    )
}

export default rootNavigation