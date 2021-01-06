import React from "react";
import { View } from "react-native";
import Lighting from "./components/Lighting";
import Navigation from "./components/Navigation/Navigation";
import { Drinker } from "./views/Drinker";
import { Feeder } from "./views/Feeder";

const Index = () => {
  return (
    <View>
      <Navigation />
      <Lighting />
      <Feeder />
      <Drinker />
    </View>
  );
};

export default Index;
