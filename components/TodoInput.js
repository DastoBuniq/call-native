import React, {useState} from "react"
import { StyleSheet, View, TextInput, Button } from "react-native"

export default function Todoinput(props){
    const [text, setTxt] = useState("")

    function onPress(){
        props.addTodo(text)
        setTxt("")
    }

    return(
        <View style={styles.headContainer}>
        <TextInput placeholder="scrivi una cosa da fare o non fare" 
        style={styles.Input} 
        value={text}
        onChangeText={t => setTxt(t)}/>
        <Button onPress={onPress} title="Ok" />
        </View>
    )
}

const styles = StyleSheet.create({
    headContainer:{
        backgroundColor: "grey",
        borderWidth: 5,
        padding: 15,
        flexDirection: "row"
      },
      Input: {
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingLeft: 3,
        width: '80%'
      },
})