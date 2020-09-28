import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import LottieView from 'lottie-react-native';
import FabButton from './src/components/FabButton.js';

export default function BasicExample() {
  
  //render() 
    const [value, onChangeText] = React.useState('Maria');
    return(
      <View style = {s.c}>
        <LottieView  style = {s.w}
          source={require('./paraquedas.json')} autoPlay loop
        />
        <LottieView style = {s.f2}
          source={require('./ok2.json')} autoPlay loop
        />
        <Text style = {s.t}>
          Caiu de paraquedas aqui?
        </Text>
        <Text style = {s.t2}>
          Qual é o seu nome?
        </Text>
        <TextInput style = {s.inp}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
    </View>
    );
  
}

const s = StyleSheet.create({
  w:{
    backgroundColor: '#50b9ff'
  },
  c: {
    backgroundColor: '#50b9ff',
    flex: 1,
  },
  f2: {
    position: 'absolute',
    right: 0,
    bottom: 5,
    width: 110
  },
  t: {
    left:30,
    width:320,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 35,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 50,
    color: '#50b9ff',
    top:20,
    elevation:10,
    zIndex:9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    }
  },
  t2: {
    position: 'absolute',
    right: 200,
    bottom: 30,
    width: 100,
    height: 70,
    color: '#50b9ff',
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderRadius: 50,
    padding: 15,
  },
  inp: {
    position: 'absolute',
    right: 100,
    bottom: 30,
    width: 90,
    height: 70,
    color: '#666',
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderRadius: 50,
    padding: 15,
  },
})

