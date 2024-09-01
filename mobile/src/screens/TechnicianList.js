import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTechnicianById } from '../services/api';

const TechnicianDetail = ({ route }) => {
  const [technician, setTechnician] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    const fetchTechnician = async () => {
      const data = await getTechnicianById(id);
      setTechnician(data);
    };
    fetchTechnician();
  }, [id]);

  if (!technician) return <View><Text>Loading...</Text></View>;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{technician.name}</Text>
      <Text>Uzmanlık: {technician.specialization}</Text>
      <Text>Deneyim: {technician.experience} yıl</Text>
      <Text>Puan: {technician.rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default TechnicianDetail;