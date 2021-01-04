import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const Navigation = () => {
  const _handleMore = () => console.log("Shown more");

  return (
    <Appbar.Header>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content title="IOT Feeder" />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default Navigation;
