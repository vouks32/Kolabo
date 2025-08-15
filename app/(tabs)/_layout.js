import { Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' }, // Hide tab bar for one-page design
      }}>
      <Tabs.Screen name="index" options={{ title: 'Accueil' }} />
    </Tabs>
  );
}