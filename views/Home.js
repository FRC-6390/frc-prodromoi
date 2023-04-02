import * as React from "react";
import { Text, ScrollView, StyleSheet, TextInput, View, SafeAreaView, Button, Alert} from "react-native";
import { apiRequest } from "../data/TBAv3";
import { Color } from "../GlobalStyles";
import { useState } from "react";



const Home = ({navigation}) => {

  const [eventKey, setEventKey] = useState(null);


  return <View style={styles.viewConainer}>

<TextInput placeholder={'Event Key'} onChangeText={(x)=> setEventKey(x)} style={[styles.input, styles.matchType]}/>
<Button title="Test" onPress={() => {getEventData(eventKey)}} style={[{width: 100}]}/>

  </View>;
};

function getEventData(eventKey) {
  console.log(apiRequest("/event/"+eventKey+"/teams/simple"));
}

const styles = StyleSheet.create({
    viewConainer:{
        backgroundColor: Color.darkslategray,
        flex: 1,
        width: "100%",
        height: 1024,
        overflow: "hidden",
    },
    input:{
      width: 80,
      height: 44,
      padding: 10,
      marginTop: 25,
      marginBottom: 10,
      backgroundColor: '#e8e8e8'
    },
      matchType:{
        top: 25,
        width: 200,
        alignSelf: "center"
      },
});

export default Home;
