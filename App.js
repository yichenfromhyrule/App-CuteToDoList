import React , { useEffect, useState } from 'react';
import "react-native-gesture-handler";
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HomePage from "./components/HomePage/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Home() {
  return (
    <HomePage />
  );
}

function StockScreen() {
  return (
    <HomePage />
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'analytics'
                  : 'analytics-outline';
              } 
              else if (route.name === 'Stock') {
                iconName = focused
                  ? 'bar-chart'
                  : 'bar-chart-outline';
              }
              else if (route.name === 'Search') {
                iconName = focused
                  ? 'earth'
                  : 'earth-outline';
              }
              else if (route.name === 'About') {
                iconName = focused
                  ? 'ellipsis-horizontal-circle'
                  : 'ellipsis-horizontal-circle-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#4973AF',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />
          <Tab.Screen name="Stock" component={StockScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;