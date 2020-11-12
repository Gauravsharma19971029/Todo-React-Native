import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
export default function TodoItem({ item, deleteItem,editItem }) {
  const [edit, setEdit] = useState(false);

  const changeHandler = (value) => {
    setstate(value);
  };

  const [state, setstate] = useState(item.text);

  return (
    <View style={styles.item}>
      <View style={styles.itemView}>
        {edit ? (
          <TextInput
          style={styles.itemText}
            value={state}
            onChangeText={changeHandler}

           
          ></TextInput>
        ) : (
          <Text  style={styles.itemText}>{item.text}</Text>
        )}
      </View>
      <View style={styles.actions}>
        {edit ? (
          <TouchableOpacity onPress={() =>{
            setEdit((false))
            editItem(state,item.key)

          } }>
            <Icon name="save" size={30} color="#900" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setEdit(true)}>
            <Icon name="border-color" size={30} color="#900" />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={() => deleteItem(item.key)}
          style={styles.delete}
        >
          <Icon name="delete" size={30} color="#900" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderColor: "#d37815",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  itemView: {
    marginLeft: 16,
    width: "80%",
    fontSize: 20,
    fontWeight: "bold"
    
  },
  itemText: {
    fontSize: 20,
    fontWeight: "bold"
    
  },
  actions: {
    marginLeft: "auto",
  },
});
