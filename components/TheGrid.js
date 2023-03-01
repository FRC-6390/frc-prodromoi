import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import {
  Margin,
  FontSize,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";
import Incrementor from "./Incrementor";
import { useState } from "react";


const TheGrid = (props) => {
    return (
        <View style={[styles.grid, styles.gridLayout]}>
          <View style={styles.cubesParent}>
            <Text style={[styles.ml46, styles.cubes, styles.cubesTypo]}>Cubes</Text>
            <Text style={[styles.ml46, styles.cones, styles.cubesTypo]}>Cones</Text>
          </View>
          <View
            style={[
              styles.incrementorParent,
              styles.incrementorFlexBox,
              styles.incrementorPosition,
            ]}
          >
            <Incrementor name="high_cubes" value={props.value} setValue={props.setValue}/>
            <Text style={[styles.high, styles.ml46, styles.midFlexBox]}>High</Text>
            <Incrementor name="high_cones" value={props.value} setValue={props.setValue}/>
          </View>
          <View
            style={[
              styles.incrementorGroup,
              styles.incrementorFlexBox,
              styles.incrementorPosition,
            ]}
          >
            <Incrementor name="mid_cubes" value={props.value} setValue={props.setValue}/>
            <Text style={[styles.mid, styles.ml54, styles.midFlexBox]}>Mid</Text>
            <Incrementor name="mid_cones" value={props.value} setValue={props.setValue}/>
          </View>
          <View style={[styles.incrementorContainer, styles.incrementorFlexBox]}>
            <Incrementor name="low_cubes" value={props.value} setValue={props.setValue}/>
            <Text style={[styles.low, styles.ml50, styles.midFlexBox]}>Low</Text>
            <Incrementor name="low_cones" value={props.value} setValue={props.setValue}/>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      ml46: {
        marginLeft: Margin.m_sm,
      },
      ml54: {
        marginLeft: Margin.m_lg,
      },
      ml50: {
        marginLeft: Margin.m_md,
      },
      gridLayout: {
        overflow: "hidden",
        width: "100%",
      },
      cubesTypo: {
        textAlign: "left",
        fontSize: FontSize.size_base,
        top: 0,
        position: "absolute",
      },
      incrementorFlexBox: {
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
      },
      incrementorPosition: {
        left: 1,
        flexDirection: "row",
      },
      backgroundLayout: {
        height: 60,
        width: 180,
      },
      addLayout: {
        height: 50,
        width: 50,
        top: 5,
        position: "absolute",
      },
      symbolTypo: {
        color: Color.white,
        textAlign: "left",
        fontSize: FontSize.size_base,
        position: "absolute",
      },
      midFlexBox: {
        display: "flex",
        textAlign: "center",
        color: Color.white,
        justifyContent: "center",
        alignItems: "center",
        fontSize: FontSize.size_base,
      },
      cubes: {
        color: Color.darkviolet,
        left: 0,
      },
      cones: {
        left: 350,
        color: Color.yellow,
      },
      cubesParent: {
        top: 6,
        left: 30,
        width: 459,
        height: 44,
        position: "absolute",
      },
      background: {
        borderRadius: Border.br_xs,
        backgroundColor: Color.gray_100,
        left: 0,
        top: 0,
        width: 180,
        position: "absolute",
      },
      backgrundIcon: {
        height: "100%",
        right: "0%",
        bottom: "0%",
        left: "0%",
        maxWidth: "100%",
        maxHeight: "100%",
        top: "0%",
        position: "absolute",
      },
      symbol: {
        width: "48%",
        left: "26%",
        top: "0%",
      },
      add: {
        left: 122,
      },
      counter: {
        top: 8,
        left: 78,
        width: 23,
      },
      symbol1: {
        width: "34%",
        top: "6%",
        left: "34%",
      },
      sub: {
        left: 8,
      },
      incrementor: {
        width: 181,
        height: 61,
        paddingHorizontal: Padding.p_md,
        paddingVertical: Padding.p_sm,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      },
      high: {
        width: 79,
      },
      incrementorParent: {
        top: 63,
      },
      mid: {
        width: 70,
      },
      incrementorGroup: {
        top: 144,
      },
      low: {
        width: 74,
      },
      incrementorContainer: {
        top: 225,
        width: 534,
        left: 0,
      },
      grid: {
        flex: 1,
        height: 286,
      },
    });
    
export default TheGrid;
