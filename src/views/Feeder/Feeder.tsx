import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Divider } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

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
  getDistance: () => void;
}

const Feeder = ({ getDistance }: Props) => {
  const feeder = useSelector((state: RootState) => state.feeder);
  const handleButtonPress = () => {
    getDistance();
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.heading}>Feeder stats</Text>
        <Button onPress={handleButtonPress}>Discharge feed</Button>
      </View>
      <Divider />
      <View
        style={{ paddingHorizontal: 10, display: "flex", flexDirection: "row" }}
      >
        <Text style={{ marginHorizontal: 10 }}>Distance:</Text>
        <Text>{feeder.distance + " cm"}</Text>
      </View>
      <View
        style={{ paddingHorizontal: 10, display: "flex", flexDirection: "row" }}
      >
        <Text style={{ marginHorizontal: 10 }}>Feed Level (in tray):</Text>
        <Text>{Number(feeder.distance) > 20 ? "LOW" : "HIGH"}</Text>
      </View>
      <View
        style={{ paddingHorizontal: 10, display: "flex", flexDirection: "row" }}
      >
        {/* Dynamically set feed level in reserve */}
        <Text style={{ marginHorizontal: 10 }}>Feed Level (in reserve):</Text>
        <Text>{Math.round(Math.random() * 10) >= 20 ? "LOW" : "HIGH"}</Text>
      </View>
    </View>
  );
};

export default Feeder;
