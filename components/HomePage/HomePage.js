import * as React from "react";
import { ImageBackground, Button, View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styles from "./HomePageStyle";
import HomeHeader from "./HomePageComponents/HomeHeader/HomeHeader";

/*
* Set Date as a Title
*/

export default function HomePage() {
    return (
      <View style={styles.page}>
        <View>
          <SafeAreaView>
            <View style={styles.titleBlock}>
              <HomeHeader />
            </View>
          </SafeAreaView>
        </View>
      </View>
    );    
}