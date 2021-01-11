import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Divider } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 200,
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

interface Props {
  distance: string;
}

const Feeder = ({ distance }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.heading}>Feeder stats</Text>
        <Button>Fetch data</Button>
      </View>
      <Divider />
      <Text>{distance}</Text>
    </View>
  );
};

export default Feeder;
