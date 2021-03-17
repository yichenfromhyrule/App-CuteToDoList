/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "./HomeHeaderStyle";

var currentDate = new Date();
var currentDateArray = (String(currentDate)).split(" ");
var date = currentDateArray[1] + " " + currentDateArray[2];// + " " + currentDateArray[3];

export default class HomeHeader extends Component {
  render(){
      return(
          <View>
            <View style={styles.headerContainer}>
              <View style={styles.headerDate}>
                <Text style={{color: 'black', fontSize: 30}}>{date}</Text>
              </View>
            </View>

            
          </View>
      )
  }
}