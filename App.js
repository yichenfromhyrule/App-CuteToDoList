import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './AppStyle';
import ProgressHeader from './components/Progress/ProgressHeader';

export default function App() {
  return (
    <View style={styles.page}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>PROGRESS</Text>
      </View>
      
      <View style={styles.headerBlock}>
        <View />
        <ProgressHeader />
        <View />
      </View>
      
      <Text>I am a Text</Text>
    </View>
  );
}
