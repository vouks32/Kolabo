// screens/FonctionalitiesScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  FadeInUp,
  ZoomIn,
  ZoomOut,
  withSpring,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BlurView } from 'expo-blur';

const screenHeight = Dimensions.get('window').height

const categories = {
  Businesses: [
    {
      icon: '🎯',
      title: 'Création de campagnes',
      description:
        'Définissez budget, objectifs et sélectionnez vos créateurs.',
    },
    {
      icon: '💰',
      title: 'Paiement aux résultats',
      description: 'Rémunération basée sur la performance réelle.',
    },
    {
      icon: '📊',
      title: 'Tableau de bord',
      description: 'KPIs en temps réel : vues, engagement, ROI.',
    },
    {
      icon: '⚡',
      title: 'Validation rapide',
      description: 'Approbation des vidéos en moins de 24h.',
    },
    {
      icon: '🔐',
      title: 'Paiement sécurisé',
      description: 'Rechargez via Mobile Money ou carte bancaire.',
    },
  ],
  Creators: [
    {
      icon: '💼',
      title: 'Portefeuille digital',
      description: 'Suivi du solde et retraits instantanés via Mobile Money.',
    },
    {
      icon: '📥',
      title: 'Postuler en 1 clic',
      description:
        'Filtrez et rejoignez des campagnes adaptées à votre profil.',
    },
    {
      icon: '🎬',
      title: 'Soumission simplifiée',
      description: 'Connectez votre compte Tiktok et envoyez vos vidéos.',
    },
    {
      icon: '📈',
      title: 'Revenus auto',
      description: 'Estimation instantanée basée sur vos stats.',
    },
    {
      icon: '🔔',
      title: 'Alertes',
      description: 'Soyez notifié dès qu’une opportunité apparaît.',
    },
  ],
  Transversales: [
    {
      icon: '💬',
      title: 'Messagerie intégrée',
      description: 'Discutez directement avec vos partenaires.',
    },
    {
      icon: '⭐',
      title: 'Notation',
      description: 'Évaluez et améliorez la qualité des collaborations.',
    },
    {
      icon: '🔎',
      title: 'Recherche avancée',
      description: 'Trouvez les créateurs ou campagnes parfaites.',
    },
    {
      icon: '📞',
      title: 'Support multicanal',
      description: 'Assistance via chat in-app, email ou WhatsApp.',
    },
  ],
};

export default function Fonctionalities({ navigation }) {
  const [activeTab, setActiveTab] = useState('Businesses');

  // Trigger animation on tab change by using a key on the cards container
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>
          ✨ Découvrez toutes nos fonctionnalités
        </Text>

        {/* Tabs avec animation */}
        <View style={styles.tabs}>
          {Object.keys(categories).map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.tab, activeTab === cat && styles.activeTab]}
              onPress={() => setActiveTab(cat)}
            >
              <Animated.Text
                entering={ZoomIn.springify().damping(12)}
                exiting={ZoomOut}
                style={[
                  styles.tabText,
                  activeTab === cat && styles.activeTabText,
                ]}
              >
                {cat}
              </Animated.Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Cards animées - key forces remount/animation on tab change */}
        <View style={styles.cardsContainer} key={activeTab}>
          {categories[activeTab].map((f, i) => (
             <Animated.View
                entering={FadeInUp.delay(200 + i * 120).springify()}
                  style={styles.cardWrapper}
                >
                  <LinearGradient
                    colors={['#FF0050aa', '#00F2EAaa']}
                    style={styles.cardBorder}
                  >
                    <BlurView intensity={20} tint="dark" style={styles.card}>
                      <View style={styles.cardContent}>
                        <Text style={styles.icon}>{f.icon}</Text>
                        <Text style={styles.cardTitle}>{f.title}</Text>
                        <Text style={styles.cardDescription}>{f.description}</Text>
                      </View>
                    </BlurView>
                  </LinearGradient>
                </Animated.View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { padding: 20, maxHeight : screenHeight, paddingBottom: 80 },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 60,
  },
  tabs: { alignSelf : "center", flexDirection: 'row', borderRadius : 10, justifyContent: 'center', marginBottom: 20, padding : 10, backgroundColor: '#1E1E1E', },
  tab: {
    padding: 10,
    marginHorizontal: 8,
    borderRadius: 12,
    backgroundColor: '#1E1E1E',
  },
  activeTab: { backgroundColor: '#FF0050', transform: [{ scale: 1.1 }] },
  tabText: { color: '#E0E0E0', fontSize: 16 },
  activeTabText: { color: '#fff', fontWeight: '700' },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardWrapper: { width: '20%', margin: 8, borderRadius: 18 },
  cardBorder: {
    borderRadius: 16,
    padding: 3,
  },
  card: {
    borderRadius: 14,
    overflow: 'hidden',
    paddingVertical : 40,
    alignItems : "center",
    backgroundColor : "#1e1e1ed3"
  },
  icon: { 
    fontSize: 40, 
    marginBottom: 12, 
    justifyContent : "center",
    textAlign : 'center'
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardDescription: { fontSize: 14, color: '#E0E0E0', textAlign: 'center' },
});
