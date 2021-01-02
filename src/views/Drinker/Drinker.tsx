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
});

const Drinker = () => {
  return (
    <View style={styles.container}>
      <Text>drinker stats</Text>
    </View>
  );
};

export default Drinker;
