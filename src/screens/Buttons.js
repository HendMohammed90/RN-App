import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,TouchableOpacity, Pressable
} from "react-native";


const Buttons = () => {
    const Separator = () => <View style={styles.separator} />
    const onPress = ()=> console.log('TouchableOpacity has been pressed')
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    The title and onPress handler are required. It is recommended to set
                    accessibilityLabel to help make your app usable by everyone.
                </Text>
                <Button title="Click Me" onPress={()=>{Alert.alert('Button Clicked')}} accessibilityLabel="press"></Button>
                <Separator />
                <Separator/>
                <TouchableOpacity onPress={onPress}>
                <Text>Press Here</Text>
                </TouchableOpacity>


            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});


export default Buttons;