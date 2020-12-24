import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './AppStyle';
import ProgressHeader from './components/Progress/ProgressHeader/ProgressHeader';
import EveryDayTasks from './components/Progress/EveryDayTasks/EveryDayTasks';

export default function App() {
  return (
    <View style={styles.page}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>PROGRESS</Text>
      </View>
      
      <View style={styles.titleBlock}>
        <View />
        <ProgressHeader />
        <EveryDayTasks />
        <View />
      </View>

      
      
    </View>
  );
}
