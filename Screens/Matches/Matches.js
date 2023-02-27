import React, {useState} from 'react';
import { StyleSheet, Text, Button, Alert,  View, Pressable } from 'react-native';

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Teams } from '../../App';
import App from '../../App';


const Stack = App.Stack;
var timepressed = 0;

const autoPoints = () => {
  const [timesPressed, setTimesPressed] = useState(0);//Don't delete.

return(
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '10', padding: '20'}}>
 
      <Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);//Don't delete. The counting system stops working if this line isn't here
          timepressed=timepressed + 1;
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(214, 38, 11)' : 'D6260B',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Pressed' : 'Press me'}</Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text>                </Text>
      </View>

 </View>


);

}
export{autoPoints};

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