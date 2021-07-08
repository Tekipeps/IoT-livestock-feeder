import React from "react";
import { StyleSheet, View } from "react-native";
import Navigation from "./components/Navigation/Navigation";
import { Drinker } from "./views/Drinker";
import { Feeder } from "./views/Feeder";
import useWebSocket from "./utils/useWebSocket";
import { useDispatch } from "react-redux";

const styles = StyleSheet.create({
  
})

const Index = () => {
  const dispatch = useDispatch();
  const { dischargeFeed } = useWebSocket({
    url: "ws://10.10.1.20/ws",
    dispatch,
  });

  return (
    <View>
      <Navigation />
      <Feeder dischargeFeed={dischargeFeed}/>
      <Drinker />
    </View>
  );
};

export default Index;
