import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Divider } from "react-native-paper";
import { useSelector } from "react-redux";
import Speedometer from "../../components/Speedometer";
import { RootState } from "../../store";

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
  speedometerContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const Drinker = () => {
  const drinker = useSelector((state: RootState) => state.drinker);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.heading}>Drinker stats</Text>
        {/* <Text>{distance}</Text> */}
        <Button>Discharge Water</Button>
      </View>
      <Divider />
      <View style={styles.speedometerContainer}>
        <Speedometer value={Number(drinker.distance)} />
      </View>
    </View>
  );
};

export default Drinker;
