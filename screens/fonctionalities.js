// screens/FonctionalitiesScreen.js
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Footer from '../components/Footer';

const screenHeight = Dimensions.get('window').height;

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
      title: 'Tableau de bord analytique',
      description: 'KPIs en temps réel : vues, engagement, ROI.',
    },
    {
      icon: '⚡',
      title: 'Validation rapide',
      description: 'Approbation des vidéos en moins de 24h.',
    },
    {
      icon: '🔐',
      title: 'Paiement intégré',
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
      title: 'Calcul automatique des revenus',
      description: 'Estimation instantanée basée sur vos stats.',
    },
    {
      icon: '🔔',
      title: 'Alertes campagnes',
      description: 'Soyez notifié dès qu’une nouvelle opportunité est dispo.',
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
      title: 'Système de notation',
      description: 'Évaluez et améliorez la qualité des collaborations.',
    },
    {
      icon: '🔎',
      title: 'Moteur de recherche',
      description: 'Trouvez les créateurs ou campagnes qui vous correspondent.',
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

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>Toutes les Fonctionnalités</Text>

        {/* Tabs */}
        <View style={styles.tabs}>
          {Object.keys(categories).map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.tab, activeTab === cat && styles.activeTab]}
              onPress={() => setActiveTab(cat)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === cat && styles.activeTabText,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Cards */}
        <View style={styles.cardsContainer}>
          {categories[activeTab].map((f, i) => (
            <Animated.View
              key={i}
              entering={FadeInUp.delay(200 + i * 100).duration(600)}
              style={styles.cardWrapper}
            >
              <LinearGradient
                colors={['#FF0050', '#00F2EA']}
                style={styles.card}
              >
                <Text style={styles.icon}>{f.icon}</Text>
                <Text style={styles.cardTitle}>{f.title}</Text>
                <Text style={styles.cardDescription}>{f.description}</Text>
              </LinearGradient>
            </Animated.View>
          ))}
        </View>
        {/* Toi meme tu vas decider si tu veux le footer ici ou non */}
        {/* <Footer /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { padding: 20, paddingBottom: 80 },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  tabs: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  tab: {
    padding: 10,
    marginHorizontal: 8,
    borderRadius: 8,
    backgroundColor: '#1E1E1E',
  },
  activeTab: { backgroundColor: '#FF0050' },
  tabText: { color: '#E0E0E0', fontSize: 16 },
  activeTabText: { color: '#fff', fontWeight: '600' },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardWrapper: { width: '45%', margin: 8 },
  card: { borderRadius: 16, padding: 16, alignItems: 'center' },
  icon: { fontSize: 32, marginBottom: 12 },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardDescription: { fontSize: 14, color: '#E0E0E0', textAlign: 'center' },
  scrollView: {
    height: screenHeight,
  },
});
