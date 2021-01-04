import React from "react";
import { Switch } from "react-native-paper";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";

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
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const bulbStyle = isSwitchOn ? { color: "yellow" } : { color: "black" };
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={styles.container}>
      <View style={styles.bulbContainer}>
        <Icon icon="wbincandescent" />
        <WbIncandescentIcon style={bulbStyle} />
        <Text style={styles.text}>Light</Text>
      </View>
      <View>
        <Switch onValueChange={onToggleSwitch} value={isSwitchOn} />
      </View>
    </View>
  );
};

export default Lighting;
