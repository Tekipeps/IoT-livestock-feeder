// export { Drinkers } from "./Drinker";
// export { Feeders } from "./Feeder";
// export { Home } from "./Home";

import React from "react";
import { StyleSheet, View } from "react-native";
import { Route } from "react-router-native";
import AppBar from "../components/AppBar";
import { Drinkers } from "./Drinker";
import { Feeders } from "./Feeder";
import { Home } from "./Home";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
});

const Index = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Route exact path="/" component={Home} />
      <Route path="/feeder" component={Feeders} />
      <Route path="/drinker" component={Drinkers} />
    </View>
  );
};

export default Index;
