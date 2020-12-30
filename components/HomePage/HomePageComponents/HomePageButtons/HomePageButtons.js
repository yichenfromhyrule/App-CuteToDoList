import React, { Component } from "react";
import { View, Alert } from "react-native";
import { Button, Icon } from "react-native-elements";
import styles from "./HomePageButtonsStyle";

export default class HomePageButtons extends Component {
  render(){
      return(
          <View>
            <View>
              <View>
                <Button
                  title="EVERYDAY TASK"
                  onPress={()=>Alert.alert("I click it")}
                  type="outline"
                  buttonStyle={styles.homePageButton}
                  titleStyle={styles.homePageButtonText}
                />
                <Button
                  title="EVERYDAY TASK"
                  onPress={()=>Alert.alert("I click it")}
                  type="outline"
                  buttonStyle={styles.homePageButton}
                  titleStyle={styles.homePageButtonText}
                />
              </View>
            </View>
          </View>
          
      );
  }
}