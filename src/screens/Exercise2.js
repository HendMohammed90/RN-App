import React from "react";
import { View, FlatList ,Text, StyleSheet } from 'react-native';



const Exercise2 = ()=>{
    const friends = [
        {name : 'frind1' , age : 20},
        {name : 'frind2' , age : 45},
        {name : 'frind3' , age : 32},
        {name : 'frind4' , age : 27},
        {name : 'frind5' , age : 53},
        {name : 'frind6' , age : 30}
    ]
    return(
        <View>
            <FlatList 
            keyExtractor={data => data.name}
            data={friends}
            renderItem={({item})=>{
            return <View>
                <Text>name :{item.name} -  Age :{item.age}</Text>

            </View>
        }}
            >
            </FlatList>
        </View>
    )
}

export default Exercise2;
