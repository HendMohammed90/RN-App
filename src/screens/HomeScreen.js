import React from "react";
import { Text,View , StyleSheet, Pressable, Button , TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = (props) => {
  // console.log(props)
  const Separator = () => <View style={styles.separator} />

  return <View style={styles.container}>
    <View style={styles.countContainer}>
    <Pressable onPress={()=>props.navigation.navigate("FlatList")} style={styles.button}>
      <Text>Go To FlatList page</Text>
    </Pressable>
    {/* <TouchableOpacity onPressIn={()=>props.navigation.navigate("FlatList")} >
      <Text>Go To FlatList page</Text>
    </TouchableOpacity> */}
    <Separator />
    <Pressable onPress={()=>props.navigation.navigate("ImageItem")} style={styles.button}>
      <Text>Go To Image Screen</Text>
    </Pressable>
    <Separator />
    <Pressable onPress={()=>props.navigation.navigate("Counter")} style={styles.button}>
      <Text>Go To Counter Screen</Text>
    </Pressable>
    <Separator />
    <Pressable onPress={()=>props.navigation.navigate("ColorScreen")} style={styles.button}>
      <Text>Go To Color Screen </Text>
    </Pressable>
    <Separator />
    <Pressable onPress={()=>props.navigation.navigate("OneColor")} style={styles.button}>
      <Text>Go To OneColor Screen </Text>
    </Pressable>
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
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
},
});


export default HomeScreen;
