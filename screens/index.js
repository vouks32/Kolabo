import React from 'react';
import { Dimensions, Platform, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ProcessSection from '../components/ProcessSection';
import SocialProofSection from '../components/SocialProofSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const screenHeight = Dimensions.get('window').height

 const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isAndroid = /android/i.test(userAgent);

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#121212" />
      <Header navigation={navigation} />
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={!isAndroid? true : false}
        contentContainerStyle={{flexGrow : 1}}
      >
        <HeroSection  navigation={navigation}  />
        <FeaturesSection  navigation={navigation}  />
        <ProcessSection  navigation={navigation}  />
        <SocialProofSection  navigation={navigation}  />
        <ContactSection  navigation={navigation} />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    height : screenHeight
  },
  scrollView: {
    height : screenHeight,
  },
});