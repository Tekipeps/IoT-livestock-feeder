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

    paddingHorizontal: 10,
    alignItems: "center",
    paddingVertical: 5,
  },
  heading: {
    marginLeft: 10,
    fontSize: 18,
  },
  speedometerContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  dischargeBtn: {
    backgroundColor: "blue",
    width: 160,
    color: "#fff",
  },
});

const Drinker = () => {
  const drinker = useSelector((state: RootState) => state.drinker);
  return (
    <View style={styles.container}>
      <Divider />
      <View style={styles.top}>
        <Text style={styles.heading}>Drinker stats</Text>
        <Button
          style={styles.dischargeBtn}
          onPress={() => alert("Water discharged")}
        >
          <Text style={{ color: "white", fontSize: 12, padding: 1 }}>
            Discharge water
          </Text>
        </Button>
      </View>
      <Divider />
      <View style={styles.speedometerContainer}>
        <Speedometer value={Number(drinker.distance)} />
      </View>
    </View>
  );
};

export default Drinker;
