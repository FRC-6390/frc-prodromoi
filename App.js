import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Button, Alert,  View, Pressable } from 'react-native';
import mainScreen from './Screens/Matches/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {Button1, navigatorScreen} from './Screens/Matches/Buttons';
import {FlexDirectionBasics} from './Screens/Matches/MainScreen';
import { Button1, navigatorScreen } from './Screens/Matches/Buttons';


const Stack = createNativeStackNavigator();
 
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '10', padding: '20'}}>
     
        <Pressable style={styles.button} onPress={() => navigation.navigate('Team2')}>
        <Text style={styles.text}>{"Matches"}</Text>
      </Pressable>
  
      <Pressable style={styles.button} onPress={() => navigation.navigate('Team')}>
        <Text style={styles.text}>{"Results"}</Text>
        </Pressable>

      
    </View>
  );
}


//Testing Function
function Teams({navigation}){
return(
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>Teams Screen</Text>

  
       <Pressable style={styles.button} onPress={() => navigation.push('Team')}>
        <Text style={styles.text}>{"go to Teams2"}</Text>
        </Pressable>

</View>
);
}
//*************************************************************************************************** */

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Team2" component={navigatorScreen}/>
      <Stack.Screen name="Team" component={FlexDirectionBasics} />
      <Stack.Screen name="Details"component={Button1}/>
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


