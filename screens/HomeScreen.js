import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Button, Switch } from "react-native";
import themeContext from "../config/themeContext";

import { EventRegister } from "react-native-event-listeners";

const Screen1 = ({ navigation }) => {
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);
  return (
    <View style={[styles.container, { background: theme.background }]}>
      <Text style={[styles.text, { color: theme.color }]}>
        Welcome to HomeScreen!
      </Text>
      <Switch
        value={mode}
        onValueChange={(value) => {
          setMode(value);
          EventRegister.emit("changeTheme", value);
        }}
      />
      <View style={styles.button}>
        <Button
          title="View Profile"
          onPress={() => navigation.navigate("ProfileScreen")}
        />
      </View>
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
  button: {
    paddingTop: 20,
  },
});

export default Screen1;
