import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions, View } from "react-native";
import ClockWorks from "./ClockWorks";

const { width } = Dimensions.get("screen");

export default function App() {
  return (
    <View style={styles.container}>
      <ClockWorks character={"cat"} />
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
