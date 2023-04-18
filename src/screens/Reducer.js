import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet } from 'react-native';
import ColorItem from "../components/ColorItem";



const reducer = (state , action) => {
    // switch (action.colorChange) {
    //     case 'red':
    //         return { ...state.red , state.red+action.amount }
    //     case 'green':
    //         return { ...state , state.green + action.amount }
    //     case 'blue':
    //         return { ...state , state.blue + action.amount }
    //     default:
    //         return;
    // }
}

const ReducerTry = () => {
    const COLORINCRMENT = 10;
    const INITIAL_STATE = { red: 0, green: 0, blue: 0 };
    const [state, runMyReducer] = useReducer(reducer, INITIAL_STATE)
    console.log(state);
    const {red  , green , blue} = state

    return (
        <View>
            <ColorItem name='red' onIncrease={() => runMyReducer({colorChange : 'red' , amount : COLORINCRMENT})} onDecrease={() => runMyReducer({colorChange : 'red' , amount : -1 * COLORINCRMENT})} />
            <ColorItem name='green' onIncrease={() => runMyReducer({colorChange : 'red' , amount : COLORINCRMENT})} onDecrease={() => runMyReducer({colorChange : 'red' , amount :  -1 * COLORINCRMENT})} />
            <ColorItem name='blue' onIncrease={() => runMyReducer({colorChange : 'red' , amount : COLORINCRMENT})} onDecrease={() => runMyReducer({colorChange : 'red' , amount :  -1 * COLORINCRMENT})} />
            <View style={{
                width: 100,
                height: 100,
                // backgroundColor: `rgb(${red} , ${green} ,${blue})`
            }} />
        </View>

    )
}


const styles = StyleSheet.create({})

export default ReducerTry;