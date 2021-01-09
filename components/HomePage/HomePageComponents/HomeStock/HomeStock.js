import React, { Component } from "react";
import { View, Alert, Text } from "react-native";
import { Button, Icon } from "react-native-elements";
import styles from "./HomeStockStyle";

export default function HomeStock(props) {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState('');
  if(isLoading){
    fetch("https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=TSLA", {
	  "method": "GET",
	  "headers": {
	    "x-rapidapi-key": "6344837b96msh4dd4d2909be9cbbp1320a9jsn673352df54c6",
		"x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
	  }
    })
    .then(response => response.json())
    .then(data => {         
      setData(data);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => setLoading(false));;
    }
    const onePieceStockValues = Object.values(data);
    let onePieceStock_name = "";
    let onePieceStock_close = "";
    if(onePieceStockValues[0]){
        const onePieceStockArray = Object.entries(onePieceStockValues[0]); 
        onePieceStock_name = onePieceStockArray[0][1];
        onePieceStock_close = onePieceStockArray[7][1];
  }
  return(
    <View>
        <View style={styles.stockContainer}>
            <View style={styles.stockNameContainer}>
                <Text style={{color: '#2E265F', fontSize: 20}}>{onePieceStock_name}</Text>
            </View>
            <View style={styles.stockTimeContainer}>
                <Text style={{color: '#2E265F', fontSize: 16}}>{props.highTime}</Text>
                <Text style={{color: '#ACA0DE', fontSize: 12}}>{onePieceStock_close}</Text>
            </View>
            <View style={styles.stockTimeContainer}>
                <Text style={{color: '#2E265F', fontSize: 16}}>{props.lowTime}</Text>
                <Text style={{color: '#ACA0DE', fontSize: 12}}>{props.lowPrice}</Text>
            </View>
            
        </View>
        
    </View>    
  );
}