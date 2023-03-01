import * as React from "react";
import { StyleSheet, View,FlatList,Text } from "react-native";
import { listMatches } from "../data/SaveData";
import { Color } from "../GlobalStyles";
import { useState } from "react";
import { apiRequest } from "../data/TBAv3";


const Matches = ({navigation}) => {
  const [listData, setListData] = useState(null);

  if(!listData) listMatches().then(data => setListData(data));
  console.log(apiRequest("/status"))
  return (<View style={styles.viewConainer}>
    <FlatList
      data={listData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
    
  </View>);
};

const renderItem = ({ item }) => (
  <View style={{ padding: 10 }}>
    <Text>{item.title}</Text>
  </View> 
);

const styles = StyleSheet.create({
    viewConainer:{
        backgroundColor: Color.darkslategray,
        flex: 1,
        width: "100%",
        height: 1024,
        overflow: "hidden",
    },  
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
});

export default Matches;
