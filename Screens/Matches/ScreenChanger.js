import React, {useState} from 'react';
import { StyleSheet, Text, Button, Alert,  View, Pressable } from 'react-native';

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Teams } from '../../App';
import App from '../../App';


const Stack = App.Stack;

const Hermes = () => {
return(
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '10', padding: '20'}}>
    <Text style={styles.text}>Testing</Text>
 </View>


);

}
export{Hermes};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#33BEFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingVertical: 30,
      paddingHorizontal: 50,
      margin: 4,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'red',
    },
    text: {
      fontSize: 22,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 1.5,
      color: 'white',
    },
    
  
    
  });