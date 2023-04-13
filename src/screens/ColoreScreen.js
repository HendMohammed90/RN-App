import React, { useState } from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    FlatList,
    Alert,TouchableOpacity, Pressable
} from "react-native";


const ColorScreen = () => {
    const [colors , setColor] = useState([]);
    return(
        <SafeAreaView>
            <View>
                <Button title="Add Color" onPress={()=> {setColor([...colors, generateRandomColor()])}}>
                </Button>
                <FlatList
                keyExtractor={(color) => color}
                data={colors}
                renderItem={({ item }) => {return <View style={{
                    width: 100 ,
                    height: 100 ,
                    backgroundColor : item
                }}>  
                </View>}}>
            </FlatList>
            </View>
        </SafeAreaView>
    )

}

const generateRandomColor = ()=>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
return `rgb(${red} , ${green} ,${blue})`

}
const styles = StyleSheet.create({
    colorBox: {
        width: 100 ,
        height: 100 ,
        backgroundColor : generateRandomColor()
    }

})

export default ColorScreen;