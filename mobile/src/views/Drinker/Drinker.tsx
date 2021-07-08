import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import Speedometer from "../../components/Speedometer";
import { RootState } from "../../store";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "whitesmoke",
    height: 230,
    padding: 10,
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

const Drinker = () => {
  const drinker = useSelector((state: RootState) => state.drinker);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Water level</Text>
      <View
        style={{
          display: "flex",
          flex: 1,
          // backgroundColor: "green",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Speedometer value={Number(drinker.distance)} heading="" />
      </View>
      {/* <Button
        style={styles.dischargeBtn}
        onPress={() => alert("Water discharged")}
      >
        <Text style={{ color: "white", fontSize: 12, padding: 1 }}>
          Discharge water
        </Text>
      </Button> */}
    </View>
  );
};

export default Drinker;
