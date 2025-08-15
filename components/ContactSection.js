import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { Picker } from '@react-native-picker/picker';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    role: 'entreprise',
    message: ''
  });

  const handleSubmit = () => {
    if (!formData.nom || !formData.email || !formData.message) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    Alert.alert('Merci !', 'Votre message a été envoyé avec succès');
    setFormData({ nom: '', email: '', role: 'entreprise', message: '' });
  };

  return (
    <View style={styles.container}>
      <Animated.View 
        entering={FadeInUp.delay(200).duration(800)}
        style={styles.header}
      >
        <Text style={styles.title}>Contactez-nous</Text>
        <Text style={styles.subtitle}>Prêt à transformer votre stratégie marketing ?</Text>
      </Animated.View>

      <View style={styles.contentContainer}>
        <Animated.View 
          entering={FadeInUp.delay(400).duration(800)}
          style={styles.formContainer}
        >
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nom *</Text>
              <TextInput
                style={styles.input}
                value={formData.nom}
                onChangeText={(text) => setFormData({ ...formData, nom: text })}
                placeholder="Votre nom complet"
                placeholderTextColor="#666"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email *</Text>
              <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={(text) => setFormData({ ...formData, email: text })}
                placeholder="votre@email.com"
                placeholderTextColor="#666"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Rôle</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.role}
                  onValueChange={(value) => setFormData({ ...formData, role: value })}
                  style={styles.picker}
                  dropdownIconColor="#FFFFFF"
                >
                  <Picker.Item label="Entreprise" value="entreprise" color="#FFFFFF" />
                  <Picker.Item label="Créateur" value="créateur" color="#FFFFFF" />
                  <Picker.Item label="Autre" value="autre" color="#FFFFFF" />
                </Picker>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Message *</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.message}
                onChangeText={(text) => setFormData({ ...formData, message: text })}
                placeholder="Décrivez votre projet ou vos besoins..."
                placeholderTextColor="#666"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>

            <TouchableOpacity onPress={handleSubmit}>
              <LinearGradient
                colors={['#FF0050', '#00F2EA']}
                style={styles.submitButton}
                start={[0, 0]}
                end={[1, 0]}
              >
                <Text style={styles.submitButtonText}>Envoyer</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animated.View>

        <Animated.View 
          entering={FadeInUp.delay(600).duration(800)}
          style={styles.contactInfo}
        >
          <Text style={styles.contactTitle}>Informations de contact</Text>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Email</Text>
            <Text style={styles.contactValue}>contact@kolabo-app.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Téléphone</Text>
            <Text style={styles.contactValue}>+225 XX XX XX XX</Text>
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
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
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '300',
    color: '#E0E0E0',
    textAlign: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    gap: 48,
  },
  formContainer: {
    flex: 2,
  },
  form: {
    backgroundColor: '#1E1E1E',
    padding: 32,
    borderRadius: 16,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#121212',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#FFFFFF',
  },
  pickerContainer: {
    backgroundColor: '#121212',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
  },
  picker: {
    color: '#FFFFFF',
    backgroundColor: 'transparent',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  contactInfo: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 24,
  },
  contactItem: {
    marginBottom: 20,
  },
  contactLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E0E0E0',
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 16,
    fontWeight: '300',
    color: '#FFFFFF',
  },
});