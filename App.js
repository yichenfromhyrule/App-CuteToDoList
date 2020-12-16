import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProgressHeader from './components/Progress/ProgressHeader';

export default function App() {
  return (
    <View style={styles.container2}>
      <Text>PROGRESS</Text>
      <ProgressHeader />
      <Text>I am a Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: "#fff",
    padding: 20,
    margin: 30,
  },
  
});
