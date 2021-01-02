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

const Feeder = () => {
  return (
    <View style={styles.container}>
      <Text>feeder stats</Text>
    </View>
  );
};

export default Feeder;
