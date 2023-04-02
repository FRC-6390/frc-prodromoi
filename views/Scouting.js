import * as React from "react";
import { Text, ScrollView, StyleSheet, TextInput, View, SafeAreaView, Button, Alert} from "react-native";
import CheckBox from "../components/Checkbox";
import TheGrid from "../components/TheGrid";
import { Color, FontFamily } from "../GlobalStyles";
import { useState } from "react";
import { uploadDB } from "../data/Firebase";
import MatchTypeDropdown from "../components/MatchTypeDropdown";
import EndPositionDropdown from "../components/EndPositionDropdown";
import MatchResultDropdown from "../components/MatchResultDropdown";
import { deletFile, readFile, saveFile } from "../data/SaveData";
import { useNavigation, useRoute } from "@react-navigation/native";

var data = {};

const Scouting = ({navigation}) => {
  const route = useRoute();
  
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     // The screen is focused
  //     listMatches().then(data => setListData(data));
  //   });

  //   // Return the function to unsubscribe from the event so it gets removed on unmount
  //   return () => unsubscribe.remove();
  // }, [navigation]);  

  const [matchValue, setMatchValue] = useState(route.params ? route.params.paramKey.content.match_type ? route.params.paramKey.content.match_type : null : null);
  const [endPositionValue, setEndPositionValue] = useState(route.params ? route.params.paramKey.content.end_position ? route.params.paramKey.content.end_position : null : null);
  const [autoPositionValue, setAutoPositionValue] = useState(route.params ? route.params.paramKey.content.auto_position ? route.params.paramKey.content.auto_position : null : null);
  const [resultValue, setResultValue] = useState(route.params ? route.params.paramKey.content.result ? route.params.paramKey.content.result : null : null);
  const [autoValue, setAutoValue] = useState(route.params ? route.params.paramKey.content.auto ? route.params.paramKey.content.auto : {"high_cones": 0, "high_cubes": 0, "low_cones": 0, "low_cubes": 0, "mid_cones": 0, "mid_cubes": 0} : {"high_cones": 0, "high_cubes": 0, "low_cones": 0, "low_cubes": 0, "mid_cones": 0, "mid_cubes": 0});
  const [teleValue, setTeleValue] = useState(route.params ? route.params.paramKey.content.tele ? route.params.paramKey.content.tele : {"high_cones": 0, "high_cubes": 0, "low_cones": 0, "low_cubes": 0, "mid_cones": 0, "mid_cubes": 0} : {"high_cones": 0, "high_cubes": 0, "low_cones": 0, "low_cubes": 0, "mid_cones": 0, "mid_cubes": 0});
  const [mobilityValue, setMobilityValue] = useState(route.params ? route.params.paramKey.content.mobility ? route.params.paramKey.content.mobility : false : false);
  const [teamValue, setTeamValue] = useState(route.params ? route.params.paramKey.content.team ? route.params.paramKey.content.team : null : null);
  const [matchNumberValue, setMatchNumberValue] = useState(route.params ? route.params.paramKey.content.match_number ? route.params.paramKey.content.match_number : null : null);

  const states = {
    "setMatchValue" : setMatchValue,
    "setEndPositionValue" : setEndPositionValue,
    "setAutoPositionValue" : setAutoPositionValue,
    "setResultValue" : setResultValue,
    "setAutoValue" : setAutoValue,
    "setTeleValue" : setTeleValue,
    "setMobilityValue" : setMobilityValue,
    "setTeamValue" : setTeamValue,
    "setMatchNumberValue" : setMatchNumberValue
  }

  data = {
    "match_type": matchValue,
    "end_position": endPositionValue,
    "auto_position": autoPositionValue,
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

        <TextInput value={teamValue} keyboardType='numeric' placeholder={'Team#'} style={[styles.input, styles.matchType]} onChangeText={x => setTeamValue(x)}/>

        <View style={[ styles.matchType, {flexDirection: 'row', justifyContent: "center"}]}>
          <TextInput value={matchNumberValue} keyboardType='numeric'placeholder={'Match#'} style={[styles.input, {marginRight: 20}]} onChangeText={x => setMatchNumberValue(x)}/>
          <MatchTypeDropdown style={[styles.matchType]} setValue={setMatchValue} value={matchValue} />
        </View >
        
        <View style={{zIndex:-5}}>
          <Text style={styles.auto}>Auto</Text>
        </View>
    
        {/* <CheckBox text="Mobility" style={[styles.matchType]} value={mobilityValue} setValue={setMobilityValue} ></CheckBox> */}
        
        <TheGrid style={[{position:"relative"}]} value={autoValue} setValue={setAutoValue}/>
        <View style={[ styles.matchType, {flexDirection: 'row'}]}>
          {/* <EndPositionDropdown style={[styles.matchType, {marginBottom:50}]} setValue={setAutoPositionValue} value={autoPositionValue} /> */}
        </View>
        <View style={{zIndex:-5}}>
          <Text style={styles.tele}>Tele</Text>
        </View>
        <TheGrid value={teleValue} setValue={setTeleValue}/>
        {/* <Text style={styles.tele}>Endgame</Text> */}
        <View style={[ styles.matchType, {flexDirection: 'row', marginLeft: 0, alignItems: "center", justifyContent: "center",}]}>
          {/* <EndPositionDropdown style={{}} setValue={setEndPositionValue} value={endPositionValue} /> */}
          {/* <MatchResultDropdown style={{}} setValue={setResultValue} value={resultValue} /> */}
        </View>

        <View  style={[styles.matchType, {paddingTop:170, position: "relative", bottom: 0}]}>
          <Button title="Submit" onPress={() => {Submit(route, navigation, states); }}/>
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

function reset(states) {
  
  states.setMatchValue(null);
  states.setEndPositionValue(null);
  states.setAutoPositionValue(null);
  states.setResultValue(null);
  states.setAutoValue({"high_cones": 0, "high_cubes": 0, "low_cones": 0, "low_cubes": 0, "mid_cones": 0, "mid_cubes": 0});
  states.setTeleValue({"high_cones": 0, "high_cubes": 0, "low_cones": 0, "low_cubes": 0, "mid_cones": 0, "mid_cubes": 0});
  states.setMobilityValue(false);
  states.setTeamValue(null);
  states.setMatchNumberValue();


}

function Submit(route, navigation, states) {
  // const route = useRoute();
  // console.log(route.params);
  var issues = "";
  // if(!data["result"]) issues += "Match Result\n"
  // if(!data["team"]) issues += "Team Number\n"
  // if(!data["match_number"]) issues += "Match Number\n"
  // if(!data["match_type"]) issues += "Match Type\n"
  // if(!data["end_position"]) issues += "End Position\n"
  // if(!data["auto_position"]) issues += "Auto Position\n"
  if(issues){
    alert("The following needs to be filled:\n"+issues);
  }else{
    var name = data['team']+ "_" + data['match_type'] + "_" + data['match_number']+".json";
    if(route.params){
      if(route.params.paramKey.id != name){
        deletFile("matches",route.params.paramKey.id);
        navigation.navigate('list');
      }
    }
    saveFile("matches", name, data);
    alert("Saved")
    reset(states);
  }
  
}

export default Scouting;
