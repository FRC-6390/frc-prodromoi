import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ScreenStack } from 'react-native-screens';
import App from '../../App';
import { FlexDirectionBasics } from './MainScreen';


var timepressed = 0;
const Stack = createNativeStackNavigator();

const navigatorScreen = (navigation) => {
return(

  
  <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '10', padding: '20'}}>
   <Text style={styles.text}>Testing</Text>
    
  <Pressable style={styles.button}  onPress={() => navigation('Team2')}>
  <Text style={styles.text}>{"to Teams"}</Text>

</Pressable>
</View>

);
}

const Button1 = () => {
 const [timesPressed, setTimesPressed] = useState(0);//Don't delete.

  return (
   

    <View style={styles.container}>

    
      <Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);//Don't delete. The counting system stops working if this line isn't here
          timepressed=timepressed + 1;
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(10, 100, 25)' : 'black',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'was pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text>This is pressed {timepressed}</Text>
      </View>
    </View>
  );
};



//export default navitgatorScreen;
/*export function Buttons(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="nav">
      <Stack.Screen name="nav" component={navitgatorScreen} />
      <Stack.Screen name="Details" component={Button1} />
    </Stack.Navigator>
  </NavigationContainer>


  );
}*/
export {Button1, navigatorScreen};
export function Buttons(){
return(
  <NavigationContainer>
     <Stack.Navigator initialRouteName="Nav">
     <Stack.Screen name="Nav" component={navigatorScreen} />
  <Stack.Screen name="Team2" component={navigatorScreen} />
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
    wrapperCustom: {
      borderRadius: 8,
      padding: 6,
    },
    logBox: {
      padding: 20,
      margin: 10,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#f0f0f0',
      backgroundColor: '#f9f9f9',
    },
  
  })
  
  


