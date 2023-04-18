import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-navigation";


const ImageDetails = (props) => {
    console.log(props)
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Image : {props.title}</Text>
                <Image style={styles.Image} source={props.imgSource} />
            </View>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    Image: {
        width: 100,
        height: 100,
    }

});

export default ImageDetails;