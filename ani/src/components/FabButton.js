import React, { Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class FabButton extends Component {
  render(){
    return(
      <Text style = {s.f}>Botao</Text>
    );
  }
}


const s = StyleSheet.create({
  f: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 35,
    position: 'absolute',
    backgroundColor: '#e6af15',
    padding: 15,
    borderRadius: 15,
    textAlign: 'center',
    right: 20,
    bottom: 30,
    color: '#fff'

  }
})