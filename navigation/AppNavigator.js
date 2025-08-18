// navigation/AppNavigator.js
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/index';
import Fonctionalities from '../screens/fonctionalities';
import HowItWorks from '../screens/howItWorks';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const AppNavigator = () => {

  return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
        initialRouteName='Home'
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HIW"
          component={HowItWorks}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Fonctionalities"
          component={Fonctionalities}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
};

export default AppNavigator;