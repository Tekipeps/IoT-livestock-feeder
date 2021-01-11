import React from "react";
import { Divider, Switch } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 10,
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
    justifyContent: "space-between",
    paddingVertical: 10,
  },
});

interface Props {
  toggle: () => void;
}

const Lighting = ({ toggle }: Props) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const led: boolean = useSelector((store: RootState) => store.led);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    toggle();
  };
  return (
    <View style={styles.container}>
      <View style={styles.bulbContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.text}>Light</Text>
          <Text>{led ? "ON" : "OFF"}</Text>
        </View>
        <Switch onValueChange={onToggleSwitch} value={isSwitchOn} />
      </View>
      <Divider />
    </View>
  );
};

export default Lighting;
