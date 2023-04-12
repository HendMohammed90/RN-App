import React from "react";
import { View, Text, StyleSheet } from 'react-native';


const Exercise1 = () => {
    const myName = "Hend Mohammed";
    return(
        <View>
            <Text style={styles.textStyle}>Getting started with react native</Text>
            <Text style={styles.subTextStyle}>My name Is {myName}</Text>
        </View>
    )

}


const styles = StyleSheet.create({
    textStyle: {
        fontSize:45,
    },
    subTextStyle:{
        fontSize:30
    }
});

export default Exercise1;