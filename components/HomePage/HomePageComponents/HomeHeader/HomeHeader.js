/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "./HomeHeaderStyle";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


var currentDate = new Date();
var currentDateArray = (String(currentDate)).split(" ");
var date = currentDateArray[1] + " " + currentDateArray[2] + " " + currentDateArray[3];

export default class HomeHeader extends Component {
  render(){
      return(
          <View>
            <View style={styles.headerContainer}>
              <View style={styles.headerDate}>
                <Text style={{color: 'white', fontSize: 20}}>{date}</Text>
              </View>
              <View style={styles.headerIcon}>
                <Feather name="search" size={24} color="white" />
              </View>
              <View style={styles.headerIcon}>
                <AntDesign name="plus" size={24} color="white" />
              </View>
            </View>

            <View style={styles.titleContainer}>
              <View style={styles.titleName}>
                <Text style={{color: '#BFBFBF', fontSize: 15}}>stock name</Text>
              </View>
              <View style={styles.titleTime}>
                <Text style={{color: '#BFBFBF', fontSize: 15}}>Highest</Text>
              </View>
              <View style={styles.titleTime}>
                <Text style={{color: '#BFBFBF', fontSize: 15}}>Lowest</Text>
              </View>
            </View>
          </View>
      )
  }
}