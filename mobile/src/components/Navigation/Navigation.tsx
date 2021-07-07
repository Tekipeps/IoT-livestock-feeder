import * as React from "react";
import { Appbar, Menu, Divider } from "react-native-paper";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  menu: {
    left: 180,
  },
});

const Navigation = () => {
  const [visible, setVisible] = React.useState(false);
  const _handleMore = () => setVisible(true);
  return (
    <Appbar.Header>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content title="IOT Feeder" />
      <Menu
        visible={visible}
        anchor={<Appbar.Action icon="dots-vertical" onPress={_handleMore} />}
        onDismiss={() => setVisible(false)}
        style={styles.menu}
      >
        <Menu.Item onPress={() => {}} title="Setup device" />
        <Divider />
        <Menu.Item onPress={() => {}} title="Credits" />
      </Menu>
    </Appbar.Header>
  );
};

export default Navigation;
