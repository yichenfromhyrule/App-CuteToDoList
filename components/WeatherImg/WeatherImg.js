import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import snowman from '../../resource/snowman/snowman.png';

export default class Weethee extends Component {
  render(){
      return(
          <Image source={snowman} />
      )
  }
}