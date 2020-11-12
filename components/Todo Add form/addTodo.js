import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AddTodo({ addItem }) {
  const changeHandler = (value) => {
    setstate(value);
  };

  const [state, setstate] = useState();
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Todo"
        onChangeText={changeHandler}
      ></TextInput>
      <Button
        title="Add"
        color="#d37815"
        onPress={() => addItem(state)}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#d37815",
    width: "100%",
    fontSize: 20,
    fontWeight: "bold",
  },
});
