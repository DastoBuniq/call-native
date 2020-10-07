import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState(['waw', 'poi'])
  const [text, setTxt] = useState("")

  function addTodo(){
    if(text.trim()  === ""){
      return
    } 
    setTodos(todos.concat(text))
    setTxt("")
  }

  function renderItem(item){
    return <View style={styles.todoV} key={item.index}><Text>{item.item}</Text></View>
  }

  return (
    <View style={styles.View}>
      <View style={styles.headContainer}>
        <TextInput placeholder="scrivi una cosa da fare o non fare" 
        style={styles.Input} 
        value={text}
        onChangeText={t => setTxt(t)}/>
        <Button onPress={addTodo} title="Ok" />
      </View>
      <View>
        {/* {todos.map((item, index) =>{
          return <View style={styles.todoV}><Text key={index}>{item}</Text></View>
        })} */}
        <FlatList 
        data= {todos}
        renderItem={renderItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingLeft: 3,
    width: '80%'
  },
  View: {
    borderColor: "blue",
    borderWidth: 1,
    paddingTop: 30 
  },
  headContainer:{
    backgroundColor: "grey",
    borderWidth: 5,
    padding: 15,
    flexDirection: "row"
  },
  todoV:{
    backgroundColor: "green",
    paddingVertical: 10,
    paddingLeft: 4,
    marginBottom: 5,
  }
});
