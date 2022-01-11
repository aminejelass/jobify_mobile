import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import CheckBox from "react-native-check-box";
// import CheckBox from "react-native-checkbox";

export default function RoutesMenuScreen({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Routes Menu Screen</Text>
      {/* <CheckBox
        style={{ flex: 1, padding: 10 }}
        checkBoxColor={"skyblue"}
        onClick={() => {
          setSelection(!isSelected);
        }}
        isChecked={isSelected}
        leftText={"CheckBox"}
      /> */}

      <Button
        style={styles.button}
        title="FilterPage"
        onPress={() => navigation.navigate("FilterPage")}
      />
      <Button
        style={styles.button}
        title="Signup"
        onPress={() => navigation.navigate("Signup")}
      />
      <Button
        style={styles.button}
        title="Login"
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        style={styles.button}
        title="HomePage"
        onPress={() => navigation.navigate("HomePage")}
      />

      <Button
        style={styles.button}
        title="Events"
        onPress={() => navigation.navigate("EventList")}
      />
      {/* <Button
        style={styles.button}
        title="Worker: Add Availability"
        onPress={() => navigation.navigate("SetAvailabilityWorker")}
      /> */}
      {/* <Button
        style={styles.button}
        title="Edit your Profile"
        onPress={() => navigation.navigate("EditProfile")}
      />  */}
      <Button
        style={styles.button}
        title="Worker: Profil"
        onPress={() => navigation.navigate("Profil")}
      />
      
      <Button
        style={styles.button}
        title="AddEvent"
        onPress={() => navigation.navigate("AddEvent")}
      />
      <Button title="AboutUs" onPress={() => navigation.navigate("AboutUs")} />
    </View>
  );
}

// prettier ignore
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  button: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
});
