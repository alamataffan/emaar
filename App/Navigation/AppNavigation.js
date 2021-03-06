import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { scale,View,Text, Fonts, Colors, } from '../common'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../Containers/HomeScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import styles from './Styles/NavigationStyles'





const Stack = createStackNavigator()
function MainStackNavigator() {
  return (

    <NavigationContainer>
      <Stack.Navigator headerMode="none">
      <Stack.Screen name='HomeScreen' component={HomeScreen} 
      initialRouteName 
      options={{
      gestureEnabled: false,
      }}
      />
       <Stack.Screen name='RegisterScreen' component={RegisterScreen} 
      initialRouteName 
      options={{
      gestureEnabled: false,
      }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  
  )
}
export default MainStackNavigator
