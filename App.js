import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  //AsyncStorage.clear()
  
  return (
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
  );
}