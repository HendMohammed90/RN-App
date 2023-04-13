import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { SafeAreaView } from "react-navigation";


const ColorItem = ({name ,onIncrease ,onDecrease })=>{


    return(
        <SafeAreaView>
            <View>
                <Text>{name} color</Text>
                <Button title={`More ${name}`} onPress={onIncrease}/>
                <Button title={`Less ${name}`} onPress={onDecrease}/>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({})

export default ColorItem;