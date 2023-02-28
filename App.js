import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Button, Alert,  View, Pressable, ScrollView, Switch, TextInput,SectionList } from 'react-native';
import mainScreen from './Screens/Matches/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {Button1, navigatorScreen} from './Screens/Matches/Buttons';
import {FlexDirectionBasics} from './Screens/Matches/MainScreen';
import { Button1, navigatorScreen } from './Screens/Matches/Buttons';
import {autoPoints} from './Screens/Matches/Matches';


const Stack = createNativeStackNavigator();

var AutoScore = 0;
var TeleScore = 0;
var aLowRung = 0;
var aMidRung = 0;
var aHighRung = 0;
var tLowRung = 0;
var tMidRung = 0;
var tHighRung = 0;
var Links = 0;
var aCommunity = false;
var tCommunity = false;
var aDock = false;
var aEngaged = false;
var tDock = false;
var tEngaged = false;
var match = "Match type and #";
var teamName = "Team Number/Name"
var matchResult = "Match Result"

 
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
  const [values, onChangeText] = React.useState(match);
  const[Value, onchangetext] = React.useState(teamName);
  return(


  <View>
    <View style={styles.btnBox}>
<Pressable style={{flexDirection: 'row'}} onPress={() => {onChangeText(values => values);match = values;}}>

        <TextInput
            style={styles.Textinput}
            onChangeText={Text => {onChangeText(Text);}}
            value={values}
        />  
        <Text style={styles.text}>Save</Text>
        </Pressable>

        <Pressable style={{flexDirection:'row'}} onPress={() => {onchangetext(Value => Value);teamName = Value;}}>
         <TextInput
            style={styles.Textinput}
            onChangeText={text => {onchangetext(text);}}
            value={Value}
        />
            <Text style={styles.text}>Sav</Text>
        </Pressable>

    </View>
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
</View>
);
}


function Auto({navigation}){

  let[autoScore, setAutoscore] = useState(0);
  const [acommunity, setIsEnabled] = useState(false);

  return(
<View style={{alignItems: 'center'}} >
  <Text style={styles.text}>Highrung</Text>
<View style={{ flexWrap: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '10', padding: '20' }}>
 
  <Pressable style={styles.button} onPress={() => {setAutoscore(current => current + 1), aHighRung = aHighRung +1;}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? ' ' : '+'}</Text>
        )}
  </Pressable>
  <Text style={styles.text}>{aHighRung}</Text>
  <Pressable style={styles.button} onPress={() => {setAutoscore(current => current + 1), aHighRung = aHighRung -1;}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? ' ' : '-'}</Text>
        )}
  </Pressable>
  
</View>
<View style={{alignItems: 'center'}} >
  <Text style={styles.text}>Middlerung</Text>
</View>

 <View style={styles.btnBox}>
  <Pressable style={styles.button} onPress={() => {setAutoscore(current => current + 1), aMidRung = aMidRung +1;}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? ' ' : '+'}</Text>
        )}
  </Pressable>
  <Text style={styles.text}>{aMidRung}</Text>
  <Pressable style={styles.button} onPress={() => {setAutoscore(current => current + 1), aMidRung = aMidRung -1;}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? ' ' : '-'}</Text>
        )}
  </Pressable>
  </View>

  <View style={{alignItems: 'center'}} >
  <Text style={styles.text}>Bottomrung</Text>
</View>

 <View style={styles.btnBox}>
  <Pressable style={styles.button} onPress={() => {setAutoscore(current => current + 1), aLowRung = aLowRung +1;}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? ' ' : '+'}</Text>
        )}
  </Pressable>
  <Text style={styles.text}>{aLowRung}</Text>
  <Pressable style={styles.button} onPress={() => {setAutoscore(current => current + 1), aLowRung = aLowRung -1;}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? ' ' : '-'}</Text>
        )}
  </Pressable>
  </View>

  <View style = {styles.btnBox}>
  <Pressable style={styles.button} onPress={() => {setIsEnabled(previousState => !previousState); aCommunity = !aCommunity}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? '              ' : 'Left Community'}</Text>
        )}
  </Pressable>
<Text>{aCommunity ? 'on': 'Off'}</Text>

  </View>
  <View style = {styles.btnBox}>
  <Pressable style={styles.button} onPress={() => {setIsEnabled(previousState => !previousState); aDock = !aDock}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? '            ' : 'Robot Docked'}</Text>
        )}
  </Pressable>
<Text>{aDock ? 'on': 'Off'}</Text>

  </View>
  <View style = {styles.btnBox}>
  <Pressable style={styles.button} onPress={() => {setIsEnabled(previousState => !previousState); aEngaged = !aEngaged}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? '            ' : 'Robot Engaged'}</Text>
        )}
  </Pressable>
<Text>{aEngaged ? 'on': 'Off'}</Text>

  </View>
  

<View style={styles.btnBox}>
      <Pressable style={styles.button} onPress={() => navigation.push('Team2')}>
        <Text style={styles.text}>{"Back"}</Text>
        </Pressable>
        
</View>
        </View>


);
}
//------------------------------------------------------------------------------------------------------------------------------
//**************************************************************************************************************************** */
//------------------------------------------------------------------------------------------------------------------------------
function Tele({navigation}){

  let[autoScore, setAutoscore] = useState(0);
  const [acommunity, setIsEnabled] = useState(false);

  return(
<View style={{alignItems: 'center'}} >
  <Text style={styles.text}>Highrung</Text>
<View style={{ flexWrap: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '10', padding: '20' }}>
 
  <Pressable style={styles.button} onPress={() => {setAutoscore(current => current + 1), tHighRung = tHighRung +1;}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? ' ' : '+'}</Text>
        )}
  </Pressable>
  <Text style={styles.text}>{tHighRung}</Text>
  <Pressable style={styles.button} onPress={() => {setAutoscore(current => current + 1), tHighRung = tHighRung -1;}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? ' ' : '-'}</Text>
        )}
  </Pressable>
  
</View>
<View style={{alignItems: 'center'}} >
  <Text style={styles.text}>Middlerung</Text>
</View>

 <View style={styles.btnBox}>
  <Pressable style={styles.button} onPress={() => {setAutoscore(current => current + 1), tMidRung = tMidRung +1;}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? ' ' : '+'}</Text>
        )}
  </Pressable>
  <Text style={styles.text}>{tMidRung}</Text>
  <Pressable style={styles.button} onPress={() => {setAutoscore(current => current + 1), tMidRung = tMidRung -1;}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? ' ' : '-'}</Text>
        )}
  </Pressable>
  </View>

  <View style={{alignItems: 'center'}} >
  <Text style={styles.text}>Bottomrung</Text>
</View>

 <View style={styles.btnBox}>
  <Pressable style={styles.button} onPress={() => {setAutoscore(current => current + 1), tLowRung = tLowRung +1;}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? ' ' : '+'}</Text>
        )}
  </Pressable>
  <Text style={styles.text}>{tLowRung}</Text>
  <Pressable style={styles.button} onPress={() => {setAutoscore(current => current + 1), tLowRung = tLowRung -1;}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? ' ' : '-'}</Text>
        )}
  </Pressable>
  </View>
  <View style={{alignItems: 'center'}} >
  <Text style={styles.text}>Links Made</Text>
</View>
  <View style = {styles.btnBox}>

  <Pressable style={styles.button} onPress={() => {setAutoscore(current => current + 1), Links = Links +1;}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? ' ' : '+'}</Text>
        )}
  </Pressable>
  <Text style={styles.text}>{Links}</Text>
  <Pressable style={styles.button} onPress={() => {setAutoscore(current => current + 1), Links = Links -1;}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? ' ' : '-'}</Text>
        )}
  </Pressable>

  </View>

<View style={styles.btnBox}>
      <Pressable style={styles.button} onPress={() => navigation.push('Team2')}>
        <Text style={styles.text}>{"Back"}</Text>
        </Pressable>
        
</View>
        </View>


);
}
//------------------------------------------------------------------------------------------------------------------------------
//**************************************************************************************************************************** */
//------------------------------------------------------------------------------------------------------------------------------

function Endgame({navigation}){
  let[autoScore, setAutoscore] = useState(0);
  const [acommunity, setIsEnabled] = useState(false);
  const [Values, onChangeText] = React.useState(matchResult);

  return(
<View style={{alignItems: 'center'}} >
 
  <View style = {styles.btnBox}>
  <Pressable style={styles.button} onPress={() => {setIsEnabled(previousState => !previousState); tCommunity = !tCommunity}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? '              ' : 'Robot Parked'}</Text>
        )}
  </Pressable>
<Text>{tCommunity ? 'on': 'Off'}</Text>

  </View>
  <View style = {styles.btnBox}>
  <Pressable style={styles.button} onPress={() => {setIsEnabled(previousState => !previousState); tDock = !tDock}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? '            ' : 'Robot Docked'}</Text>
        )}
  </Pressable>
<Text>{tDock ? 'on': 'Off'}</Text>

  </View>
  <View style = {styles.btnBox}>
  <Pressable style={styles.button} onPress={() => {setIsEnabled(previousState => !previousState); tEngaged = !tEngaged}}>
   {({pressed}) => (
          <Text style={styles.text}>{pressed ? '            ' : 'Robot Engaged'}</Text>
        )}
  </Pressable>
<Text>{tEngaged ? 'on': 'Off'}</Text>


  </View>
 
<View style={styles.btnBox}>
<Pressable style={{flexDirection: 'row'}} onPress={() => {onChangeText(Values => Values);matchResult = Values;}}>

        <TextInput
            style={styles.Textinput}
            onChangeText={Text => {onChangeText(Text);}}
            value={Values}
        />  
        <Text style={styles.text}>Save</Text>
        </Pressable>
      
</View>

<View style={styles.btnBox}>
      <Pressable style={styles.button} onPress={() => navigation.push('Team2')}>
        <Text style={styles.text}>{"Back"}</Text>
        </Pressable>
        
</View>
        </View>


);
  }
  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risott'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];
  
  


  function Results({navigation}){
return(
<View>
<View style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </View>

<View style={styles.btnBox}>
      <Pressable style={styles.button} onPress={() => navigation.push('Team2')}>
        <Text style={styles.text}>{"Back"}</Text>
        </Pressable>
        
</View>
        </View>

);
  }


//export{Teams};
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Team2" component={Matchselect}/>
      <Stack.Screen name="Team" component={Results} />
      <Stack.Screen name="auto"component={Auto}/>
      <Stack.Screen name="teleOp"component={Tele}/>
      <Stack.Screen name="endGame"component={Endgame}/>
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
    paddingHorizontal: 40,
    margin: 4,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#D6260B',
    flexWrap: 1,
  },
  Textinput: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 25,
    margin: 4,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#D3D3D3',
    borderColor: 'D6260B',
    borderWidth: 1,
    flexWrap: 1,
  },
  text: {
    fontSize: 22,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: 'black',
  },
  btnBox:{
    flexWrap: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    margin: '10', 
    padding: '20'

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },

  

  
});


