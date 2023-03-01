import * as React from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from "react";
import { Checkbox as RNPCheckbox } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { Margin, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const EndPositionDropdown = (props) => {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
      {label: 'Docked', value: 'docked'},
      {label: 'Engaged', value: 'engaged'},
      {label: 'Parked', value: 'parked'},
      {label: 'None', value: 'none'},
    ]);
  return (
        <DropDownPicker
        open={open}
        value={props.value}
        items={items}
        setOpen={setOpen}
        setValue={props.setValue}
        setItems={setItems}
        style={props.style}
        placeholder="End Position"

      />
  );
};

export default EndPositionDropdown;
