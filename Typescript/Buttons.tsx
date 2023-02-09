import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';


var timepressed = 0;

const Button1 = () => {
 const [timesPressed, setTimesPressed] = useState(0);//Don't delete.

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);//Don't delete. The counting system stops working if this line isn't here
          timepressed=timepressed + 1;
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(10, 100, 25)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'was pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text>This is pressed {timepressed}</Text>
      </View>
    </View>
  );
};
/*
function timeKeeper(T){
return(
T = T + 1
);
};
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});

export default Button1;