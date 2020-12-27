import * as React from "react";
import { Button, View, Text } from "react-native";
import styles from "./HomePageStyle";
import ProgressHeader from "../Progress/ProgressHeader/ProgressHeader";
import EveryDayTasks from "../Progress/EveryDayTasks/EveryDayTasks";

/*
* Set Date as a Title
*/
var weekday=new Array(7);
weekday[0]="Sun";
weekday[1]="Mon";
weekday[2]="Tue";
weekday[3]="Wed";
weekday[4]="Thu";
weekday[5]="Fri";
weekday[6]="Sat";
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();
var currentWeekDay = currentDate.getDay();
var date = String(currentMonth) + "/" + String(currentDay) + "/" + String(currentYear) + ' ' + weekday[currentWeekDay];

export default function HomePage() {
    return (
      <View style={styles.page}>
        <View style={styles.titleBlock}>
          <Text style={styles.titleText}>
            {date}
          </Text>
        </View>

        <View style={styles.titleBlock}>
          <View />
          <ProgressHeader />
          <EveryDayTasks />
          <View />
        </View>
      </View>
    );    
}