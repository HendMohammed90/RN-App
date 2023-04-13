import React,{ useState } from "react";
import { View, Text, StyleSheet  } from 'react-native';
import ColorItem from "../components/ColorItem";




const OneColorScreen = () => {
    const [red, setColorRed] = useState(0)
    const [green, setColorGreen] = useState(0)
    const [blue, setColorBlue] = useState(0)
    const COLORINCRMENT = 10;

    // console.log(red)
    // console.log(green)
    // console.log(blue)

    const setColor = (color , changeValue) => {
        switch (color) {
            case 'red':
                red + changeValue > 255 || red + changeValue < 0 ? null : setColorRed(red + changeValue)
                return;
            case 'green':
                green + changeValue > 255 || green + changeValue < 0 ? null : setColorGreen(green + changeValue)
                return;
            case 'blue':
                blue + changeValue > 255 || blue + changeValue < 0 ? null : setColorBlue(blue + changeValue)
                return;
            default:
                return;
        }

    }



    return (
        <View>
            <ColorItem name='red' onIncrease={() => setColor('red' , COLORINCRMENT)} onDecrease={() => setColor('red' , -1*COLORINCRMENT)}  />
            <ColorItem name='green' onIncrease={() => setColor('green' , COLORINCRMENT)} onDecrease={() => setColor('green' , -1*COLORINCRMENT)}  />
            <ColorItem name='blue' onIncrease={() => setColor('blue' , COLORINCRMENT)} onDecrease={() => setColor('blue' , -1*COLORINCRMENT)}  />
            <View style={{
                width: 100,
                height: 100,
                backgroundColor: `rgb(${red} , ${green} ,${blue})`
            }} />
        </View>

    )
}


const styles = StyleSheet.create({})

export default OneColorScreen;