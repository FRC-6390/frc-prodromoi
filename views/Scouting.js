import * as React from "react";
import { Text, ScrollView, StyleSheet, TextInput, View, SafeAreaView, Button, Alert} from "react-native";
import CheckBox from "../components/Checkbox";
import TheGrid from "../components/TheGrid";
import { Color, FontFamily } from "../GlobalStyles";
import { useState } from "react";

import MatchTypeDropdown from "../components/MatchTypeDropdown";
import EndPositionDropdown from "../components/EndPositionDropdown";
import MatchResultDropdown from "../components/MatchResultDropdown";
import { saveMatch } from "../data/SaveData";


var data = {};

const Scouting = ({navigation}) => {
  const [matchValue, setMatchValue] = useState(null);
  const [endPositionValue, setEndPositionValue] = useState(null);
  const [resultValue, setResultValue] = useState(null);
  const [autoValue, setAutoValue] = useState({"high_cones": 0, "high_cubes": 0, "low_cones": 0, "low_cubes": 0, "mid_cones": 0, "mid_cubes": 0});
  const [teleValue, setTeleValue] = useState({"high_cones": 0, "high_cubes": 0, "low_cones": 0, "low_cubes": 0, "mid_cones": 0, "mid_cubes": 0});
  const [mobilityValue, setMobilityValue] = useState(false);
  const [teamValue, setTeamValue] = useState(null);
  const [matchNumberValue, setMatchNumberValue] = useState(null);


  data = {
    "match_type": matchValue,
    "end_position": endPositionValue,
    "result": resultValue,
    "auto": autoValue,
    "tele": teleValue,
    "mobility": mobilityValue,
    "match_number": matchNumberValue,
    "team": teamValue,
  }

  return (
    <SafeAreaView style={[styles.viewConainer]}>
      <ScrollView style={[{width: "100%",flex:1}]}  contentContainerStyle={[{ alignItems: "center", paddingBottom:100 }]}>

        <TextInput keyboardType='numeric' placeholder={'Team#'} style={[styles.input, styles.matchType]} onChangeText={x => setTeamValue(x)}/>

        <View style={[ styles.matchType, {flexDirection: 'row'}]}>
          <TextInput keyboardType='numeric'placeholder={'Match#'} style={[styles.input, {marginRight: 20}]} onChangeText={x => setMatchNumberValue(x)}/>
          <MatchTypeDropdown style={[styles.matchType]} setValue={setMatchValue} value={matchValue} />
        </View >
        
        <View style={{zIndex:-5}}>
          <Text style={styles.auto}>Auto</Text>
        </View>
    
        <CheckBox text="Mobility" style={[styles.matchType]} value={mobilityValue} setValue={setMobilityValue} ></CheckBox>
        <TheGrid style={[{position:"relative"}]} value={autoValue} setValue={setAutoValue}/>
        <Text style={styles.tele}>Tele</Text>
        <TheGrid alue={teleValue} setValue={setTeleValue}/>
        <Text style={styles.tele}>Endgame</Text>
        <EndPositionDropdown style={[styles.matchType, {marginBottom:50}]} setValue={setEndPositionValue} value={endPositionValue} />
        <MatchResultDropdown style={[styles.matchType]} setValue={setResultValue} value={resultValue} />

        <View  style={[styles.matchType, {paddingTop:50, position: "relative", bottom: 0}]}>
          <Button title="Submit" onPress={Submit}/>
        </View>

      </ScrollView>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    viewConainer:{
        backgroundColor: Color.darkslategray,
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        alignContent: "center",
        flexGrow: 1,
        marginBottom: 50
    },
    input:{
      width: 80,
      height: 44,
      padding: 10,
      marginTop: 25,
      marginBottom: 10,
      backgroundColor: '#e8e8e8'
    },
    auto: {
      marginTop: 25,
      fontSize: 96,
      textAlign: "center",
      color: Color.white,
      position: "relative",
    },

    tele: {
      marginTop: 25,
      fontSize: 96,
      textAlign: "center",
      color: Color.white,
      position: "relative",
    },

    matchType:{
      top: 25,
      width: 200,
      alignSelf: "center"
    }
});

function Submit() {
  var issues = "";
  if(!data["result"]) issues += "Match Result\n"
  if(!data["team"]) issues += "Team Number\n"
  if(!data["match_number"]) issues += "Match Number\n"
  if(!data["match_type"]) issues += "Match Type\n"
  if(!data["end_position"]) issues += "End Position\n"

  if(issues){
    alert("The following needs to be filled:\n"+issues);
  }else{
    var name = data['team']+ "_" + data['match_type'] + "_" + data['match_number'];
    console.log(name)
    saveMatch("matches", name, data);
  }
  console.log(data)
}

export default Scouting;
