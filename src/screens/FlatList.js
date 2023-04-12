import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const FlatListData = () => {
    const data = [
        {
            key: "January",
            name: "hend",
        },
        {
            key: "February",
            name: "ahmed",
        },
        {
            key: "March",
            name: "tamer",
        },
        {
            key: "April",
            name: "sofy",
        },
    ];
    return (
        <View>
            <FlatList
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                keyExtractor={(item) => item.name}
                data={data}
                renderItem={({ item }) => <Text> {item.name} </Text>}
            ></FlatList>
        </View>
    );
};

export default FlatListData;
