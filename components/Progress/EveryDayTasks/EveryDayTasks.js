import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import styles from './EveryDayTasksStyle';

export default class EveryDayTasks extends Component {
  render(){
      return(
          <View>
            <View style={styles.titleBlockEDT}>
            <Text style={styles.titleTextEDT}>EVERYDAY'S TASKS</Text>
            </View>
          </View>
          
      )
  }
}