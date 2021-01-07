import React from "react";
import { Switch } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
import useWebSockets from "../../utils/useWebSockets";

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
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
  const { toggle, message } = useWebSockets({ url: "192.168.43.253" });
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const bulbStyle = isSwitchOn ? { color: "yellow" } : { color: "black" };
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    toggle();
  };
  return (
    <View style={styles.container}>
      <View style={styles.bulbContainer}>
        <Text style={styles.text}>Light</Text>
        <Text>{message}</Text>
      </View>
      <View>
        <Switch onValueChange={onToggleSwitch} value={isSwitchOn} />
      </View>
    </View>
  );
};

export default Lighting;
