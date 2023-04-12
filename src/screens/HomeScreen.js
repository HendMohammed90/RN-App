import React from "react";
import { Text,View , StyleSheet } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = () => {
  return <View style={styles.text}>
    <ComponentsScreen/>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
