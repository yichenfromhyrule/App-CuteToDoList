import React, { Component } from "react";
import { View, Alert, Text } from "react-native";
import { Button, Icon } from "react-native-elements";
import styles from "./HomeStockStyle";

export default function HomeStock(props) {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState('');
  if(isLoading){
    fetch("https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=".concat(props.stockName), {
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
    let onePieceStock_high = "";
    let onePieceStock_low = "";
    if(onePieceStockValues[0]){
        const onePieceStockArray = Object.entries(onePieceStockValues[0]); 
        onePieceStock_name = onePieceStockArray[0][1];
        onePieceStock_high = onePieceStockArray[2][1];
        onePieceStock_low = onePieceStockArray[3][1];
  }
  return(
    <View>
        <View style={styles.stockContainer}>
            <View style={styles.stockNameContainer}>
                <Text style={{color: '#ACA0DE', fontSize: 20}}>{props.stockName}</Text>
            </View>
            <View style={styles.stockTimeContainer}>
                <Text style={{color: '#ACA0DE', fontSize: 16}}>{props.highTime}</Text>
                <Text style={{color: '#ACA0DE', fontSize: 12}}>{onePieceStock_high}</Text>
            </View>
            <View style={styles.stockTimeContainer}>
                <Text style={{color: '#ACA0DE', fontSize: 16}}>{props.lowTime}</Text>
                <Text style={{color: '#ACA0DE', fontSize: 12}}>{onePieceStock_low}</Text>
            </View>
            
        </View>
        
    </View>    
  );
}