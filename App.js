import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ClockWorks from "./ClockWorks";

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
