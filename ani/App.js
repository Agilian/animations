import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';
import rocket from './paraquedas.json';

export default function App() {

  return(
    <SafeAreaView style={s.c}>
      <Text style={s.w}>
        teste2
      </Text>
    </SafeAreaView>
  ); 
}

const s = StyleSheet.create({
  c: {
    backgroundColor: "#333"
  },
  w:{
    color: "#CCC"
  }
})
