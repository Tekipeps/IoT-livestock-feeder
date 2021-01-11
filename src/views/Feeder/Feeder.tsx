import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    borderColor: "blue",
    borderWidth: 1,
    height: 30,
  },
});

interface Props {
  distance: string;
}

const Feeder = ({ distance }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Feeder stats</Text>
      <Text>{distance}</Text>
    </View>
  );
};

export default Feeder;
