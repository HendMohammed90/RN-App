import React from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageItem = () => {
    const Separator = () => <View style={styles.separator} />
    return (
        <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}  contentContainerStyle={styles.contentContainer}>
                <ImageDetails title="img1" imgSource={require('../assets/img1.png')} />
                <ImageDetails title="img2" imgSource={require('../assets/img2.png')} />
                <ImageDetails title="img3" imgSource={require('../assets/img3.png')} />
                <ImageDetails title="img4" imgSource={require('../assets/img4.png')} />
                <ImageDetails title="img5" imgSource={require('../assets/img5.png')} />
                <ImageDetails title="img6" imgSource={require('../assets/img6.png')} />
                <ImageDetails title="img1" imgSource={require('../assets/img1.png')} />
                <ImageDetails title="img2" imgSource={require('../assets/img2.png')} />
                <ImageDetails title="img3" imgSource={require('../assets/img3.png')} />
        </ScrollView>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:"center",
        // paddingHorizontal: 10,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default ImageItem;