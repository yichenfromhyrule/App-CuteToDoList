import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import styles from './ProgressStyle';
import snowman from '../../resource/snowman/snowman.png';

export default class ProgressHeader extends Component {
  render(){
      return(
          <View>
            <View style={styles.headerContainer}>
              <Image
                style={styles.headerLogo}
                source = {snowman}
              />
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerDateText}>Today's Goal</Text>
                <Text style={styles.headerText}>1/5</Text>
              </View>
            </View>
          </View>
          
      )
  }
}