import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Free Flower</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EFE6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#4A235A',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Georgia',
  },
});
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Free Flower</Text>
      <Text style={styles.subtitle}>Sacred space for womb + spirit</Text>
      <Button
        title="Enter Womb Soundscape"
        onPress={() => navigation.navigate('WombSoundscape')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EFE6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A235A',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#7D3C98',
    marginBottom: 20,
  },
});
