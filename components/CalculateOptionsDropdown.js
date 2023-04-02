import * as React from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from "react";
import { Checkbox as RNPCheckbox } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { Margin, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const AutoOptions = [
  {label: 'Cubes', value: ''}
]

const TeleOptions = {
  
}

const EndOptions = {
  
}

const otherOptions = {
  
}

const CalculateOptionsDropdown = (props) => {
    const [openPhase, setOpenPhase] = useState(false);
    const [openOption, setOpenOption] = useState(false);
    const [phase, setPhase] = useState([
      {label: 'Auto', value: 'auto'},
      {label: 'Tele', value: 'tele'},
      {label: 'Endgame', value: 'end'},
      {label: 'Other', value: ''},
    ]);
    const [option, setOption] = useState(AutoOptions);
  return (<View style={[ styles.matchType, {flexDirection: 'row', justifyContent: "center"}]}>
        <DropDownPicker
        open={openPhase}
        value={props.value}
        items={phase}
        setOpen={setOpenPhase}
        setValue={props.setValue}
        setItems={setPhase}
        style={props.style}
        placeholder="Phase"

      />
      <DropDownPicker
        open={openOption}
        value={props.value}
        items={option}
        setOpen={setOpenOption}
        setValue={props.setValue}
        setItems={setOption}
        style={props.style}
        placeholder="Option"

      />
    </View>
  );
};

const styles = StyleSheet.create({
  matchType:{
  top: 25,
  width: 200,
  alignSelf: "center"
  }
})

export default CalculateOptionsDropdown;
