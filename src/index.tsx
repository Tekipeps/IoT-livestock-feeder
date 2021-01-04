import React from "react";
import { View, Text } from "react-native";
import Lighting from "./components/Lighting";
import Navigation from "./components/Navigation/Navigation";

const Index = () => {
  return (
    <View>
      <Navigation />
      <Lighting />
    </View>
  );
};

export default Index;
