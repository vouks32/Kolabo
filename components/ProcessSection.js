import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { FadeInUp, FadeInLeft, FadeInRight } from 'react-native-reanimated';

const processSteps = [
  {
    id: 1,
    entreprise: 'Publiez votre campagne',
    créateur: 'Trouvez des campagnes',
    icon: '🎯'
  },
  {
    id: 2,
    entreprise: 'Sélectionnez',
    créateur: 'Postulez',
    icon: '✅'
  },
  {
    id: 3,
    entreprise: 'Validez',
    créateur: 'Soumettez',
    icon: '💎'
  }
];

export default function ProcessSection({navigation}) {
  return (
    <View style={styles.container}>
      <Animated.View
        entering={FadeInUp.delay(200).duration(800)}
        style={styles.header}
      >
        <Text style={styles.title}>Simple. Transparent. Efficace.</Text>
      </Animated.View>

      <View style={styles.timelineContainer}>
        <Animated.View
          entering={FadeInLeft.delay(400).duration(800)}
          style={styles.entrepriseTimeline}
        >
          <Text style={styles.timelineTitle}>Entreprises</Text>
          {processSteps.map((step, index) => (
            <ProcessStep
              key={`entreprise-${step.id}`}
              step={step}
              text={step.entreprise}
              index={index}
              isEntreprise={true}
            />
          ))}
        </Animated.View>

        <View style={styles.centerLine}>
          <View style={styles.verticalLine} />
          {processSteps.map((step, index) => (
            <Animated.View
              key={`center-${step.id}`}
              entering={FadeInUp.delay(600 + index * 200).duration(600)}
              style={styles.centerStep}
            >
              <Text style={styles.centerIcon}>{step.icon}</Text>
            </Animated.View>
          ))}
        </View>

        <Animated.View
          entering={FadeInRight.delay(400).duration(800)}
          style={styles.createurTimeline}
        >
          <Text style={styles.timelineTitle}>Créateurs</Text>
          {processSteps.map((step, index) => (
            <ProcessStep
              key={`créateur-${step.id}`}
              step={step}
              text={step.créateur}
              index={index}
              isEntreprise={false}
            />
          ))}
        </Animated.View>
      </View>
      <View style={{marginTop : 25, flexDirection : 'row', justifyContent : "center"}}>
        <TouchableOpacity onPress={()=> navigation.navigate('HIW')} style={[styles.ctaButton, styles.enterpriseButton]}>
          <Text style={styles.ctaButtonText}>Comment ça marche ?</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

function ProcessStep({ step, text, index, isEntreprise }) {
  return (
    <Animated.View
      entering={FadeInUp.delay(800 + index * 200).duration(600)}
      style={[styles.step, isEntreprise ? styles.entrepriseStep : styles.createurStep]}
    >
      <View style={{ width: 10, padding: 2, borderRadius: 10, backgroundColor: '#FF0050' }}></View>
      <View style={styles.stepNumber}>
        <Text style={styles.stepNumberText}>{step.id}</Text>
      </View>
      <Text style={[styles.stepText, , isEntreprise ? { textAlign: "right" } : { textAlign: "left" }]}>{text}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    backgroundColor: '#121212',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 44,
  },
  timelineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  entrepriseTimeline: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 0,
  },
  createurTimeline: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 0,
  },
  timelineTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 32,
  },
  centerLine: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 300,
    paddingVertical: 60,
  },
  verticalLine: {
    position: 'absolute',
    width: 2,
    height: '100%',
    backgroundColor: '#FF0050',
    top: 0,
  },
  centerStep: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FF0050',
    marginBottom: 22,
  },
  centerIcon: {
    fontSize: 20,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  entrepriseStep: {
    flexDirection: 'row-reverse',
  },
  createurStep: {
    flexDirection: 'row',
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FF0050',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
  },
  stepNumberText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  stepText: {
    fontSize: 13,
    fontWeight: '300',
    color: '#E0E0E0',
    maxWidth: 120,
    textAlign: 'center',
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
    fontSize: 19,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  creatorButtonText: {
    color: '#121212',
  },
});