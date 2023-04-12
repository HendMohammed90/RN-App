import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';


const Counter = () => {

    const [count , setCounter] = useState(0);

    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>{count}</Text>
            <Button title="Click to Add" onPress={()=> setCounter(count+ 1)}/>
            <Button title="Click to subtract" onPress={()=> setCounter(count - 1)}/>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    textStyle: {
        width: 40,
        height: 40,
        fontSize : 30,
        color :'white',
        backgroundColor:'#737373',
        justifyContent: 'center',
        alignContent: 'center',
      },
})

export default Counter;