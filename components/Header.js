import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

 const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isAndroid = /android/i.test(userAgent);

export default function Header({ navigation }) {
  const [scrollY] = useState(new Animated.Value(0));
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const listener = scrollY.addListener(({ value }) => {
      setIsTransparent(value < 50);
    });
    console.log(isAndroid)

    return () => scrollY.removeListener(listener);
  }, []);

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 0.95],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.headerContainer}>
      <Animated.View 
        style={[
          styles.headerBackground,
        ]}
      >
        <LinearGradient
          colors={['rgba(30, 30, 30, 0.95)', 'rgba(18, 18, 18, 0.3)']}
          style={StyleSheet.absoluteFillObject}
        />
      </Animated.View>
      
      <View style={styles.header}>
        <Text style={styles.logo}>KOLABO</Text>
        
        {!isAndroid && <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItem}>
            <Text style={styles.navText}>Accueil</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Fonctionalities')} style={styles.navItem}>
            <Text style={styles.navText}>Fonctionnalités</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('HIW')} style={styles.navItem}>
            <Text style={styles.navText}>Comment ça marche</Text>
          </TouchableOpacity>
        </View>}
          <TouchableOpacity style={[styles.ctaButton, styles.enterpriseButton]}>
            <Text style={styles.ctaButtonText}>Ouvrir L'application</Text>
          </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: isAndroid? 0 : 15,
    zIndex: 2,
    height: 80,
  },
  headerBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    height: 80,
  },
  logo: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  navItem: {
    marginHorizontal: 16,
  },
  navText: {
    fontSize: 14,
    color: '#E0E0E0',
    fontWeight: '300',
  },
  ctaButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ctaButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginLeft: 12,
  },
  enterpriseButton: {
    backgroundColor: '#FF0050',
  },
  creatorButton: {
    backgroundColor: '#00F2EA',
  },
  ctaButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  creatorButtonText: {
    color: '#121212',
  },
});