import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Divider } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    marginLeft: 10,
    fontSize: 18,
  },
});

const Drinker = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.heading}>Drinker stats</Text>
        {/* <Text>{distance}</Text> */}
        <Button>Fetch data</Button>
      </View>
      <Divider />
    </View>
  );
};

export default Drinker;
