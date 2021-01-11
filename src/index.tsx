import React from "react";
import { View } from "react-native";
import Lighting from "./components/Lighting";
import Navigation from "./components/Navigation/Navigation";
import { Drinker } from "./views/Drinker";
import { Feeder } from "./views/Feeder";
import useWebSocket from "./utils/useWebSocket";
import { useDispatch } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const { toggleLed, getDistance } = useWebSocket({
    url: "192.168.43.253",
    dispatch,
  });

  return (
    <View>
      <Navigation />
      <Lighting toggle={toggleLed} />
      <Feeder getDistance={getDistance} />
      <Drinker />
    </View>
  );
};

export default Index;
