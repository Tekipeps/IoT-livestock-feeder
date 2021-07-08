import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import Speedometer from "../../components/Speedometer";
import { RootState } from "../../store";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 220,
    padding: 10,
    backgroundColor: "whitesmoke",
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    backgroundColor: "white",
    paddingVertical: 3,
    marginBottom: 5,
  },
  dischargeBtn: {
    backgroundColor: "#6200ee",
    marginBottom: 5,
    color: "#fff",
  },
});

interface Props {
  dischargeFeed: () => void;
}

const Feeder = ({ dischargeFeed }: Props) => {
  const feeder = useSelector((state: RootState) => state.feeder);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Feed level</Text>
      <View
        style={{
          justifyContent: "space-around",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Speedometer value={Number(feeder.distance)} heading={"In tray"} />
        <Speedometer value={Number(feeder.distance)} heading={"In tank"} />
      </View>
      <Button style={styles.dischargeBtn} onPress={dischargeFeed}>
        <Text style={{ color: "white", fontSize: 12 }}>Discharge feed</Text>
      </Button>
    </View>
  );
};

export default Feeder;
