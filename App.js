import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import Todo from './components/Todo'
import Todoinput from './components/TodoInput'

export default function App() {
  const [todos, setTodos] = useState([])

  function addTodo(text){
    if(text.trim()  === ""){
      return
    } 
    setTodos(todos.concat({value: text, id: Math.random().toString()}))
  }

  function deleteTodo(id){
    setTodos(todos.filter(item => item.id !== id))
  }


  return (
    <View style={styles.View}>
      <Todoinput addTodo={addTodo}/>
      <View>
        {/* {todos.map((item, index) =>{
          return <View style={styles.todoV}><Text key={index}>{item}</Text></View>
        })} */}
        <FlatList 
        data= {todos}
        renderItem={item => <Todo title = {item.item.value} delete={()=>deleteTodo(item.item.id)}/>} 
        keyExtractor={item => item.id}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    borderColor: "blue",
    borderWidth: 1,
    paddingTop: 30 
  },

});
