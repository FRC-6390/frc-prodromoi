import React, {useEffect, useState} from "react";
import { Button, StyleSheet, View } from "react-native";
import { downloadDB, uploadDB } from "../data/Firebase";
import { listMatches, saveFile } from "../data/SaveData";
import { Color } from "../GlobalStyles";


const Sync = ({navigation}) => {
  
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      listMatches().then(data => setData(data));
      console.log(data)
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return () => unsubscribe.remove();
  }, [navigation]);  

  return (<View style={styles.viewConainer}>

  <View  style={[styles.matchType, {paddingTop:170, position: "relative", bottom: 0}]}>
    <Button title="Upload" onPress={() => { upload(data)}}/>
  </View>

  <View  style={[styles.matchType, {paddingTop:170, position: "relative", bottom: 0}]}>
    <Button title="Download" onPress={download}/>
  </View>



  </View>);
};

const upload = (data) => {
  data.forEach(element => {
    uploadDB("matches", element.title, element);
  }); 
}

function download() {
  downloadDB("matches").then(data =>

  data.forEach(element => {
    var content = element.data();

    if(Object.keys(content).length !== 0) saveFile("matches", content.id, content.content)
  }
    ));
}

const styles = StyleSheet.create({
    viewConainer:{
        backgroundColor: Color.darkslategray,
        flex: 1,
        width: "100%",
        height: 1024,
        overflow: "hidden",
    },
    matchType:{
      top: 25,
      width: 200,
      alignSelf: "center"
    }
});

export default Sync;
