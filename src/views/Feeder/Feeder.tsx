import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Divider } from "react-native-paper";
import { useSelector } from "react-redux";
import Speedometer from "../../components/Speedometer";
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
  levelText: {
    fontWeight: "600",
    marginHorizontal: 10,
  },
  speedometerContainer: {
    display: "flex",
    justifyContent: "space-between",
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
      <View style={styles.speedometerContainer}>
        <Text style={styles.levelText}>Level</Text>
        <Speedometer />
      </View>
    </View>
  );
};

export default Feeder;
