import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.navItem}>Ana Sayfa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TechnicianList')}>
        <Text style={styles.navItem}>Teknisyenler</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#f8f8f8',
  },
  navItem: {
    fontSize: 16,
  },
});

export default Navbar;