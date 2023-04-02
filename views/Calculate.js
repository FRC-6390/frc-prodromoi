import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";
import { useState } from "react";
import CalculateOptionsDropdown from "../components/CalculateOptionsDropdown";


const Calculate = ({navigation}) => {
 
     return (<View style={styles.viewConainer}>
        <CalculateOptionsDropdown/>
        <Stack.Screen name="list" component={({navigation}) => (
        <View style={styles.viewConainer}>
          <FlatList
            data={listData}
            renderItem={({item}) => (<View style={styles.item}>
              <Pressable onPress={() => navigation.navigate('edit', {paramKey: item})} style={({pressed}) => [{ backgroundColor: pressed? "#3d6bba": Color.darkslategray, flex: 3}]}><Text style={styles.text}>{item.title}</Text></Pressable>
              <Pressable onPress={async () => {await deletFile("matches", item.id);       listMatches().then(data => setListData(data)); }} style={({pressed}) => [{ backgroundColor: pressed? "#b30929": "#c41f3e", flex: 1}]}><Text style={styles.text}>Delete</Text></Pressable>

            </View> )}   
            keyExtractor={(item) => item.id}
            style={{paddingTop: 0}} 
          />
        </View>)} />
      <Stack.Screen name="edit" component={Scouting} />
          </View>
      );  
};

const styles = StyleSheet.create({
    viewConainer:{
        backgroundColor: Color.darkslategray,
        flex: 1,
        width: "100%",
        height: 1024,
        overflow: "hidden",
    }
});

export default Calculate;
