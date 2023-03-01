import * as React from "react";
import { useState } from "react";
import { Checkbox as RNPCheckbox } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { Margin, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const CheckBox = (props) => {
  return (
      <View style={styles.checkbox}>
        <View>
          <RNPCheckbox
            status={props.value ? "checked" : "unchecked"}
            onPress={() => props.setValue(!props.value)}
            color="#34eb8f"
          />
        </View>
        <Text style={[styles.text, styles.ml12]} status={props.value ? "checked" : "unchecked"}
            onPress={() => props.setValue(!props.value)}>{props.text}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  ml12: {
    marginLeft: Margin.m_xs,
  },
  box: {
    borderRadius: Border.br_xs,
  },
  text: {
    fontSize: FontSize.size_base,
    color: Color.white,
    textAlign: "left",
    display: "flex",
    width: 143,
    alignItems: "center",
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxParent: {
    flex: 1,
    overflow: "hidden",
    paddingHorizontal: 0,
  },
});

export default CheckBox;
