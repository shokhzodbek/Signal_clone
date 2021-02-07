/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StatusBar,
  Text
} from 'react-native';
import 'react-native-gesture-handler';
import StackNavigation from './src/navigation/StackNavigation';

import LoginScreen from './src/screeens/LoginScreen';
import HomeScreen from './src/screeens/HomeScreen'



const App=() => {
  return (
    <> 
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
    <HomeScreen/>
      </NavigationContainer>
   
    </>
  );
};



export default App;
