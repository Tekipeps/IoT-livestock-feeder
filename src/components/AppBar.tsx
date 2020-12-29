import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Text,
} from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "gray",
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
      <ScrollView horizontal>
        <TouchableWithoutFeedback>
          {/* <Link to="/"> */}
          <Text style={styles.text}>Feeder</Text>
          {/* </Link> */}
        </TouchableWithoutFeedback>
        {/* <Link to="/signin"> */}
        <Text style={styles.text}>Drinker</Text>
        {/* </Link> */}
      </ScrollView>
    </View>
  );
};

export default AppBar;
