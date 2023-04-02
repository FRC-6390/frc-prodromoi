import React, { useEffect, useRef } from 'react';
import { StyleSheet, View,FlatList, Text, Pressable } from "react-native";
import { deletFile, listMatches } from "../data/SaveData";
import { Color } from "../GlobalStyles";
import { useState } from "react";
import { apiRequest } from "../data/TBAv3";
import { NavigationContainer, useIsFocused, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scouting from './Scouting';
import MatchResultItem from '../components/MatchResultItem';

const Stack = createNativeStackNavigator();


const Matches = ({navigation}) => {

  const [listData, setListData] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      listMatches().then(data => {setListData(data)});
      
      
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return () => unsubscribe.remove();
  }, [navigation]);  
  // console.log(apiRequest("/status"))
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}> 
      <Stack.Screen name="list" component={({navigation}) => ( 
        <View style={styles.viewConainer}>
          <FlatList
            data={listData}
            renderItem={({item, index}, onClick) => (<MatchResultItem index={index} onClick={onClick} team={item.content.team} match={item.content.match_type} matchNumber={item.content.match_number} result={item.content.result} alliance={item.content.alliance}></MatchResultItem>
            // <View style={styles.item}>
            //   <Pressable onPress={() => navigation.navigate('edit', {paramKey: item})} style={({pressed}) => [{ backgroundColor: pressed? "#3d6bba": Color.darkslategray, flex: 3}]}><Text style={styles.text}>{item.title}</Text></Pressable>
            //   <Pressable onPress={async () => {await deletFile("matches", item.id);       listMatches().then(data => setListData(data)); }} style={({pressed}) => [{ backgroundColor: pressed? "#b30929": "#c41f3e", flex: 1}]}><Text style={styles.text}>Delete</Text></Pressable>
            // </View>   
            )}     
            keyExtractor={(item) => item.id}
            style={{paddingTop: 0}} 
          />
        </View>)} />
      <Stack.Screen name="edit" component={Scouting} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    viewConainer:{
        backgroundColor: Color.darkslategray,
        flex: 1,
        width: "100%",
        height: 1024,
        overflow: "hidden",
    },  
    item: {
      flex: 1,
      marginTop: 10,
      marginBottom: 20,
      fontSize: 18,
      height: 44,
      borderBottomWidth: 5,
      borderBottomColor: "gray",
      borderStyle:"solid",
      flexDirection: "row"
    },
    text:{
      fontSize: 20,
      textAlign: "center",
      color: Color.white,
      position: "relative",
    }
});

export default Matches;
