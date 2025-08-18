import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  //AsyncStorage.clear()

  const linking = {
    prefixes: ['/'],
    config: {
      screens: {
        Home: '',
        HIW: 'How-it-works',
        Fonctionalities: 'Fonctionalities',
      },
    },
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>} >
      <AppNavigator />
    </NavigationContainer>
  );
}