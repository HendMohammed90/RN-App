import React from "react";
import { Text,View , StyleSheet, Pressable, Button , TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = (props) => {
  console.log(props)
  return <View style={styles.container}>
    <View style={styles.countContainer}>
    <Pressable onPress={()=>props.navigation.navigate("FlatList")} style={styles.button}>
      <Text>Go To FlatList page</Text>
    </Pressable>
    {/* <TouchableOpacity onPressIn={()=>props.navigation.navigate("FlatList")} >
      <Text>Go To FlatList page</Text>
    </TouchableOpacity> */}
    </View>
    
  </View>;
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#569DAA',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});


export default HomeScreen;
