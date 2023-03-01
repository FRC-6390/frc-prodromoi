import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";
import Incrementor from "../components/Incrementor";
import DropDownPicker from "react-native-dropdown-picker"

const Calculate = ({navigation}) => {
  return (<View style={styles.viewConainer}> 
  
  
  <Incrementor></Incrementor>
  
  </View>);
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
