import React from "react";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import { View, Text, StyleSheet, Switch } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    textAlign: "center",
    marginHorizontal: 10,
    fontWeight: "400",
    fontSize: 20,
  },
  bulbContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const Lighting = () => {
  const [isEnabled, setIsEnabled] = React.useState<boolean>(false);
  const bulbStyle = isEnabled
    ? { color: "yellow", fontSize: "30px" }
    : { color: "black", fontSize: "30px" };
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };
  return (
    <View style={styles.container}>
      <View style={styles.bulbContainer}>
        <WbIncandescentIcon style={bulbStyle} />
        <Text style={styles.text}>Light</Text>
      </View>
      <View>
        <Switch
          trackColor={{ false: "whitesmoke", true: "#f2f2f2" }}
          thumbColor={isEnabled ? "#f2f2f2" : "whitesmoke"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

export default Lighting;
