// screens/HowItWorksScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInUp, ZoomIn } from 'react-native-reanimated';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const screenHeight = Dimensions.get('window').height

const steps = [
  {
    id: 1,
    title: 'Publiez votre campagne',
    desc: 'Définissez budget, objectifs et sélectionnez des créateurs.',
  },
  {
    id: 2,
    title: 'Les créateurs postulent',
    desc: 'Ils rejoignent la campagne en 1 clic.',
  },
  {
    id: 3,
    title: 'Validation & Création',
    desc: 'Vidéos validées en 24h puis publiées.',
  },
  {
    id: 4,
    title: 'Suivi en temps réel',
    desc: 'KPIs : vues, engagements, ROI.',
  },
  { id: 5, title: 'Paiement sécurisé', desc: 'Mobile Money, rapide et sûr.' },
];

export default function HowItWorks({ navigation }) {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={{ padding: 50, backgroundColor: '#121212' }}>
          <Text style={styles.title}>🚀 Comment ça marche ?</Text>

          {steps.map((s, i) => (
            <TouchableOpacity
              key={s.id}
              activeOpacity={0.9}
              onPress={() => setActiveStep(s.id)}
            >
              <Animated.View
                entering={FadeInUp.delay(200 + i * 200).springify()}
                style={[
                  styles.step,
                  activeStep === s.id && {
                    backgroundColor: '#1E1E1E',
                    borderColor: '#00F2EA',
                    transform: [{ scale: 1.05 }],
                  },
                ]}
              >
                <Animated.View
                  entering={ZoomIn.delay(200 + i * 200)}
                  style={[
                    styles.circle,
                    activeStep === s.id && styles.circleActive,
                  ]}
                >
                  <Text style={styles.circleText}>{s.id}</Text>
                </Animated.View>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>{s.title}</Text>
                  <Text style={styles.stepDesc}>{s.desc}</Text>
                </View>
              </Animated.View>
            </TouchableOpacity>
          ))}

          <View style={{ marginTop: 25, flexDirection: 'row', justifyContent: "center" }}>
            <TouchableOpacity onPress={() => navigation.navigate('Fonctionalities')} style={[styles.ctaButton, styles.enterpriseButton]}>
              <Text style={styles.ctaButtonText}>Voir toutes les Fonctionalités</Text>
            </TouchableOpacity>
          </View>

        </View>
        <ContactSection navigation={navigation} />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    height: screenHeight
  },
  content: { maxHeight: screenHeight, backgroundColor: '#121212' },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 70,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF0050',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  circleActive: {
    backgroundColor: '#00F2EA',
    shadowColor: '#00F2EA',
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  circleText: { color: '#fff', fontWeight: '700' },
  stepContent: { flex: 1 },
  stepTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  stepDesc: { fontSize: 14, color: '#E0E0E0', lineHeight: 20 },
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
