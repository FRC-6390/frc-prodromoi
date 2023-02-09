import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Button, Alert,  View, Pressable } from 'react-native';
import mainScreen from './js/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Button1 from './Typescript/Buttons';
import FlexDirectionBasics from './js/MainScreen';

const Stack = createNativeStackNavigator();
 


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', margin: '10', padding: '20'}}>
     
        <Pressable style={styles.button}   onPress={() => navigation.navigate('Details')}>
        <Text style={styles.text}>{"Details"}</Text>
      </Pressable>
  
  
       <Pressable style={styles.button} onPress={() => navigation.navigate('Team')}>
        <Text style={styles.text}>{"Go to Teams"}</Text>
        </Pressable>
      
    </View>
  );
}

function DetailsScreen() {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    
    </View>
  );
  
}

function Teams(){
return(
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>Teams Screen</Text>
  
</View>

);

}


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={Button1} />
      <Stack.Screen name="Team" component={FlexDirectionBasics} />
    </Stack.Navigator>
  </NavigationContainer>

  );

  
  
}


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
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 4,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: 'white',
  },
  

  
});


