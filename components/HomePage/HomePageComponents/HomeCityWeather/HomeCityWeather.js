import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "./HomeCityWeatherStyle";

export default function HomeCityWeather(props) {
  return(
      <View>
        <View style={styles.cityContainer}>
            <View style={styles.cityWeatherContainer}></View>
        </View>
      </View>
  );
}