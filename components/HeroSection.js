import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
import hero from '../assets/images/hero.png'

 const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isAndroid = /android/i.test(userAgent);
const { width, height } = Dimensions.get('window');

export default function HeroSection() {
 
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#121212', '#1E1E1E', '#121212']}
        style={StyleSheet.absoluteFillObject}
      />
      
      <ImageBackground resizeMode='cover' imageStyle={{ width : "100%", right : 0}} source={ isAndroid? null : hero} style={styles.content}>
        <Animated.View 
          entering={FadeInUp.delay(200).duration(800)}
          style={styles.textContainer}
        >
          <Text style={styles.tagline}>
            Votre visibilité, leur créativité
          </Text>
          <Text style={styles.taglineHighlight}>
            KOLABO
          </Text>
          <Text style={styles.subtitle}>
            Connecte les Business et les créateurs de contenus pour un échange équitable
          </Text>
        </Animated.View>

       {isAndroid? <Animated.View 
          entering={FadeInDown.delay(600).duration(800)}
          style={styles.buttonsContainer}
        >
          <TouchableOpacity style={[styles.heroButton, styles.creatorButton]}>
            <Text style={[styles.heroButtonText, styles.creatorButtonText]}>Ouvrir l'application</Text>
          </TouchableOpacity>
        </Animated.View>
         :
          <Animated.View 
          entering={FadeInDown.delay(600).duration(800)}
          style={styles.buttonsContainer}
        >
          <TouchableOpacity style={[styles.heroButton, styles.campaignButton]}>
            <Text style={styles.heroButtonText}>Lancer une campagne</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.heroButton, styles.creatorButton]}>
            <Text style={[styles.heroButtonText, styles.creatorButtonText]}>Devenir créateur</Text>
          </TouchableOpacity>
        </Animated.View>}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: isAndroid? 0 : height*0.9,
    paddingTop: isAndroid? 100 : 0,
  },
  content: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'center',
    paddingLeft : isAndroid? 0 :50,
     borderBottomLeftRadius : 50, borderBottomRightRadius : 50, overflow : "hidden"
  },
  textContainer: {
    alignItems: isAndroid? "center" : 'left',
    marginBottom: 40,
  },
  tagline: {
    textAlign: isAndroid? "center" : 'left',
    fontSize: 48,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 56,
    marginBottom: 8,
  },
  taglineHighlight: {
    fontSize: 48,
    fontWeight: '600',
    color: '#FF0050',
    lineHeight: 56,
    marginBottom: 10,
    fontWeight: '600',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '300',
    color: '#E0E0E0',
    textAlign: 'center',
    lineHeight: 28,
    maxWidth: 600,
    padding : 10
  },
  mockupContainer: {
    marginBottom: 48,
  },
  mockup: {
    width: 280,
    height: 560,
    borderRadius: 32,
    padding: 4,
  },
  mockupGradient: {
    flex: 1,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mockupScreen: {
    width: '90%',
    height: '90%',
    backgroundColor: '#1E1E1E',
    borderRadius: 24,
    padding: 16,
  },
  mockupHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  mockupDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  mockupContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mockupText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
    marginBottom: 24,
  },
  mockupChart: {
    width: 120,
    height: 80,
    backgroundColor: '#FF0050',
    borderRadius: 8,
    opacity: 0.8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent : isAndroid? "center" : "flex-start",
    gap: 16,
  },
  heroButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    minWidth: 160,
    alignItems: 'center',
  },
  campaignButton: {
    backgroundColor: '#FF0050',
  },
  creatorButton: {
    backgroundColor: '#00F2EA',
  },
  heroButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  creatorButtonText: {
    color: '#121212',
  },
});