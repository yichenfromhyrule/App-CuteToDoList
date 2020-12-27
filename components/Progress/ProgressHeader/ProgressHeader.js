/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "./ProgressStyle";
import snowman from "../../../resource/snowman/snowman.png";

export default class ProgressHeader extends Component {
  render(){
      return(
          <View>
            <View style={styles.headerContainer}>
              <View style={styles.headerLogoContainer}>
                <Image
                  style={styles.headerLogo}
                  source = {snowman}
                />
              </View>
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerDateText}>Today's Goal</Text>
                <Text style={styles.headerText}>1/5</Text>
              </View>
            </View>
          </View>
          
      )
  }
}