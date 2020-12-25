import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './HomePageStyle';
import ProgressHeader from '../Progress/ProgressHeader/ProgressHeader';
import EveryDayTasks from '../Progress/EveryDayTasks/EveryDayTasks';

export default function HomePage() {
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