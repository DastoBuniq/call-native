import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

export default function Todo(props){
    return (
        <TouchableOpacity onPress={props.delete}
        style={styles.touch}
        activeOpacity={0.3}>
            <View style={styles.todoV}><Text>{props.title}</Text></View>
        </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    touch:{
    },
    todoV:{
        backgroundColor: "green",
        paddingVertical: 10,
        paddingLeft: 4,
        marginBottom: 5,
      }
})

