import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInUp } from 'react-native-reanimated';

const partners = ['MTN', 'Orange Money', 'TikTok API'];

const testimonial = {
  text: "Avec Kolabo, notre ROI a augmenté de 40%",
  author: "Fashion Startup, Dakar"
};

export default function SocialProofSection() {
  return (
    <View style={styles.container}>
      <Animated.View 
        entering={FadeInUp.delay(200).duration(800)}
        style={styles.avatarsContainer}
      >
        <Text style={styles.sectionTitle}>Ils nous font confiance</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.avatarsRow}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <Avatar key={index} index={index} />
          ))}
        </ScrollView>
      </Animated.View>

      <Animated.View 
        entering={FadeInUp.delay(400).duration(800)}
        style={styles.partnersContainer}
      >
        <Text style={styles.partnersTitle}>Nos partenaires</Text>
        <View style={styles.partnersRow}>
          {partners.map((partner, index) => (
            <PartnerBadge key={index} name={partner} index={index} />
          ))}
        </View>
      </Animated.View>

      <Animated.View 
        entering={FadeInUp.delay(600).duration(800)}
        style={styles.testimonialContainer}
      >
        <LinearGradient
          colors={['#FF0050', '#00F2EA']}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.testimonialBorder}
        >
          <View style={styles.testimonial}>
            <Text style={styles.testimonialQuote}>"</Text>
            <Text style={styles.testimonialText}>{testimonial.text}</Text>
            <Text style={styles.testimonialAuthor}>— {testimonial.author}</Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </View>
  );
}

function Avatar({ index }) {
  const colors = [
    ['#FF0050', '#FF4080'],
    ['#00F2EA', '#40F5ED'],
    ['#FF0050', '#FF8040'],
    ['#00F2EA', '#80F5F0'],
    ['#FF0050', '#FF6060'],
    ['#00F2EA', '#60F5EC'],
  ];

  return (
    <Animated.View 
      entering={FadeInUp.delay(800 + index * 100).duration(600)}
      style={styles.avatarWrapper}
    >
      <LinearGradient
        colors={colors[index]}
        style={styles.avatar}
      >
        <View style={styles.avatarPattern}>
          <View style={styles.avatarDot} />
          <View style={styles.avatarDot} />
          <View style={styles.avatarDot} />
        </View>
      </LinearGradient>
    </Animated.View>
  );
}

function PartnerBadge({ name, index }) {
  return (
    <Animated.View 
      entering={FadeInUp.delay(1000 + index * 150).duration(600)}
      style={styles.partnerBadge}
    >
      <Text style={styles.partnerText}>{name}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 80,
    paddingHorizontal: 24,
    backgroundColor: '#121212',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 32,
  },
  avatarsContainer: {
    marginBottom: 64,
  },
  avatarsRow: {
    paddingHorizontal: 12,
    justifyContent : "center",
    minWidth : "100%"
  },
  avatarWrapper: {
    marginHorizontal: 8,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarPattern: {
    flexDirection: 'row',
    gap: 4,
  },
  avatarDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  partnersContainer: {
    alignItems: 'center',
    marginBottom: 64,
  },
  partnersTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#E0E0E0',
    marginBottom: 24,
  },
  partnersRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  partnerBadge: {
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF0050',
  },
  partnerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  testimonialContainer: {
    alignItems: 'center',
  },
  testimonialBorder: {
    borderRadius: 16,
    padding: 2,
    maxWidth: 600,
  },
  testimonial: {
    backgroundColor: '#1E1E1E',
    padding: 32,
    borderRadius: 14,
    alignItems: 'center',
  },
  testimonialQuote: {
    fontSize: 48,
    color: '#FF0050',
    fontWeight: '600',
    lineHeight: 40,
  },
  testimonialText: {
    fontSize: 20,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 16,
  },
  testimonialAuthor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00F2EA',
  },
});