import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './Stack/HomeStack'
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
  <NavigationContainer>
    <HomeStack/>
  </NavigationContainer>
  </GestureHandlerRootView>
  )
}

export default App