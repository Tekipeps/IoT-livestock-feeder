import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Text,
} from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 5,
    backgroundColor: "#f2f2f2",
  },
  contentContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
  },
  text: {
    color: "black",
    fontSize: 20,
    margin: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} horizontal>
        <TouchableWithoutFeedback>
          <Link to="/">
            <Text style={styles.text}>Home</Text>
          </Link>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Link to="/feeder">
            <Text style={styles.text}>Feeder</Text>
          </Link>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Link to="/drinker">
            <Text style={styles.text}>Drinker</Text>
          </Link>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

export default AppBar;
