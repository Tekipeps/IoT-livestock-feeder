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
        <Button onPress={handleButtonPress}>Fetch data</Button>
      </View>
      <Divider />
      <Text>{feeder.distance + " cm"}</Text>
    </View>
  );
};

export default Feeder;
