import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './EveryDayTasksStyle';

export default class EveryDayTasks extends Component {
  render(){
      return(
          <View>
            <View>
              <View>
                <Button
                  title="EVERYDAY TASK"
                  onPress={()=>Alert.alert('I click it')}
                  type="outline"
                  buttonStyle={styles.titleBlockEDT}
                  titleStyle={styles.titleTextEDT}
                />
              </View>
            </View>
          </View>
          
      )
  }
}