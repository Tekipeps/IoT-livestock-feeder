import React from "react";
import { View } from "react-native";
import Lighting from "./components/Lighting";
import Navigation from "./components/Navigation/Navigation";
import { Drinker } from "./views/Drinker";
import { Feeder } from "./views/Feeder";
import useWebSocket from "./utils/useWebSocket";

const Index = () => {
  const { toggleLed, state, getDistance } = useWebSocket({
    url: "192.168.43.253",
  });

  return (
    <View>
      <Navigation />
      <Lighting toggle={toggleLed} led={state.led} />
      <Feeder distance={state.distance} />
      <Drinker />
    </View>
  );
};

export default Index;
