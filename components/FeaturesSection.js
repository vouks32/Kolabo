import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInUp } from 'react-native-reanimated';

const userAgent = navigator.userAgent || navigator.vendor || window.opera;
const isAndroid = /android/i.test(userAgent);
const features = {
  entreprises: [
    {
      icon: '🤝',
      title: 'Rémunération équitable',
      description: 'Payez vos campagnes par vues'
    },
    {
      icon: '🎯',
      title: 'Ciblage précis',
      description: 'Trouvez les créateurs qui correspondent à votre audience'
    },
    {
      icon: '📊',
      title: 'Analytics avancés',
      description: 'Suivez les performances de vos campagnes en temps réel'
    },
    {
      icon: '📈',
      title: 'ROI optimisé',
      description: 'Maximisez votre retour sur investissement publicitaire'
    }
  ],
  créateurs: [
    {
      icon: '💰',
      title: 'Rémunération équitable',
      description: 'Gagnez selon votre engagement et votre créativité'
    },
    {
      icon: '🔔',
      title: 'Opportunités ciblées',
      description: 'Recevez des propositions adaptées à votre profil'
    },
    {
      icon: '📲',
      title: 'Outils créatifs',
      description: 'Accédez à des ressources pour améliorer vos contenus'
    },
    {
      icon: '📊',
      title: 'Statistiques détaillées',
      description: 'Analysez vos performances et votre croissance'
    }
  ]
};

export default function FeaturesSection({navigation}) {
  const [activeTab, setActiveTab] = useState('entreprises');

  return (
    <View style={styles.container}>
      <Animated.View
        entering={FadeInUp.delay(200).duration(800)}
        style={styles.header}
      >
        <Text style={styles.title}>Votre pont vers le marketing d'influence</Text>
      </Animated.View>

      <Animated.View
        entering={FadeInUp.delay(400).duration(800)}
        style={styles.tabContainer}
      >
        <TouchableOpacity
          style={[styles.tab, activeTab === 'entreprises' && styles.activeTab]}
          onPress={() => setActiveTab('entreprises')}
        >
          <Text style={[styles.tabText, activeTab === 'entreprises' && styles.activeTabText]}>
            Entreprises
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'créateurs' && styles.activeTab]}
          onPress={() => setActiveTab('créateurs')}
        >
          <Text style={[styles.tabText, activeTab === 'créateurs' && styles.activeTabText]}>
            Créateurs
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      >
        {features[activeTab].map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </ScrollView>
      <View style={{ marginTop: 25, flexDirection: 'row', justifyContent: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate('Fonctionalities')} style={[styles.ctaButton, styles.enterpriseButton]}>
          <Text style={styles.ctaButtonText}>Voir toutes les Fonctionalités</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function FeatureCard({ feature, index }) {
  return (
    <Animated.View
      entering={FadeInUp.delay(200 + index * 100).duration(600)}
      style={styles.cardWrapper}
    >
      <LinearGradient
        colors={['#FF0050', '#00F2EA']}
        style={styles.cardBorder}
      >
        <BlurView intensity={20} tint="dark" style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardIcon}>{feature.icon}</Text>
            <Text style={styles.cardTitle}>{feature.title}</Text>
            <Text style={styles.cardDescription}>{feature.description}</Text>
          </View>
        </BlurView>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 24,
    backgroundColor: '#121212',
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 44,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 4,
    marginBottom: 32,
    alignSelf: 'center',
  },
  tab: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#FF0050',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#E0E0E0',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  cardsContainer: {
    paddingHorizontal: 12,
  },
  cardWrapper: {
    marginHorizontal: 15,
  },
  cardBorder: {
    borderRadius: 16,
    padding: 2,
  },
  card: {
    width: 280,
    height: 200,
    borderRadius: 14,
    overflow: 'hidden',
  },
  cardContent: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(30, 30, 30, 0.7)',
  },
  cardIcon: {
    fontSize: 32,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
  },
  cardDescription: {
    fontSize: 14,
    fontWeight: '300',
    color: '#E0E0E0',
    textAlign: 'center',
    lineHeight: 20,
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
  ctaButtonText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});