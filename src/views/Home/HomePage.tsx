import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Lighting from "../../components/Lighting";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  welcome: {
    fontSize: 20,
    fontWeight: "600",
  },
});

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Lighting />
      <Text style={styles.welcome}>Welcome!</Text>
      <Text>IOT automated animal feeder app</Text>
    </View>
  );
};

export default HomePage;
