// screens/HowItWorksScreen.js

import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInUp } from 'react-native-reanimated';
import Header from '../components/Header';
import Footer from '../components/Footer';

const screenHeight = Dimensions.get('window').height;

const steps = [
  {
    id: 1,
    title: 'Publiez votre campagne',
    desc: 'Les entreprises définissent leur budget, objectifs et sélectionnent des créateurs.',
  },
  {
    id: 2,
    title: 'Les créateurs postulent',
    desc: 'Les créateurs intéressés rejoignent la campagne en 1 clic.',
  },
  {
    id: 3,
    title: 'Validation et création',
    desc: 'Les vidéos sont validées en moins de 24h puis publiées sur TikTok.',
  },
  {
    id: 4,
    title: 'Suivi en temps réel',
    desc: 'Dashboard pour suivre les vues, engagements et paiements.',
  },
  {
    id: 5,
    title: 'Paiement sécurisé',
    desc: 'Les créateurs reçoivent leurs gains via Mobile Money.',
  },
];

export default function HowItWorks({ navigation }) {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isAndroid = /android/i.test(userAgent);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={!isAndroid ? true : false}
      >
        <Text style={styles.title}>Comment ça marche ?</Text>

        {steps.map((s, i) => (
          <Animated.View
            key={s.id}
            entering={FadeInUp.delay(200 + i * 200).duration(600)}
            style={styles.step}
          >
            <View style={styles.circle}>
              <Text style={styles.circleText}>{s.id}</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>{s.title}</Text>
              <Text style={styles.stepDesc}>{s.desc}</Text>
            </View>
          </Animated.View>
        ))}
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
    marginBottom: 40,
    marginTop: 60,
  },
  step: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 30 },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF0050',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  circleText: { color: '#fff', fontWeight: '600' },
  stepContent: { flex: 1 },
  stepTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 6,
  },
  stepDesc: { fontSize: 14, color: '#E0E0E0', lineHeight: 20 },
  scrollView: {
    height: screenHeight,
  },
});
