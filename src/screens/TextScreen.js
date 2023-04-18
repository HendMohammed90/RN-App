import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Pressable, Button, TouchableOpacity } from "react-native";


const TextScreen = () => {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <TextInput style={styles.textStyle}
                placeholder="Type here to translate!"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                // value="hend"
                autoCapitalize="none" />
            {text.length < 4 ? <Text>Password must be longer than 5 charcter </Text> : <Text style={styles.show}>Your name is :  {text}</Text>}
            
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 10,
    },
    textStyle: {
        color: 'red',
        fontSize: 20 ,
        borderWidth : 1 ,
        padding : 10 ,
        borderColor : 'black' , 
        padding : 10

    },
    show: {
        color: 'green',
        fontSize: 30
    }
})

export default TextScreen;