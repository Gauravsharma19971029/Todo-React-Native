import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/Header/header';
import TodoItem from './components/TodoItem/todoItem';
import AddTodo from './components/Todo Add form/addTodo';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Sandbox from "./components/sandbox"

export default function App() {
  const [todo, setTodo] = useState([]);
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('todo', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('todo');
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData().then((data) => setTodo(data));
  }, []);

  const getKey = () => {
    const todoKeys = Object.keys(todo);
    let sum = 1;
    for (let key of todoKeys) {
      sum += todo[key].key;
    }
   
    return sum + 1;
  };

  const deleteItem = (key) => {
    setTodo((prevState) => {
      const newTodo = prevState.filter((item) => item.key !== key);
      storeData(newTodo);
      return newTodo;
    });
  };

  const editItem = (text,key) => {
    setTodo((prevState) => {
      const newTodo = prevState.map(item => {
        if(item.key === key)
        {
          return {text,key}
        }
        return item;
      })
      storeData([...newTodo]);
      return newTodo;
    });
  };


  const addItem = (text) => {
    if (text.length <= 3) {
      Alert.alert('OOPs', 'Todos must be 3 chars long', [
        {
          text: 'Understood',
          onPress: () => {},
        },
      ]);
      return;
    }
    const key = getKey();
    setTodo((prevTodos) => {
      const newTodo = [{text, key}, ...prevTodos];
      storeData(newTodo);
      return newTodo;
    });
  };

  return (
    //<Sandbox/>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addItem={addItem} />
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item) => item.key.toString()}
              data={todo}
              renderItem={({item}) => (
                <TodoItem item={item} deleteItem={deleteItem} editItem= {editItem} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f1f1',
    paddingTop: 40,
    width: '100%',
    fontSize:100
  },
  content: {
    flex:1,
    padding: 40,
  },
  list: {
    flex:1,
   
  },
});
