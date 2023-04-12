import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {

    const myName = "hend";
    const newElemnt = <Text>Hello {myName}</Text>
    return <View style={styles.container}>
        <Text>Hello {myName}</Text>
        {newElemnt}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize:30,
    },
});


export default ComponentsScreen;