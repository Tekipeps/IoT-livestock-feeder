import React from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { SafeAreaView, StyleSheet } from "react-native";

import RNSpeedometer from "react-native-speedometer";

const styles = StyleSheet.create({});

interface Props {
  value: number;
}

const Speedometer: React.FC<Props> = ({ value }) => {
  return (
    <RNSpeedometer
      value={value}
      size={60}
      minValue={0}
      maxValue={60}
      labels={[
        {
          name: "High",
          labelColor: "#00ff6b",
          activeBarColor: "#00ff6b",
        },
        {
          name: "Normal",
          labelColor: "#ff5400",
          activeBarColor: "#ff5400",
        },

        {
          name: "Low",
          labelColor: "#ff2900",
          activeBarColor: "#ff2900",
        },
      ]}
    />
  );
};

export default Speedometer;
