import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import themeContext from "../config/themeContext";

const Screen2 = () => {
  const theme = useContext(themeContext);
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.color }]}>
        This is a Profile Page!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 20,
  },
});

export default Screen2;
