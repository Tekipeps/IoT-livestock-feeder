import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppBar from "./src/components/AppBar";
import Feeder from "./src/views/Feeder/Feeder";

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <Feeder />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
