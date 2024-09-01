import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TechnicianCard = ({ technician }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('TechnicianDetail', { id: technician._id })}
    >
      <Text style={styles.name}>{technician.name}</Text>
      <Text>Uzmanlık: {technician.specialization}</Text>
      <Text>Deneyim: {technician.experience} yıl</Text>
      <Text>Puan: {technician.rating}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default TechnicianCard;