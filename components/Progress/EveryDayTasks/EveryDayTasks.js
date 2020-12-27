import React, { Component } from "react";
import { View, Alert } from "react-native";
import { Button } from "react-native-elements";
import styles from "./EveryDayTasksStyle";

export default class EveryDayTasks extends Component {
  render(){
      return(
          <View>
            <View>
              <View>
                <Button
                  title="EVERYDAY TASK"
                  onPress={()=>Alert.alert("I click it")}
                  type="outline"
                  buttonStyle={styles.titleBlockEDT}
                  titleStyle={styles.titleTextEDT}
                />
              </View>
            </View>
          </View>
          
      );
  }
}