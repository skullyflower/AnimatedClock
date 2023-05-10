import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions, View } from "react-native";
import ClockWork from "./ClockWork";

const { width } = Dimensions.get("screen");

export default function App() {
  return (
    <View style={styles.container}>
      <ClockWork character={"cat"} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
