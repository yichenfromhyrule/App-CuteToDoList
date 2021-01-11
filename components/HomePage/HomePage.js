import * as React from "react";
import { ImageBackground, Button, View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styles from "./HomePageStyle";
import HomeHeader from "./HomePageComponents/HomeHeader/HomeHeader";
import HomeStock from "./HomePageComponents/HomeStock/HomeStock";

/*
* Set Date as a Title
*/

export default function HomePage() {
  const element1 = <HomeStock 
    stockName="AAPL"
    highPrice="333.22"
    highTime="10:30"
    lowPrice="331.01"
    lowTime="14:54"
  />
  const element2 = <HomeStock 
    stockName="PFE"
    highPrice="333.22"
    highTime="10:30"
    lowPrice="331.01"
    lowTime="14:54"
  />
  const element3 = <HomeStock 
    stockName="IQ"
    highPrice="333.22"
    highTime="10:30"
    lowPrice="331.01"
    lowTime="14:54"
  />
  const element4 = <HomeStock 
    stockName="TWTR"
    highPrice="333.22"
    highTime="10:30"
    lowPrice="331.01"
    lowTime="14:54"
  />
  const element5 = <HomeStock 
    stockName="ZM"
    highPrice="333.22"
    highTime="10:30"
    lowPrice="331.01"
    lowTime="14:54"
  />
    return (
      <View style={styles.page}>
        <View>
          <SafeAreaView>
            <View style={styles.titleBlock}>
              <HomeHeader />
            </View>
            {element1}
            {element2}
            {element3}
            {element4}
            {element5}
          </SafeAreaView>
        </View>
      </View>
    );    
}