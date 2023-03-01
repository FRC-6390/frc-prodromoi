import React, {useState} from 'react';
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { Color, Margin, Border, FontSize, Padding } from "../GlobalStyles";


 

const Incrementor = props => {
  
  const [value, setValue] = useState(0);

  return (

      <View style={styles.ml46}>
        <View style={[styles.background, styles.backgroundLayout]} />
        <Pressable style={[styles.add, styles.addLayout]} onPress={() =>{setValue(value+1); props.setValue({...props.value, [props.name]: value+1 })}}>
          <Image
            style={[styles.backgrundIcon, styles.incrementorLayout]}
            resizeMode="cover"
            source={require("../assets/components/incrementor/AddBackground.png")}
          />
          <Text style={[styles.symbol, styles.symbolTypo]}>+</Text>
        </Pressable>
        <Text style={[styles.counter, styles.symbolTypo]}>{value}</Text>
        <Pressable style={[styles.sub, styles.addLayout]}onPress={() => {if (value > 0) {setValue(value-1); props.setValue({...props.value, [props.name]: value-1 })}}}>
          <Image
            style={[styles.backgrundIcon, styles.incrementorLayout]}
            resizeMode="cover"
            source={require("../assets/components/incrementor/SubBackground.png")}
          />
          <Text style={[styles.symbol1, styles.symbolTypo]}>-</Text>
        </Pressable>
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
  cubesTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    top: 6,
    position: "absolute",
  },
  incrementorFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  incrementorPosition: {
    left: 1,
    flexDirection: "row",
    position: "absolute",
  },
  incrementorFlexBox: {
    justifyContent: "center",
    height: 61,
    width: 181,
    alignItems: "center",
    overflow: "hidden",
  },
  backgroundPosition: {
    left: 0,
    position: "absolute",
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
    left: 30,
    color: Color.darkviolet,
  },
  cones: {
    left: 380,
    color: Color.yellow,
  },
  background: {
    top: 0,
    borderRadius: Border.br_xs,
    backgroundColor: Color.gray_100,
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
    overflow: "hidden",
    width: "100%",
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
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_sm,
  },
  high: {
    width: 79,
  },
  incrementorParent: {
    top: 63,
  },
  mid: {
    width: 63,
  },
  incrementorGroup: {
    top: 144,
  },
  low: {
    width: 71,
  },
  incrementorContainer: {
    top: 225,
  },
  grid: {
    flex: 1,
    height: 286,
    overflow: "hidden",
    width: "100%",
  },
});

export default Incrementor;
