import React, { Component } from "react";
import { View, Alert, Text } from "react-native";
import { Button, Icon } from "react-native-elements";
import styles from "./HomeStockStyle";

export default function HomeStock(props) {
  return(
    <View>
        <View style={styles.stockContainer}>
            <View style={styles.stockNameContainer}>
                <Text style={{color: 'white', fontSize: 24}}>{props.stockName}</Text>
            </View>
            <View style={styles.stockTimeContainer}>
                <Text style={{color: 'white', fontSize: 16}}>{props.highTime}</Text>
                <Text style={{color: 'white', fontSize: 12}}>{props.highPrice}</Text>
            </View>
            <View style={styles.stockTimeContainer}>
                <Text style={{color: 'white', fontSize: 16}}>{props.lowTime}</Text>
                <Text style={{color: 'white', fontSize: 12}}>{props.lowPrice}</Text>
            </View>
            
        </View>
        
    </View>    
  );
}