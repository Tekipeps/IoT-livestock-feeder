import React from "react";

import { StyleSheet, SafeAreaView, Text } from "react-native";

import RNSpeedometer from "react-native-speedometer";

const styles = StyleSheet.create({
  wrapperStyle: {
    // borderColor: "blue",
    // borderWidth: 5
  },
  labelStyle: {
    fontSize: 15,
    color: "black",
  },
  labelWrapperStyle: {
    // borderColor: "blue",
    // borderWidth: 5
  }
});

interface Props {
  value: number;
  heading: string;
}

const Speedometer: React.FC<Props> = ({ value, heading }) => {
  const MAX = 20;
  return (
    <SafeAreaView style={{ flex: 1, width: 100, alignItems: "center" }}>
      <Text>{heading}</Text>
      <RNSpeedometer
        wrapperStyle={styles.wrapperStyle}
        labelStyle={styles.labelStyle}
        labelWrapperStyle={styles.labelWrapperStyle}
        value={MAX - value}
        size={60}
        minValue={0}
        maxValue={MAX}
        labels={[
          {
            name: "Low",
            labelColor: "#ff2900",
            activeBarColor: "#ff2900",
          },

          {
            name: "Normal",
            labelColor: "#ff5400",
            activeBarColor: "#ff5400",
          },

          {
            name: "High",
            labelColor: "#00ff6b",
            activeBarColor: "#00ff6b",
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default Speedometer;
