import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 20,
    fontWeight: "600",
  },
});

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome!</Text>
      <Text>IOT automated animal feeder app</Text>
    </View>
  );
};

export default HomePage;
