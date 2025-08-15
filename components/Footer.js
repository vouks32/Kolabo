import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const socialLinks = [
  { name: 'TikTok', url: 'https://tiktok.com/@kolabo' },
  { name: 'Instagram', url: 'https://instagram.com/kolabo' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/kolabo' }
];

export default function Footer() {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Animated.View 
        entering={FadeInUp.delay(200).duration(800)}
        style={styles.storesContainer}
      >
        <Text style={styles.storesTitle}>Téléchargez l'application</Text>
        <View style={styles.storeButtons}>
          <TouchableOpacity 
            style={styles.storeButton}
            onPress={() => handleLinkPress('https://apps.apple.com')}
          >
            <Text style={styles.storeButtonText}>App Store</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.storeButton}
            onPress={() => handleLinkPress('https://play.google.com')}
          >
            <Text style={styles.storeButtonText}>Google Play</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      <Animated.View 
        entering={FadeInUp.delay(400).duration(800)}
        style={styles.socialContainer}
      >
        <Text style={styles.socialTitle}>Suivez-nous</Text>
        <View style={styles.socialButtons}>
          {socialLinks.map((social, index) => (
            <TouchableOpacity
              key={index}
              style={styles.socialButton}
              onPress={() => handleLinkPress(social.url)}
            >
              <Text style={styles.socialButtonText}>{social.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>

      <Animated.View 
        entering={FadeInUp.delay(600).duration(800)}
        style={styles.copyright}
      >
        <Text style={styles.copyrightText}>© Kolabo 2024. Tous droits réservés.</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 64,
    paddingHorizontal: 24,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
  },
  storesContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  storesTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 24,
  },
  storeButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  storeButton: {
    backgroundColor: '#121212',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FF0050',
  },
  storeButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  socialContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  socialTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  socialButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00F2EA',
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#00F2EA',
  },
  copyright: {
    alignItems: 'center',
  },
  copyrightText: {
    fontSize: 12,
    fontWeight: '300',
    color: '#E0E0E0',
    textAlign: 'center',
  },
});