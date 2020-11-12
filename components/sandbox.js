import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function sandbox() {
  return (
    <View style={styles.container}>
      <Text style = {styles.boxOne}>Sandbox1</Text>
      <Text style = {styles.boxTwo}>Sandbox2</Text>
      <Text style = {styles.boxThree}>Sandbox3</Text>
      <Text style = {styles.boxFour}>Sandbox4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'flex-end',
    paddingTop: 100,
    backgroundColor: 'red',
  },
  boxOne: {
    backgroundColor:'violet',
    padding:10,
  },
  boxTwo: {
    backgroundColor:'orange',
    padding:10,
  },
  boxThree: {
    backgroundColor:'green',
    padding:10,
  },
  boxFour: {
    backgroundColor:'yellow',
    padding:10,
  },
});
