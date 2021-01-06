import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
  },
});

const Drinker = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Drinker stats</Text>
    </View>
  );
};

export default Drinker;
