import React from 'react'
import { View, Text } from 'react-native'

import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screeens/HomeScreen'
import LoginScreen from '../screeens/LoginScreen'
import RegisterScreen from '../screeens/RegisterScreen'
const Stack = createStackNavigator()
const StackNavigation = () => {
      return (
            <Stack.Navigator>
                  <Stack.Screen 
                  name="Login" 
                  component={LoginScreen}/>

                  <Stack.Screen
                  name = 'Reg'
                  component={RegisterScreen}
                  />

                 <Stack.Screen
                  name = 'Home'
                  component={HomeScreen}
                  />
            </Stack.Navigator>
            
      )
}

export default StackNavigation
