import * as React from "react";
import { Appbar, Menu, Divider } from "react-native-paper";
import Constants from "expo-constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: { marginTop: Constants.statusBarHeight, marginBottom: 5 },
  menu: {
    top: Constants.statusBarHeight,
  },
  menuItem: {
    width: 10,
    fontSize: 5,
  },
});

const Navigation = () => {
  const [visible, setVisible] = React.useState(false);
  const _handleMore = () => setVisible(true);
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="IoT Feeder" />
      <Menu
        visible={visible}
        anchor={<Appbar.Action icon="hamburger" onPress={_handleMore} />}
        onDismiss={() => setVisible(false)}
        style={styles.menu}
      >
        <Menu.Item icon="cog-outline" onPress={() => {}} title="Setup device" />
        <Menu.Item
          icon="file-table-outline"
          onPress={() => {}}
          title="Credits"
        />
      </Menu>
    </Appbar.Header>
  );
};

export default Navigation;
