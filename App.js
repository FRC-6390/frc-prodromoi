import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Button, Alert,  View, Pressable, ScrollView } from 'react-native';
import mainScreen from './Screens/Matches/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {Button1, navigatorScreen} from './Screens/Matches/Buttons';
import {FlexDirectionBasics} from './Screens/Matches/MainScreen';
import { Button1, navigatorScreen } from './Screens/Matches/Buttons';
import { Hermes } from './Screens/Matches/ScreenChanger';


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

        <Pressable style={styles.button} onPress={() => navigation.navigate('Screener')}>
          <Text style={styles.text}>{"Save (WIP)"}</Text>

          </Pressable>

      
    </View>
  );
}


function Matchselect({navigation}){
return(
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

       <Pressable style={styles.button} onPress={() => navigation.push('auto')}>
        <Text style={styles.text}>{"Auto"}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.push('teleOp')}>
        <Text style={styles.text}>{"TeleOp"}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.push('endGame')}>
        <Text style={styles.text}>{"EndGame"}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.push('Home')}>
        <Text style={styles.text}>{"Back"}</Text>
        </Pressable>

</View>
);
}

function Auto(){
return(
 
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Test 
</Text>
</View>


);
}

function Tele(){
return(
  <View>
  
  
  </View>

)
}



//export{Teams};
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Team2" component={Matchselect}/>
      <Stack.Screen name="Team" component={FlexDirectionBasics} />
      <Stack.Screen name="auto"component={Auto}/>
      <Stack.Screen name="teleOp"component={Tele}/>
      <Stack.Screen name="endGame"component={placeholder}/>
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


