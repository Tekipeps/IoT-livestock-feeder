import React from "react";
import { View } from "react-native";
import Lighting from "./components/Lighting";
import Navigation from "./components/Navigation/Navigation";
import { Drinker } from "./views/Drinker";
import { Feeder } from "./views/Feeder";
import useWebSocket from "./utils/useWebSocket";

const Index = () => {
  const { toggle, state } = useWebSocket({ url: "192.168.43.253" });

  return (
    <View>
      <Navigation />
      <Lighting toggle={toggle} led={state.led} />
      <Feeder />
      <Drinker />
    </View>
  );
};

export default Index;
