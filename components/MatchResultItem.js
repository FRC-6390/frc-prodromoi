import * as React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Padding, FontFamily, FontSize, Color } from "../GlobalStyles";
import { Swipeable } from "react-native-gesture-handler";

const MatchResultItem = (props) => {
  let row = [];
  let prevOpenedRow;
  const closeRow = (index) => {
    console.log('closerow');
    if (prevOpenedRow && prevOpenedRow !== row[index]) {
      prevOpenedRow.close();
    }
    prevOpenedRow = row[index];
  };
  const renderRightActions = (progress, dragX, onClick) => {
    return (
      <View
        style={{
          margin: 0,
          alignContent: 'center',
          justifyContent: 'center',
          width: 70,
        }}>
        <Button color="red" onPress={onClick} title="DELETE"></Button>
      </View>
    );
  };


  return (
    <Swipeable
    renderRightActions={(progress, dragX) =>
      renderRightActions(progress, dragX, props.onClick)
    }
    onSwipeableOpen={() => closeRow(props.index)}
    >
    <LinearGradient
      style={styles.matchResult}
      locations={[0, 1]}
      colors={[props.alliance == "blue"?"#4e71eb":props.alliance =="red"?"#FF0000":"#ffffff", "rgba(78, 113, 235, 0)"]}
    >
      <View
        style={[
          styles.teamNumberWrapper,
          styles.wrapperFlexBox,
          styles.wrapperBorder,
        ]}
      >
        <Text style={[styles.teamNumber, styles.resultTypo]}>{props.team}</Text>
      </View>
      <View
        style={[
          styles.matchWrapper,
          styles.wrapperFlexBox,
          styles.wrapperBorder,
        ]}
      >
        <Text style={[styles.teamNumber, styles.resultTypo]}>
          {props.match} - {props.matchNumber}
        </Text>
      </View>
      <View style={[styles.resultWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.resultTypo, props.result=="win"?styles.resultWin:props.result=="lose"?styles.resultLose:styles.resultTie]}>{props.result}</Text>
      </View>
    </LinearGradient>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
    wrapperFlexBox: {
      paddingVertical: Padding.p_2xl,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      overflow: "hidden",
    },
    wrapperBorder: {
      borderRightWidth: 5,
      borderColor: "rgba(255, 255, 255, 0.27)",
      paddingVertical: Padding.p_2xl,
      borderStyle: "solid",
    },
    resultTypo: {
      textAlign: "left",
      fontFamily: FontFamily.interBold,
      fontWeight: "700",
      fontSize: FontSize.size_21xl,
    },
    teamNumber: {
      color: Color.white,
    },
    teamNumberWrapper: {
      alignSelf: "stretch",
      paddingHorizontal: 24,
    },
    matchWrapper: {
      paddingHorizontal: 26,
    },
    resultWin: {
      color: "#00ff38",
    },
    resultLose: {
        color: "#FF0000",
      },
      resultTie:{
        color: "#EBFF00",
      },
    resultWrapper: {
      width: 150,
      paddingHorizontal: 20,
    },
    matchResult: {
      borderRadius: 10,
      backgroundColor: "transparent",
      borderColor: "rgba(255, 255, 255, 0.28)",
      borderWidth: 5,
      flex: 1,
      width: "100%",
      paddingHorizontal: 0,
      paddingVertical: 5,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      overflow: "hidden",
      borderStyle: "solid",
    },
  });
  

export default MatchResultItem;
