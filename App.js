import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, Alert,  View } from 'react-native';
import mainScreen from './js/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
 
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', /*justifyContent: 'space-between',*/ margin: '10', padding: '20'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
       <Button
        title="Go to Teams"
        onPress={() => navigation.navigate('Team')}
      />
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
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Team" component={Teams} />
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
});
